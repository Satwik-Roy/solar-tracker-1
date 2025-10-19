"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef, RefObject } from "react";

const useOnScreen = (
  options?: IntersectionObserverInit
): [RefObject<HTMLElement>, boolean] => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

const CompanyVision = () => {
  const [heroRef, isHeroVisible] = useOnScreen({ threshold: 0.1 });
  const [purposeRef, isPurposeVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <>
      <section
        ref={heroRef}
        className={`relative w-full h-screen bg-white text-black flex items-center justify-center overflow-hidden transition-all duration-1000 ease-out ${
          isHeroVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
      >
        <div
          className="flex items-center justify-center font-black font-sans leading-none"
          style={{ fontSize: "min(33vw, 400px)", letterSpacing: "-0.04em" }}
        >
          <div className="relative">
            <span>L</span>
            <div
              className="absolute top-1/2 left-1/2 -translate-y-1/2 transform -translate-x-[25%]"
              style={{ width: "10em" }}
            >
              <p
                className="font-sans font-bold text-black"
                style={{
                  fontSize: "min(1.5vw, 18px)",
                  letterSpacing: "0.05em",
                  lineHeight: 1.4,
                }}
              >
                WE ARE MOST RADICAL
                <br />
                CREATIVE COMPANY
                <br />
                BASED IN TOKYO
              </p>
            </div>
          </div>

          <div
            className="relative shrink-0 flex items-center justify-center"
            style={{ width: "0.9em", height: "1em" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-[0.7em] h-auto relative"
                style={{ height: "1.05em" }}
              >
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/vi-2.webp"
                  alt="LQVE Visual Identity"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <span>V</span>
            <div
              className="absolute top-1/2 left-1/2 -translate-y-1/2 transform -translate-x-[65%]"
              style={{ width: "10em" }}
            >
              <div className="text-right">
                <h2
                  className="font-medium font-sans text-black"
                  style={{
                    fontSize: "min(2.5vw, 36px)",
                    lineHeight: 1.3,
                  }}
                >
                  Let&apos;s create love
                  <br />
                  from questions.
                </h2>
                <div
                  className="mt-4 text-black"
                  style={{ fontSize: "min(1vw, 12px)" }}
                >
                  <p className="font-sans">Corporate Illustration:</p>
                  <p className="font-sans mt-1">© Masakazu Ishiguro & LQVE</p>
                </div>
              </div>
            </div>
          </div>
          <div>E</div>
        </div>
      </section>

      <section
        ref={purposeRef}
        className={`bg-white text-black transition-all duration-1000 ease-out ${
          isPurposeVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
      >
        <div className="max-w-4xl mx-auto px-10 py-24 md:py-44">
          <h3 className="font-sans text-center text-base tracking-[0.1em]">
            (Our purpose)
          </h3>
          <p className="mt-16 font-sans text-base text-black/90 leading-[2] tracking-[0.02em]">
            To love something. This is still a mysterious realm that technology cannot solve. As a creative company that creates next-generation solutions, LQVE partners with all kinds of companies and draws visions together with "love" and "questions," creating outputs that transcend boundaries and bold actions. To survive in this chaotic era.
          </p>
        </div>
      </section>
    </>
  );
};

export default CompanyVision;