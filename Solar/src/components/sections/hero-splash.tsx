"use client";

import { useState } from "react";
import { Play, Square, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function HeroSplash() {
  const [musicPlaying, setMusicPlaying] = useState(false);

  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Massive LQVE Typography Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[200px] md:text-[280px] lg:text-[350px] font-black leading-[0.9] tracking-[-0.02em] text-black opacity-100">
          LQVE
        </h1>
      </div>

      {/* Central Manga Illustration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[650px]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/vi-2.webp"
            alt="LQVE Corporate Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Left Side Text - English Tagline */}
      <div className="absolute left-6 md:left-12 lg:left-20 top-1/2 -translate-y-1/2 max-w-[200px] md:max-w-[240px]">
        <p className="text-xs md:text-sm font-bold tracking-[0.05em] leading-[1.4] uppercase">
          WE ARE MOST RADICAL CREATIVE COMPANY BASED IN TOKYO
        </p>
      </div>

      {/* Right Side Text - Japanese Tagline */}
      <div className="absolute right-6 md:right-12 lg:right-20 top-1/2 -translate-y-1/2 max-w-[220px] md:max-w-[280px]">
        <p className="text-lg md:text-2xl font-normal leading-[1.5] mb-4">
          Let&apos;s create love from questions.
        </p>
        <p className="text-xs md:text-sm text-[#666666]">
          Corporate Illustration:<br />
          © Masakazu Ishiguro & LQVE
        </p>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Music Player */}
          <button
            onClick={() => setMusicPlaying(!musicPlaying)}
            className="flex items-center gap-2 text-xs md:text-sm font-medium hover:opacity-70 transition-opacity"
          >
            <span>Music:</span>
            {musicPlaying ? (
              <>
                <Square className="w-4 h-4" />
                <span>Stop</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span>Play</span>
              </>
            )}
          </button>

          {/* Scrolling Marquee Text */}
          <div className="hidden md:block overflow-hidden max-w-[300px]">
            <div className="inline-block animate-[marquee_15s_linear_infinite] whitespace-nowrap">
              <span className="text-xs font-medium tracking-[0.08em]">
                LQVE CORPORATE SONG · LQVE CORPORATE SONG · LQVE CORPORATE SONG ·
              </span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 text-xs md:text-sm">
            <button className="flex items-center gap-1 hover:opacity-70 transition-opacity">
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden md:inline">(Prev.)</span>
            </button>
            <button className="flex items-center gap-1 hover:opacity-70 transition-opacity">
              <span className="hidden md:inline">(Next)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <span className="ml-4 text-[#666666]">(C)LQVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}