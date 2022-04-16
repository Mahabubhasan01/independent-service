import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Pages/HomePage/Home/Home'
import Services from './components/Pages/Services/Services';
import Navbar from './components/Pages/Navbar/Navbar';
import CheckOut from './components/Pages/CheckOut/CheckOut';
import AboutMe from './components/Pages/AboutMe/AboutMe';
import NoutFound from './components/Pages/NotFound/NoutFound';
import SignIn from './components/Pages/SignIn/Register';
import Login from './components/Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NoutFound></NoutFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
