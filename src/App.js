import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadCountries } from './redux/Home/Home';
import HomeList from './components/HomeList';
import Details from './components/details';
import { Route, Routes } from 'react-router-dom';

function App() {
    const date = new Date
    const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCountries())
    },[])
return ( 
    <Routes>
        <Route path="/" element={<HomeList />} />
        <Route path="/details/:id" element={<Details />}/>
    </Routes>
)
}

export default App;
