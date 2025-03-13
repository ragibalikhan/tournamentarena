import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Components/Nav";
import Hero from "@/Components/Hero";
export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero />

    </>
  );
}
