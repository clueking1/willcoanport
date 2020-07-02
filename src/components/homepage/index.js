import React from 'react'
import './style.css'
import NavBar from '../navbar'
import recom from './assets/recom.jpg'
import pp from './assets/pp.jpg'
import syp from './assets/syp.jpg'
import weather from './assets/weather.jpg'
import zodiac from './assets/zodiac.jpg'
import dp from './assets/dayplanner.jpg'

function HomePageCon() {
    return (
        <div className="hpWrap">
            <div className="hpColor">
                <h2 className="homeTitle">My Portfolio</h2>
                <div className="port">
                    <img src={recom} alt="recommerce" className="image" />
                    <div className="description">
                        <h3>Description</h3>
                        <p>
                            An ecommerce site for users to signup and upload an item to sell.
                            Incorporated PayPal sandbox when buyers checkout. Username: frost Password: frost.
                        </p>
                    </div>
                    <div className="languages">
                        <h3>languages</h3>
                        <p>
                            React, Node/Express, Javascript, PayPal
                        </p>
                    </div>
                   
                    <button><i class="fa fa-github" aria-hidden="true"></i></button>
                    <button><i class="fa fa-globe" aria-hidden="true"></i></button>
                  
                </div>
                <div className="port">
                    <img src={pp} alt="pennyPinchers" className="image" />
                    <div className="description">
                        <h3>Description</h3>
                        <p>
                            An ecommerce site for users to signup and upload an item to sell.
                            Incorporated PayPal sandbox when buyers checkout. Username: frost Password: frost.
                        </p>
                    </div>
                    <div className="languages">
                        <h3>languages</h3>
                        <p>
                            React, Node/Express, Javascript, PayPal
                        </p>
                    </div>
                   
                    <button><i class="fa fa-github" aria-hidden="true"></i></button>
                    <button><i class="fa fa-globe" aria-hidden="true"></i></button>
                  
                </div>
                <div className="port">
                    <img src={syp} alt="pennyPinchers" className="image" />
                    <div className="description">
                        <h3>Description</h3>
                        <p>
                            An ecommerce site for users to signup and upload an item to sell.
                            Incorporated PayPal sandbox when buyers checkout. Username: frost Password: frost.
                        </p>
                    </div>
                    <div className="languages">
                        <h3>languages</h3>
                        <p>
                            React, Node/Express, Javascript, PayPal
                        </p>
                    </div>
                   
                    <button><i class="fa fa-github" aria-hidden="true"></i></button>
                    <button><i class="fa fa-globe" aria-hidden="true"></i></button>
                  
                </div>
                <div className="port">
                    <img src={weather} alt="pennyPinchers" className="image" />
                    <div className="description">
                        <h3>Description</h3>
                        <p>
                            An ecommerce site for users to signup and upload an item to sell.
                            Incorporated PayPal sandbox when buyers checkout. Username: frost Password: frost.
                        </p>
                    </div>
                    <div className="languages">
                        <h3>languages</h3>
                        <p>
                            React, Node/Express, Javascript, PayPal
                        </p>
                    </div>
                   
                    <button><i class="fa fa-github" aria-hidden="true"></i></button>
                    <button><i class="fa fa-globe" aria-hidden="true"></i></button>
                  
                </div>
                <div className="port">
                    <img src={zodiac} alt="pennyPinchers" className="image" />
                    <div className="description">
                        <h3>Description</h3>
                        <p>
                            An ecommerce site for users to signup and upload an item to sell.
                            Incorporated PayPal sandbox when buyers checkout. Username: frost Password: frost.
                        </p>
                    </div>
                    <div className="languages">
                        <h3>languages</h3>
                        <p>
                            React, Node/Express, Javascript, PayPal
                        </p>
                    </div>
                   
                    <button><i class="fa fa-github" aria-hidden="true"></i></button>
                    <button><i class="fa fa-globe" aria-hidden="true"></i></button>
                  
                </div>
                <div className="port last">
                    <img src={dp} alt="pennyPinchers" className="image" />
                    <div className="description">
                        <h3>Description</h3>
                        <p>
                            An ecommerce site for users to signup and upload an item to sell.
                            Incorporated PayPal sandbox when buyers checkout. Username: frost Password: frost.
                        </p>
                    </div>
                    <div className="languages">
                        <h3>languages</h3>
                        <p>
                            React, Node/Express, Javascript, PayPal
                        </p>
                    </div>
                   
                    <button><i class="fa fa-github" aria-hidden="true"></i></button>
                    <button><i class="fa fa-globe" aria-hidden="true"></i></button>
                  
                </div>

                <NavBar />
            </div>
        </div>
    )
}

export default HomePageCon
