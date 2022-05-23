import React from 'react';
// import Navbar from './components/Navbar';
import NavTabs from './NavTabs'; 
import Header from './components/Header';
import Footer from './components/Footer';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <NavTabs />
      {/* <Card />
      <Card /> */}
      <Footer />
    </div>
  );
}

export default App;
