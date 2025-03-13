import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Components/Nav";
import Hero from "@/Components/Hero";
import SliderSection from "@/Components/TSlider";
import { Frame } from "@/Components/Frame";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero />
    <SliderSection/>

   {/* <Frame/> */}

   <div className="frame-1">
        <img className="rectangle-141" src="rectangle-1410.svg" />
        <img className="rectangle-142" src="rectangle-1420.svg" />
        <div className="join-the-big-tournament">Join The Big Tournament </div>
        <div className="welcome-to-atrena-the-next-generation-streaming-platform-for-gamers-and-sports-enthusiasts-join-our-community-and-start-streaming-today">
          Welcome to Atrena - The next generation streaming platform for gamers
          and sports enthusiasts. Join our community and start streaming today.{" "}
        </div>
        <div className="united-kingdom">United Kingdom </div>
        <div className="sage">SAGE </div>
        <div className="china">
          China
          <br />{" "}
        </div>
        <div className="_1-vs-1">1 vs 1 </div>
        <img className="tanner" src="tanner0.png" />
        <div className="phoenix">PHOENIX </div>
        <img className="tyler" src="tyler0.png" />
      </div>
      <div className="ellipse-6"></div>
      <div className="ellipse-12"></div>
      <div className="ellipse-7"></div>
      <div className="ellipse-8"></div>
      <div className="ellipse-9"></div>
      <div className="ellipse-10"></div>
      <div className="ellipse-11"></div>
      <div className="ellipse-62"></div>
      <div className="ellipse-122"></div>
      <div className="ellipse-72"></div>
      <div className="ellipse-82"></div>
      <div className="ellipse-92"></div>
      <div className="ellipse-102"></div>
      <div className="ellipse-112"></div>
      
      <img className="group" src="group0.svg" />
      <img className="group2" src="group1.svg" />
      <img className="group3" src="group2.svg" />
      <img className="group4" src="group3.svg" />
      <img className="group5" src="group4.svg" />
      <img className="group6" src="group5.svg" />
      

    </>
  );
}
