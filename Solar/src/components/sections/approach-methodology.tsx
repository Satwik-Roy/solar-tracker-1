"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

type MethodologyItem = {
  type: 'title' | 'step';
  image: string;
  title: string[];
  number?: string;
  description?: string[];
};

const methodologyItems: MethodologyItem[] = [
  {
    type: 'title',
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/img1-7.webp",
    title: ['Our', 'Way'],
  },
  {
    type: 'step',
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/img2-8.webp",
    number: '01',
    title: ['Find', 'Core', 'Question'],
    description: [
      'Everything starts with a question.',
      'We identify the essence, visualize the vision,',
      'and find the path to the future.',
    ],
  },
  {
    type: 'step',
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/img3-9.webp",
    number: '02',
    title: ['Make', 'Innovative', 'Idea'],
    description: [
      'With courage and honesty,',
      'we build innovative ideas',
      'to advance your brand.',
    ],
  },
  {
    type: 'step',
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/img4-10.webp",
    number: '03',
    title: ['Lead', 'Bold', 'Creation'],
    description: [
      'Through strategic processes',
      'and surprising creations,',
      'we lead to tangible results.',
    ],
  },
];

const AnimatedTextLine = ({ text, delay, className }: { text: string; delay: number; className?: string }) => (
  <div className="overflow-hidden">
    <motion.div
      className={className}
      initial={{ y: '110%' }}
      whileInView={{ y: '0%' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {text}
    </motion.div>
  </div>
);

const ApproachItem = ({ item, index }: { item: MethodologyItem; index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  const borderClass = "border-b border-accent-gray md:border-r lg:border-r";
  
  if (item.type === 'title') {
    return (
      <div ref={containerRef} className={`relative overflow-hidden md:min-h-[60vh] min-h-[50vh] ${borderClass} md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n-1)]:border-r`}>
        <motion.div style={{ y: imageY }} className="absolute inset-0">
          <Image src={item.image} alt="Our Way background" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" />
        </motion.div>
        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 lg:p-8">
          <h2 className="font-sans text-black text-[18vw] md:text-[8vw] lg:text-[7vw] font-bold leading-[0.85] tracking-tighter">
            {item.title.map((line, i) => (
              <AnimatedTextLine key={i} text={line} delay={0.2 + i * 0.1} className="font-sans" />
            ))}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative overflow-hidden md:min-h-[60vh] min-h-[80vh] ${borderClass} md:[&:nth-child(2n)]:border-r-0 lg:border-r lg:[&:nth-child(4n)]:border-r-0`}>
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <Image src={item.image} alt={`Step ${item?.number || index}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"/>
      </motion.div>
      <div className="absolute inset-0 p-4 md:p-6 lg:p-8 text-black flex flex-col justify-between">
        <div>
          <AnimatedTextLine
            text={item.number!}
            delay={0.2}
            className="font-sans font-medium text-[20vw] md:text-[10vw] lg:text-[8.5rem] leading-none"
          />
          <h3 className="font-sans font-bold text-3xl md:text-3xl lg:text-4xl leading-none mt-4 md:mt-2">
            {item.title.map((line, i) => (
              <AnimatedTextLine key={i} text={line} delay={0.4 + i * 0.1} className="font-sans" />
            ))}
          </h3>
        </div>
        <p className="font-sans text-[13px] leading-[1.8] tracking-[0.02em] md:text-sm">
          {item.description!.map((line, i) => (
            <AnimatedTextLine key={i} text={line} delay={0.6 + i * 0.08} />
          ))}
        </p>
      </div>
    </div>
  );
};

const ApproachMethodology = () => {
    return (
        <section className="bg-primary-background overflow-x-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {methodologyItems.map((item, index) => (
                    <ApproachItem key={index} item={item} index={index} />
                ))}
            </div>
        </section>
    );
};

export default ApproachMethodology;