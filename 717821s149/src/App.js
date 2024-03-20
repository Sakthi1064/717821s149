import './App.css';
import Header from './Components/Header';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Footer from './Components/Footer';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    <Route path="/Login" element={<Login/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
