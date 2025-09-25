import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from "./assets/components/MyHeader";
import Main from "./assets/components/MyMain";

export default function MyApp() {
  return (
    <>
    <header>
           <div className="HeaderWrapper">
        <div className="LogoWrapper">
            <img src="./src/assets/img/dc-logo.png" alt="logo dc" className='LogoHeader'></img>
        </div>
        <nav>
            <ul>
                <li>
                    <a href="#">CHARACTERS</a>
                </li>
                <li>
                    <a href="#" className='BlueText'>COMICS</a>
                </li>
                <li>
                    <a href="#">TV</a>
                </li>
                <li>
                    <a href="#">GAMES</a>
                </li>
                <li>
                    <a href="#">COLLECTIBLES</a>
                </li>
                <li>
                    <a href="#">VIDEOS</a>
                </li>
                <li>
                    <a href="#">FANS</a>
                </li>
                <li>
                    <a href="#">NEWS</a>
                </li>
                <li>
                    <a href="#">SHOP</a>
                </li>
            </ul>
        </nav>
        </div>
    </header>
    <main>
      <section className="Content">
        <p> -- Content goes here -- </p>
      </section>
      <section className="Menu">
        <div className="MainWrapper">
                <div className="ImgWrapper">
                <img src="./src/assets/img/buy-comics-digital-comics.png" alt="comics icon" />
                <span>DIGITAL COMICS</span>
                </div>
                <div className="ImgWrapper">
                <img src="./src/assets/img/buy-comics-merchandise.png" alt="tshirt icon" />
                <span>DC MERCHANDISE</span>
                </div>

                <div className="ImgWrapper">
                <img src="./src/assets/img/buy-comics-subscriptions.png" alt="subscription" />
                <span>SUBSCRIPTION</span>
                </div>

                <div className="ImgWrapper">
                <img src="./src/assets/img/buy-comics-shop-locator.png" alt="shop locator" />
                <span>COMIC SHOP LOCATOR</span>
                </div>
                <div className="ImgWrapper">
                <img src="./src/assets/img/buy-dc-power-visa.svg" className="MenuSvg" alt="payment icon" />
                <span>DC POWER ERA</span>
                </div>
            </div>
      </section>
    </main>
    <footer>
        <section className="MainFooter">
            <div className="MainFooterWrapper">
                <div className='ColumnLeft'>
                     <ul>
                        <li>
                            <a href="#">Characters</a>
                        </li>
                        <li>
                            <a href="#">Comics</a>
                        </li>
                        <li>
                            <a href="#">Movies</a>
                        </li>
                        <li>
                            <a href="#">TV</a>
                        </li>
                        <li>
                            <a href="#">Games</a>
                        </li>
                        <li>
                            <a href="#">Videos</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                    </ul>
                
                    <ul>
                         <li>
                            <a href="#">DC</a>
                        </li>
                        <li>
                            <a href="#">Terms Of Use</a>
                        </li><li>
                            <a href="#">Privacy Policy(New)</a>
                        </li><li>
                            <a href="#">Ad Choices</a>
                        </li><li>
                            <a href="#">Advertising</a>
                        </li><li>
                            <a href="#">Jobs</a>
                        </li><li>
                            <a href="#">Subscriptions</a>
                        </li><li>
                            <a href="#">Talent Workshops</a>
                        </li><li>
                            <a href="#">CPSC Certificates</a>
                        </li><li>
                            <a href="#">Ratings</a>
                        </li><li>
                            <a href="#">Shop Help</a>
                        </li><li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                    <ul>
                         <li>
                            <a href="#">SITES</a>
                        </li>
                        <li>
                            <a href="#">DC</a>
                        </li>
                        <li>
                            <a href="#">MAD Magazine</a>
                        </li>
                        <li>
                            <a href="#">DC Kids</a>
                        </li>
                        <li>
                            <a href="#">DC Universe</a>
                        </li>
                        <li>
                            <a href="#">DC Power Visa</a>
                        </li>
                    </ul>
                    <ul>
                         <li>
                            <a href="#">SHOP</a>
                        </li>
                        <li>
                            <a href="#">Shop DC</a>
                        </li>
                        <li>
                            <a href="#">Shop DC Collectibles</a>
                        </li>
                    </ul>
                </div>
                <div className='ColumnRight'></div>
            </div>
        </section>
        <section className="SecondaryFooter">
            <div className='SecondaryFooterWrapper'>
                <div className='SecondaryFooterLeft'>
                    <button>SIGN-UP NOW!</button>
                </div>
                <div className='SecondaryFooterRight'>
                    <span>FOLLOW US</span>
                    <img src="./src/assets/img/footer-facebook.png" alt="facebook icon" />
                    <img src="./src/assets/img/footer-twitter.png" alt="twitter icon" />
                    <img src="./src/assets/img/footer-youtube.png" alt="youtube icon" />
                    <img src="./src/assets/img/footer-pinterest.png" alt="pinterest icon" />
                    <img src="./src/assets/img/footer-periscope.png" alt="periscope icon" />
                </div>
            
            </div>
        </section>
    </footer>
    </>
  );
}


