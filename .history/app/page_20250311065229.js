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

   
    </>
  );
}
