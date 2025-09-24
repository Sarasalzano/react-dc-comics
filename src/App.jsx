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


