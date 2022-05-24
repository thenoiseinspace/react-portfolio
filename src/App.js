import React,{ useState } from 'react';
// import Navbar from './components/Navbar';
import NavTabs from './components/NavTabs'; 
import Header from './components/Header';
import Portfolio from "./components/Portfolio"
import Footer from './components/Footer';
import About from "./components/About"; 
import Contact from "./components/Contact"; 
import Resume from "./components/Resume"

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  const [selectedPage, setSelectedPage] = useState("Portfolio")
  return (
    <div>
      <Header />
      <NavTabs setSelectedPage = {setSelectedPage} sarah={"test"}/>
      {selectedPage === "Portfolio" && <Portfolio/>}
      {selectedPage === "About" && <About/>}
      {selectedPage === "Resume" && <Resume />}
      {selectedPage === "Contact" && <Contact />}

      <Footer />
    </div>
  );
}

export default App;
