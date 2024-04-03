// import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Secction4 from './component/Secction4';
import Section1 from './component/Section1';
import Section2 from './component/Section2';
import Section3 from './component/Section3';
import Section5 from './component/Section5';
import Section6 from './component/Section6';
import Sliders from './component/Sliders';

function App() {
  return (
    <>
      <Navbar/>
      <Sliders/>
      <Section1/> 
      <Section2/>
      <Section3/>
      <Secction4/>
      <Section5/>
      <Section6/>
      <Footer/>
    </>
  );
}

export default App;
