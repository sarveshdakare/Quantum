// import logo from './logo.svg';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Nav from './Component/Nav';

import Signup from './Component/Signup';
import Login from './Component/Login';
import PrivateComponent from './Component/Privatecomponent';
import UserTable from './Component/Details';


function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route >
    <Route element={<PrivateComponent/>}>
      <Route path="/" element={<UserTable/>}/>
     
      <Route path="/logout" element={<h1>Logout Page</h1>}/>
     
   
     </Route>
     </Route>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
