import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Components/Nav";
import Hero from "@/Components/Hero";
import SliderSection from "@/Components/TSlider";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero />
    <SliderSection/>

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
      

    </>
  );
}
