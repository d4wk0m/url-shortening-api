import React from "react";
import Footer from "./components/Footer";
import Getstarted from "./components/Getstarted";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Statistics from "./components/Statistics";
import { ShortcodeProvider } from "./context/ShortcodeContext";
import './scss/style.scss'

function App() {
  return (
    <div className="App">
      <ShortcodeProvider>
        <Menu />
        <Hero />
        <Statistics />
        <Getstarted />
        <Footer />
      </ShortcodeProvider>
    </div>
  );
}

export default App;
