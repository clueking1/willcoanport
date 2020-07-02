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
                        <h3>Recommerce</h3>
                        <p>
                            An ecommerce site for users to signup and upload an item to sell.
                            Incorporated PayPal sandbox when buyers checkout. Username: frost Password: frost.
                        </p>
                    </div>
                    <div className="languages">
                        <h3>languages</h3>
                        <p>
                            React, Node/Express, Javascript, MySQL, PayPal
                        </p>
                    </div>
                    <a href="https://github.com/clueking1/recommerce" target="_blank">
                        <button>
                            <i class="fa fa-github" aria-hidden="true"></i>
                        </button>
                    </a>
                    <a href="https://recommercee.herokuapp.com/" target="_blank">
                        <button>
                            <i class="fa fa-globe" aria-hidden="true"></i>
                        </button>
                    </a>
                </div>
                <div className="port">
                    <img src={pp} alt="pennyPinchers" className="image" />
                    <div className="description">
                        <h3>Penny Pinchers</h3>
                        <p>
                            Mobile friendly app that helps you save money with your friend! Sign up
                            with your friends to see who saves the most money and is the best penny pincher!
                            Username: test123 Password: test123
                        </p>
                    </div>
                    <div className="languages">
                        <h3>languages</h3>
                        <p>
                            React, Node/Express, Javascript, MySQL, Socket.io, Bcrypt, CSS
                        </p>
                    </div>
                    <a href="https://github.com/clueking1/penny-pinchers-v2" target="_blank">
                        <button>
                            <i class="fa fa-github" aria-hidden="true"></i>
                        </button>
                    </a>
                    <a href="https://penny-pinchers-v2.herokuapp.com/" target="_blank">
                        <button>
                            <i class="fa fa-globe" aria-hidden="true"></i>
                        </button>
                    </a>
                </div>
                <div className="port">
                    <img src={syp} alt="pennyPinchers" className="image" />
                    <div className="description">
                        <h3>Save Your Page</h3>
                        <p>
                        Search for your favorite book then view more to be able to read the description 
                        of the book and be able to save it to your collection!
                        </p>
                    </div>
                    <div className="languages">
                        <h3>languages</h3>
                        <p>
                            React, Node/Express, Javascript, MySQL, Socket.io
                        </p>
                    </div>
                    <a href="https://github.com/clueking1/SaveYourPage" target="_blank">
                        <button>
                            <i class="fa fa-github" aria-hidden="true"></i>
                        </button>
                    </a>
                    <a href="https://saveyourpage.herokuapp.com/" target="_blank">
                        <button>
                            <i class="fa fa-globe" aria-hidden="true"></i>
                        </button>
                    </a>
                </div>
                <div className="port">
                    <img src={weather} alt="pennyPinchers" className="image" />
                    <div className="description">
                        <h3>Weather Dashboard</h3>
                        <p>
                            Using Openweather API to get the current day's weather and the weather for the next 5 days 
                            when you search for a city!
                        </p>
                    </div>
                    <div className="languages">
                        <h3>languages</h3>
                        <p>
                            HTML, CSS, AJAX, jQuery
                        </p>
                    </div>
                    <a href="https://github.com/clueking1/Weather-API" target="_blank">
                        <button>
                            <i class="fa fa-github" aria-hidden="true"></i>
                        </button>
                    </a>
                    <a href="https://clueking1.github.io/Weather-API/" target="_blank">
                        <button>
                            <i class="fa fa-globe" aria-hidden="true"></i>
                        </button>
                    </a>
                </div>
                <div className="port">
                    <img src={zodiac} alt="pennyPinchers" className="image" />
                    <div className="description">
                        <h3>Written In The Stars</h3>
                        <p>
                        Find your Astrological sign and hit the button to view your daily horoscope and also your 
                        cardinal sign and what that means for you!
                        </p>
                    </div>
                    <div className="languages">
                        <h3>languages</h3>
                        <p>
                            HTML, CSS, jQuery, AJAX
                        </p>
                    </div>
                    <a href="https://github.com/clueking1/zodiac-astrology" target="_blank">
                        <button>
                            <i class="fa fa-github" aria-hidden="true"></i>
                        </button>
                    </a>
                    <a href="https://clueking1.github.io/zodiac-astrology/" target="_blank">
                        <button>
                            <i class="fa fa-globe" aria-hidden="true"></i>
                        </button>
                    </a>
                </div>
                <div className="port last">
                    <img src={dp} alt="pennyPinchers" className="image" />
                    <div className="description">
                        <h3>Description</h3>
                        <p>
                            Plan out your day from 9am - 5pm. features: color coded times to indicate past, present and future then saves the Todos in local 
                            storage and clears it out everyday. Displays current todo Inspirational quotes API
                        </p>
                    </div>
                    <div className="languages">
                        <h3>languages</h3>
                        <p>
                            HTML, jQuery, CSS, AJAX
                        </p>
                    </div>
                    <a href="https://github.com/clueking1/Day-Planner" target="_blank">
                        <button>
                            <i class="fa fa-github" aria-hidden="true"></i>
                        </button>
                    </a>
                    <a href=" https://clueking1.github.io/Day-Planner/" target="_blank">
                        <button>
                            <i class="fa fa-globe" aria-hidden="true"></i>
                        </button>
                    </a>
                </div>

                <NavBar />
            </div>
        </div>
    )
}

export default HomePageCon
