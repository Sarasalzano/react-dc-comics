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


