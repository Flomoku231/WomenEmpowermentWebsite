import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import SubscribedForm from './Pages/SubscribedForm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage/>} path='/' />
        <Route element={ <SubscribedForm/> } path='/SubscribedForm' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
