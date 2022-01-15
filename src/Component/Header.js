import React from "react";

function Header() {
    return(
        <div className="nkn-navbar">    
            <nav className="nkn-navbar-content">
                <ul className="nkn-nav">
                    <li className="nkn-nav-item nkn-active"><a href="#">Home</a></li>
                    <li className="nkn-nav-item"><a href="#">Product detail</a></li>
                    <li className="nkn-nav-item"><a href="#">About</a></li>                
                </ul>
            </nav>        
        </div> 
    );      
}                          
export default Header;