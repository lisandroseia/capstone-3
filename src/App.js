import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadCountries } from './redux/Home/Home';
import './App.css';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCountries())
    },[])
return ( 
  <button type='button'> log </button>
)
}

export default App;
