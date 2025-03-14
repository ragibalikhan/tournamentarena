"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Components/Nav";
import Hero from "@/Components/Hero";
import SliderSection from "@/Components/TSlider";
import { Frame } from "@/Components/Frame";
import { CarouselWithContent } from "@/Components/Crousle";
import ToggleButtons from "@/Components/ButtonsCat";
import TournamentMatchup from "@/Components/Onevone";

import React, { useEffect } from 'react';

import HeroSection from '@/components/home/HeroSection';
import CategoryPills from '@/components/home/CategoryPills';
import TournamentCard from '@/components/home/TournamentCard';
import FoundersClub from '@/components/home/FoundersClub';
import LeaderboardSection from '@/components/home/LeaderboardSection';

import EventsSection from '@/components/home/EventsSection';
import SHero from "@/Components/Secondhero";
import VideoSec from "@/Components/Videosec";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <Hero />
        {/* <HeroSection /> */}

        <SHero/>
  
        <div className="bg-black">
          <CategoryPills />

          {/* <div className="max-w-6xl mx-auto px-4 py-8">
            <TournamentCard />
          </div> */}

          <TournamentMatchup/>

          <VideoSec />

          <FoundersClub />

          <LeaderboardSection />

          {/* <VideoSection withPagination={true} /> */}

          <EventsSection />
        </div>
      </main>

      <footer className="bg-black py-8 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            © 2024 Arena. All rights reserved. A premium gaming and sports streaming platform.
          </p>
        </div>
      </footer>
    </div>
  );
}
