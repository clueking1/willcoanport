import React from 'react'
import pdf from './assets/WillCoanRe.pdf'
import './style.css'

function NavBar() {

    return (
        <div className="bottom">
            <div className="footNavWrap">
               
                    <a href="https://www.linkedin.com/in/will-coan-b65613133/" target="_blank" className="link tag a">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
           
              
                    <a href="https://github.com/clueking1" target="_blank" className="link tag b">
                        <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
    
                <div className="navTitle c">
                    <a className=" title" href="/">Will Coan</a>
                </div>
       
                    <a href={pdf} target="_blank" className="link tag left d">
                        <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                    </a>
              
                
                    <a href="mailto:wcoan300@gmail.com" className="link tag no e">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </a>
              
            </div>
        </div>
    )
}

export default NavBar