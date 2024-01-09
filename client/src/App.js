//import logo from './logo.svg';
import RegistrationForm from '../src/components/register'
import Login from '../src/components/login'
import Home from '../src/components/home'
import './App.css';
//import signup from "../src/components/register"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (

 <BrowserRouter>
 <Routes>
  <Route  path='/register' element ={<RegistrationForm/>}>  </Route>
  <Route  path='/login' element ={<Login/>}>  </Route>
  <Route  path='/home' element={<Home/>}>   </Route>
 </Routes>
 </BrowserRouter>



    // <div className="App">
    //  <h1>Registration Form</h1>
    //  <RegistrationForm></RegistrationForm>
    // </div>
  );
}

export default App;
