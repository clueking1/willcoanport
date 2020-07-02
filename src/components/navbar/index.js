import React from 'react'
import './style.css'

function NavBar() {

    return (
        <div className="bottom">
            <div className="footNavWrap">
               
                    <a href="/" className="link tag a">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
           
              
                    <a href="/" className="link tag b">
                        <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
    
                <div className="navTitle c">
                    <a className=" title" href="/">Will Coan</a>
                </div>
       
                    <a href="/" className="link tag left d">
                        <i class="fa fa-file" aria-hidden="true"></i>
                    </a>
              
                
                    <a href="/" className="link tag no e">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </a>
              
            </div>
        </div>
    )
}

export default NavBar