 
import './App.css';
import { Button } from 'react-bootstrap';
import Navbarc from './Components/Navbarc';
import Home from './Components/Home';
import Footer from './Components/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { CartProvider } from './Components/ContextReducer';
import Cart from './Components/Cart';
import MyOrders from './Components/MyOrders';

function App() {

  
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter> 
      <Navbarc/>
      <Routes>
          <Route path="/*" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signUp" exact element={<SignUp />} />
          <Route path="/cart" exact element={<Cart data={[]} />} />
          <Route path="/myOrders" exact element={<MyOrders/>} />
        </Routes>
       
      </BrowserRouter>
     <Footer/>
     </CartProvider>
    </div>
  );
}

export default App;
