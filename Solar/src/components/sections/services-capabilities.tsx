"use client";

import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight } from 'lucide-react';

const capabilities = [
  {
    id: "01",
    title: "Brand Core",
    columns: [
      ["Research", "Brand Positioning", "Vision / Mission"],
      ["Naming", "Brand Statement"],
    ],
  },
  {
    id: "02",
    title: "Strategy",
    columns: [
      ["Advertising / Campaign Ideas", "Concept Design", "Storytelling"],
      ["Creative Direction", "VI / CI", "Content Planning"],
    ],
  },
  {
    id: "03",
    title: "Communication",
    columns: [
      ["Branded Content Planning", "Ad/CM Promotion Planning", "Campaign Concept"],
      ["Copywriting", "Storywriting"],
    ],
  },
  {
    id: "04",
    title: "Experience",
    columns: [
      ["CM & Promotional Films", "Online & Signage Videos", "Graphic Design"],
      ["Product Design", "Photo Direction & Stills"],
    ],
  },
  {
    id: "05",
    title: "Artist Collaboration",
    columns: [
      ["Talent Production", "Music Production", "Product & Service Development"],
    ],
  },
];

const ServicesCapabilities = () => {
  return (
    <section className="bg-background text-foreground py-24 lg:py-40 border-t border-b border-border">
      <div className="container mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-20 gap-y-16">
          <div className="lg:col-span-1">
            <h2 className="font-sans font-bold tracking-[0.1em] uppercase mb-8">
              <span className="text-base">(Service)</span>
              <br />
              <span className="text-2xl leading-none">What We Do</span>
            </h2>
            <p className="font-sans text-base md:text-lg mb-6">
              We actively cross disciplines and generate new solutions.
            </p>
            <p className="font-sans text-sm md:text-base leading-[1.8] tracking-[0.02em]">
              From strategy to concept creation, output that doesn't choose means, and communication plans, in this era where stronger communication is needed, we conduct discussions and creations with high purity.
            </p>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-sans text-lg font-bold tracking-[0.1em] uppercase mb-10">
              Capabilities
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {capabilities.map((cap) => (
                <AccordionItem value={`item-${cap.id}`} key={cap.id} className="border-b border-border last:border-b-0">
                  <AccordionTrigger className="group text-left font-sans hover:no-underline hover:bg-accent p-6 transition-colors duration-300 w-full">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center">
                        <span className="text-sm font-normal mr-6 w-8 text-left">{cap.id}</span>
                        <h4 className="font-bold text-lg">{cap.title}</h4>
                      </div>
                      <div className="relative w-4 h-4 flex-shrink-0 transition-transform duration-300 ease-out group-data-[state=open]:rotate-45">
                        <span className="absolute w-full h-px bg-black top-1/2 -translate-y-1/2" />
                        <span className="absolute h-full w-px bg-black left-1/2 -translate-x-1/2" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-8 pl-[5.5rem] pr-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {cap.columns.map((column, colIndex) => (
                        <ul key={colIndex} className="space-y-2">
                          {column.map((item) => (
                            <li key={item} className="font-sans text-sm">
                              {item}
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="mt-24 md:mt-32 text-center">
          <Link href="/about" className="inline-block group">
            <div className="flex items-center gap-4">
              <div className="relative text-left">
                <p className="font-sans text-black font-bold text-sm uppercase tracking-widest leading-tight">
                  VIEW MORE<br />
                  ABOUT LQVE
                </p>
                <div className="absolute bottom-[-5px] left-0 w-full h-[1.5px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </div>
              <ArrowRight className="h-4 w-4 text-black transform transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCapabilities;