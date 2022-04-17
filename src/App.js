import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Pages/HomePage/Home/Home'
import Services from './components/Pages/Services/Services';
import CheckOut from './components/Pages/CheckOut/CheckOut';
import AboutMe from './components/Pages/AboutMe/AboutMe';
import SignIn from './components/Pages/SignIn/Register';
import Login from './components/Pages/Login/Login';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import CustomNavbar from './components/Pages/CustomNavbar/CustomNavbar';
import NotFound from './components/Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <CustomNavbar></CustomNavbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/checkout' element={
          <ProtectedRoute>
            <CheckOut></CheckOut>
          </ProtectedRoute>
        }></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
        <Route path='/register' element={<SignIn/>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
