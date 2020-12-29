import React, { useState } from 'react';
import logo from '../ui/tc.png';
function Sidebar(){

    const[nav,setNav]=useState([
        {label:"home",slug:"/",icon:"icon-home"},
        {label:"Discover",slug:"discover",icon:"ico-tag"},
        {label:"Categories",slug:"categories",icon:"icon-home"},
        {label:"My Courses",slug:"mycourses",icon:"icon-home"}
    ])

    const [currentPage ,setCurrentPage] =useState("/"); 
    var navigation =[];
    for(let i=0;i<nav.length; i++){
        navigation.push(
            <li key={"nav-" + i + "-" + nav[i].slug}>
            
                <a href={nav[i].slug} className={" aic link noul flex c333" + (currentPage ==nav[i].slug ? "on":"" )}>
                    <div  className="ico icon-home">
                        <h2 className="lbl s24">{nav[i].label}</h2>
                    </div>
                </a>
            </li>
        )
    }
    

    return(
    <div className="sidebar rel">
        <a href="#" className="logo b1">
            <img src={logo} className='b1'/>
        </a>
        <ul className="nav">
            {navigation}
        </ul>
        <div className="updated-course flex aic">
            <div className="icon-lamp-bright ico"/>
            <div className="lbl s15 fontb c333">
                Updatetd Courses
                <h2 className="author s15 c777">by vritika</h2>
            </div>
        </div>
        <div className="stats flex">
            <div className="stats box flex">
            <div className="ico icon shield"/>
            <h2 className="val s15 c333 fontb">lists</h2>
            <h2 className="lbl s15 c777">points</h2>
        </div>
        </div>
        <div className="stats box flex">
            <div className="ico icon shield"/>
            <h2 className="val s15 c333 fontb">lists</h2>
            <h2 className="lbl s15 c777">battrey</h2>
        </div>
        
    </div>
    )}
export default Sidebar;