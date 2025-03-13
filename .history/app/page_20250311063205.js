import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Components/Nav";
import Hero from "@/Components/Hero";
import SliderSection from "@/Components/TSlider";
import './Frame.css'
export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero />
    <SliderSection/>

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
      

    </>
  );
}
