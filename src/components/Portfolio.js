import React from 'react';
import UkraineNewsNow from './Assets/UkraineNewsNow.png';
import FarmerBarter from './Assets/FarmerBarter.png';
import EmployeeTracker from './Assets/EmployeeTracker.png'; 
import DayPlanner from './Assets/dayplanner.png'; 
import Ecomm from './Assets/ecomm.png'; 

import "../styles/styles.css"; 

// let UkraineNewsNow; 
// let FarmerBarter;
// let EmployeeTracker; 
// let DayPlanner; 
// let Ecomm; 


export default function Projects() {
  return (
    <div className='about'>
      <h1>My Projects</h1>
      <hr></hr>
      <p>
        Some of my recent projects include:
      </p>
      <div className='portfolio'>
        <div className="portfolio-card">
            <h2>Ukraine News Now</h2>
            <a href="https://fisher-davis.github.io/Ukraine-News-Now/"><img className="projectPhoto" src={UkraineNewsNow} alt='Ukraine News Now screencap' /></a>
            <a href="https://github.com/thenoiseinspace/Ukraine-News-Now">View on GitHub</a>
        </div>
        
        <div className="portfolio-card">
            <h2>Farmer Barter</h2>
            <a href="TK*need heroku link"><img className="projectPhoto" src={FarmerBarter} alt='Farmer Barter screencap' /></a>
            <a href='https://github.com/thenoiseinspace/Farmer-Barter'>View on GitHub</a>
        </div>
        
        <div className="portfolio-card">
            <h2>Employee Tracker</h2>
            <a href='TK*heroku link or just switch to images'><img className="projectPhoto" src={EmployeeTracker} alt='Employee Tracker screenshot' /></a>
            <a href='https://github.com/thenoiseinspace/traquer-de-employee'>View on GitHub</a>
        </div>
        
        <div className="portfolio-card">
            <h2>Day Planner</h2>
            <a href='TK*heroku or just switch to images'><img className="projectPhoto" src={DayPlanner} alt='Day planner screenshot' /></a>
            <a href='https://github.com/thenoiseinspace/day-planner'>View on GitHub</a>
        </div>
        
        <div className="portfolio-card">
            <h2>Ecommerce Back-End</h2>
            <a href='TK*heroku or just switch to images'><img className="projectPhoto" src={Ecomm} alt='Ecommerce back-end screenshot' /></a>
            <a href='https://github.com/thenoiseinspace/ecommerce-backend'>View on GitHub</a>
        </div>

      </div>
    </div>
  );
}