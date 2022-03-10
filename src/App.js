import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { loadCountries } from './redux/Home/Home';
import HomeList from './components/HomeList';
import Details from './components/details';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCountries());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomeList />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
