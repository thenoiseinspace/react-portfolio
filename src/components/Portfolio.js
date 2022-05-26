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
      <h1 className="pageHeader">My Projects</h1>
      <hr></hr>
      <p>
        Some of my recent projects include:
      </p>
      <div className='portfolio'>
        <div className="portfolio-card">
            <h2>Ukraine News Now</h2>
            <a href="https://fisher-davis.github.io/Ukraine-News-Now/"><img className="projectPhoto" src={UkraineNewsNow} alt='Ukraine News Now screencap' /></a>
            <p> A one-stop shop where people concerned about the current situation in Ukraine can get informed and get involved by reading the latest news from sources around the world, and seeing charities currently taking action. </p>
           <a href='https://github.com/thenoiseinspace/Ukraine-News-Now'>  <button className="button" onclick="a href='https://github.com/thenoiseinspace/Ukraine-News-Now';">
            View on GitHub
            </button></a>
        </div>
        
        <div className="portfolio-card">
            <h2>Farmer Barter</h2>
            <a href="https://github.com/thenoiseinspace/Farmer-Barter"><img className="projectPhoto" src={FarmerBarter} alt='Farmer Barter screencap' /></a>
            <p>Nearly 40% of food in America is wasted. This app aims to minimize food waste and reduce the carbon associated with the commercial food market by creating a place where farmers and hobby growers can trade and barter directly.</p>
            <a href='https://github.com/thenoiseinspace/Farmer-Barter'> <button className="button" onclick="window.location.href='https://github.com/thenoiseinspace/Farmer-Barter';">
            View on GitHub
            </button></a>
        </div>
        
        <div className="portfolio-card">
            <h2>Employee Tracker</h2>
            <a href='https://github.com/thenoiseinspace/traquer-de-employee'><img className="projectPhoto" src={EmployeeTracker} alt='Employee Tracker screenshot' /></a>
            <p>This is a server-side database program designed to allow managers to keep records of their employees' names, job titles, departments, salaries, and managers.</p>
            <a href="https://github.com/thenoiseinspace/traquer-de-employee"><button className="button" onclick="window.location.href='https://github.com/thenoiseinspace/traquer-de-employee';">
            View on GitHub
            </button></a>
        </div>
        
        <div className="portfolio-card">
            <h2>Day Planner</h2>
            <a href='https://github.com/thenoiseinspace/day-planner'><img className="projectPhoto" src={DayPlanner} alt='Day planner screenshot' /></a>
            <p>This app allows users to track appointments for each hour of the workday, and changes colors to reflect the current time.</p>
            <a href="https://github.com/thenoiseinspace/day-planner"><button className="button" onclick="window.location.href='https://github.com/thenoiseinspace/day-planner';">
            View on GitHub
            </button></a>
        </div>
        
        <div className="portfolio-card">
            <h2>Ecommerce Back-End</h2>
            <a href='https://github.com/thenoiseinspace/ecommerce-backend'><img className="projectPhoto" src={Ecomm} alt='Ecommerce back-end screenshot' /></a>
            <p>This server-side command-line application allows businesses to track and manage large databases of products, including product descriptions, prices, categories, and in-stock status.</p>
           <a href="https://github.com/thenoiseinspace/ecommerce-backend"> <button className="button" onclick="window.location.href='https://github.com/thenoiseinspace/ecommerce-backend';">
            View on GitHub
            </button></a>
        </div>

      </div>
    </div>
  );
}