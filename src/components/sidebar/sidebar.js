import React, { useState } from 'react';
import Logo from './logo.svg';
import {
    FaTh,
    FaUserAlt,
    FaRegChartBar,
    FaAngleDoubleLeft,
    FaCog,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './sidebar.css';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaTh/>
        },
        {
            path:"/contact",
            name:"Contact",
            icon:<FaUserAlt/>
        },
        {
            path:"/information",
            name:"Information",
            icon:<FaRegChartBar/>
        },
        {
            path:"/guide",
            name:"Guide",
            icon:<FaCog/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
             
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><img src={Logo} alt='LOGO'/></h1>
                   
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaAngleDoubleLeft onClick={toggle}/>
                   </div>
               </div>
               
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               <hr />
           </div>
           <main>{children}</main>
          
        </div>
    );
};

export default Sidebar;