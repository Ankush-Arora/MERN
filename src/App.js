 
import './App.css';
import { Button } from 'react-bootstrap';
import Navbarc from './Components/Navbarc';
import Home from './Components/Home';
import Footer from './Components/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {

  
  return (
    <div className="App">
      <BrowserRouter> 
      <Navbarc/>
      <Routes>
          <Route path="/*" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signUp" exact element={<SignUp />} />
        </Routes>
       
      </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
