import React from 'react';
// import UkraineNewsNow from '../../images/UkraineNewsNow.png';
// import FarmerBarter from '../../images/FarmerBarter.png';
// import EmployeeTracker from '../../images/EmployeeTracker.png'
// import DayPlanner from '../../images/DayPlanner.png'
// import Ecomm from '../../images/Ecomm.png'

export default function Projects() {
  return (
    <div className='about'>
      <h1>My Projects</h1>
      <hr></hr>
      <p>
        Some of my recent projects include:
      </p>
      <div className='portfolio'>
        <p>Ukraine News Now</p>
        <a href="TK*need heroku link"><img src={UkraineNewsNow} alt='Ukraine News Now screencap' /></a>
        <a href="https://github.com/thenoiseinspace/Ukraine-News-Now">View on GitHub</a>
        
        <p>Farmer Barter</p>
        <a href="TK*need heroku link"><img src={FarmerBarter} alt='Farmer Barter screencap' /></a>
        <a href='https://github.com/thenoiseinspace/Farmer-Barter'>View on GitHub</a>
        
        <p>Employee Tracker</p>
        <a href='TK*heroku link or just switch to images'><img src={EmployeeTracker} alt='Employee Tracker screenshot' /></a>
        <a href='https://github.com/thenoiseinspace/traquer-de-employee'>View on GitHub</a>
        
        <p>Day Planner</p>
        <a href='TK*heroku or just switch to images'><img src={DayPlanner} alt='Portfolio img' /></a>
        <a href='https://github.com/thenoiseinspace/day-planner'>View on GitHub</a>
        
        <p>Ecommerce Back-End</p>
        <a href='TK*heroku or just switch to images'><img src={Ecomm} alt='Portfolio img' /></a>
        <a href='https://github.com/thenoiseinspace/ecommerce-backend'>View on GitHub</a>
      </div>
    </div>
  );
}