"use client";

import * as React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AwardProject {
  prize: string;
  project: string;
  year: string;
}

interface AwardSubCategory {
  category?: string;
  awards: AwardProject[];
}

interface AwardData {
  name: string;
  logo: string;
  logoAlt: string;
  items: AwardSubCategory[];
}

const awardsData: AwardData[] = [
  {
    name: "ACC",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/acc-11.webp",
    logoAlt: "ACC",
    items: [
      {
        category: "Branded Communication",
        awards: [
          { prize: "Bronze", project: "ECC Dramatic Phrases", year: "2023" },
        ],
      },
      {
        category: "Film Craft",
        awards: [
          { prize: "Cinematography Award", project: "Nasu Animal Kingdom SHAKE HANDS WITH NATURE", year: "2023" },
          { prize: "Silver", project: "Nasu Animal Kingdom SHAKE HANDS WITH NATURE", year: "2023" },
        ],
      },
      {
        category: "Film",
        awards: [
          { prize: "Silver", project: "Nasu Animal Kingdom Pallas's Cat Song", year: "2021" },
        ],
      },
      {
        category: "Design",
        awards: [
          { prize: "Bronze", project: "Motosaka Brewery Kataru Hotaru", year: "2024" },
        ],
      },
    ],
  },
  {
    name: "ADFEST",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/adfest-12.webp",
    logoAlt: "ADFEST",
    items: [
      {
        category: "Film Craft",
        awards: [
          { prize: "Bronze", project: "Hyundai Stay True to Your Aspirations", year: "2024" },
        ],
      },
    ],
  },
  {
    name: "BOVA",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/bova-13.webp",
    logoAlt: "BOVA",
    items: [
      {
        awards: [
          { prize: "Runner-up Grand Prize", project: "Nasu Animal Kingdom Pallas's Cat Song", year: "2021" },
        ],
      },
    ],
  },
  {
    name: "CS Design award",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/cs-design-14.webp",
    logoAlt: "CS Design Award",
    items: [
      {
        awards: [
          { prize: "Nakagawa Chemical Award", project: "Tokyo Creative Salon Ginza Poetography", year: "2024" },
        ],
      },
    ],
  },
  {
    name: "PRTIMES Press Release Award",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/pr-times-15.webp",
    logoAlt: "PRTIMES Press Release Award",
    items: [
      {
        awards: [
          { prize: "Influence Award", project: "Yoho Brewing Slow Beer Glass", year: "2024" },
        ],
      },
    ],
  },
  {
    name: "TCC",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/tcc-16.webp",
    logoAlt: "TCC",
    items: [
      {
        awards: [
          { prize: "TCC Award", project: "ECC Dramatic Phrases", year: "2023" },
        ],
      },
    ],
  },
  {
    name: "TOKYO MIDTOWN AWARD",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/tokyo-midtown-17.webp",
    logoAlt: "TOKYO MIDTOWN AWARD",
    items: [
      {
        category: "Design",
        awards: [
          { prize: "Fumie Shibata Award", project: "Geta Sandal", year: "2017" },
        ],
      },
    ],
  },
  {
    name: "Young Lions Competitions",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/cannes-lions-18.webp",
    logoAlt: "Young Lions Competitions",
    items: [
      {
        category: "Film",
        awards: [
          { prize: "Gold", project: "UN WOMAN Situations", year: "2020" },
        ],
      },
    ],
  },
];

const logos = awardsData.map(award => ({ src: award.logo, alt: award.logoAlt }));

export default function AwardsShowcase() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = 'grabbing';
    scrollRef.current.style.userSelect = 'none';
  };

  const onMouseLeaveOrUp = () => {
    if (!scrollRef.current) return;
    setIsDragging(false);
    scrollRef.current.style.cursor = 'grab';
    scrollRef.current.style.removeProperty('user-select');
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-background text-foreground py-20 lg:py-32 px-5 md:px-10 border-b border-border">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="font-sans text-[13px] font-bold uppercase tracking-[0.1em] mb-12">
          (Awards)
        </h2>

        <div className="lg:grid lg:grid-cols-[1fr_40%] lg:gap-x-20">
          <div className="mb-20 lg:mb-0">
            <Accordion type="multiple" className="w-full" defaultValue={['item-0']}>
              {awardsData.map((award, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="border-b border-border last:border-b-0">
                  <AccordionTrigger className="text-left font-sans font-bold text-base md:text-lg hover:no-underline py-6">
                    {award.name}
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-8 pl-4 lg:pl-8 font-body">
                    {award.items.map((subCategory, subIndex) => (
                      <div key={subIndex} className="mb-6 last:mb-0">
                        {subCategory.category && (
                          <h4 className="font-medium text-sm text-muted-foreground mb-4 tracking-wider">
                            {subCategory.category}
                          </h4>
                        )}
                        <div className="space-y-4">
                          {subCategory.awards.map((project, projIndex) => (
                            <div
                              key={projIndex}
                              className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)_minmax(0,0.8fr)] gap-x-4 gap-y-1 text-sm tracking-[0.02em] leading-relaxed"
                            >
                              <span className="text-muted-foreground">{project.prize}</span>
                              <span className="text-primary-text">{project.project}</span>
                              <span className="text-muted-foreground justify-self-start md:justify-self-end tabular-nums">{project.year}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div
            ref={scrollRef}
            className="flex flex-row flex-wrap lg:flex-col lg:flex-nowrap gap-x-12 gap-y-8 lg:gap-y-0 lg:space-y-10 items-start overflow-x-auto lg:overflow-x-hidden cursor-grab"
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeaveOrUp}
            onMouseUp={onMouseLeaveOrUp}
            onMouseMove={onMouseMove}
          >
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={64}
                  className="object-contain h-auto w-24 md:w-32"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}