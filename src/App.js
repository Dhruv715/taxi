// import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Section2 from './component/Section2';
import Section3 from './component/Section3';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>
          <Routes>
          {/* Home Page */}
          <Route path="/" element={ <Home/> } />
          {/* Services */}
          <Route path="/service" element={ <Section3/> } />
          {/* Book Ride Page */}
          <Route path="/bookride" element={ <Section2/> } />
          {/* About Us */}
          <Route path="/about" element={ <About/> } />
          </Routes>
      <Footer/>
    </>
  );
}

export default App;
