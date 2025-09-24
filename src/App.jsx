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
      <section className="Content"></section>
      <section className="Menu"></section>
    </main>
    <footer>
        <section className="MainFooter"></section>
        <section className="SecondaryFooter"></section>
    </footer>
    </>
  );
}


