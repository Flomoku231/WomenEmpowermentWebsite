import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutPage from './Pages/AboutPage';
import EducationProgramsDetails from './Pages/EducationProgramsDetails';
import JobDetails from './Pages/JobDetails';
import LandingPage from './Pages/LandingPage/LandingPage';
import NewsEvents from './Pages/News&Events/NewsEvents';
import OurPrograms from './Pages/OurPrograms/OurPrograms';
import SubscribedForm from './Pages/SubscribedForm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage/>} path='/' />
        <Route element={ <SubscribedForm/> } path='/SubscribedForm' />
        <Route element={ <AboutPage/> } path='/AboutPage' />
        <Route element={ <OurPrograms/> } path='/OurPrograms' />
        <Route element={ <NewsEvents/> } path='/News&Events' />
        <Route element={ <EducationProgramsDetails/> } path='/Education' />
        <Route element={ <JobDetails/> } path='/JobDetails' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
