import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import AddEditUser from './pages/AddEditUser';
import Register from './pages/Register';
import Home from './pages/Home';
import UserInfor from './pages/UserInfor';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Product from './pages/Product';



function App() {
  return (
    <div className="App">
        <ToastContainer/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/add" element={<AddEditUser/>}/> */}
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/:id" element={<Product/>}/>

          <Route path="/contact" element={<Contact/>}/>
          {/* <Route path="/edit/:id" element={<AddEditUser/>}/> */}
          <Route path="/userinfor/:id" element={<UserInfor/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
  );
}

export default App;
