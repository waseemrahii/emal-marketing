
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Navbar/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './pages/About/About';
import PricingCard from './pages/Pricing/Pricing';
import Contact_Page from './pages/Contact/Contact_Page';
import ContactMessages from './pages/Contact/ContactMessages';
import Login from './components/Login/Login';
import SignUp from './components/Signup/Signup';
import Cart from './components/Cart/AddToCart';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/pricing" element={< PricingCard/>} />
    <Route path="/support" element={<Contact_Page />} />
           <Route path="/messages" element={<ContactMessages />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} /> 
      

      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
