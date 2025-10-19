import Image from 'next/image';

const logos = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/665add2fd4cbdfc08179553fcaa1c913fec90df5-220x240-19.png", alt: "Collaboration Logo 1", width: 220, height: 240 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/ef0dc61378cbd98d497bb38de25a265e18ae5a3b-220x240-20.png", alt: "Collaboration Logo 2", width: 220, height: 240 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/12bf35b85bc7caca2209154512fb16a505c915d1-220x240-21.png", alt: "Collaboration Logo 3", width: 220, height: 240 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/dc13da33875e08c10390b452607d3629f0e28555-380x240-22.png", alt: "Collaboration Logo 4", width: 380, height: 240 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/4eefab5096a1e6011d49386a90e8eaaf2265f1f3-380x240-23.png", alt: "Collaboration Logo 5", width: 380, height: 240 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/30a98cbff2586d9ff16e5f84f026260b58ff9ce9-380x240-24.jpg", alt: "Collaboration Logo 6", width: 380, height: 240 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/a9247a3c60b364fa4d6bb77612dba1a08e50831c-380x240-25.jpg", alt: "Collaboration Logo 7", width: 380, height: 240 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/8701507ac8e4214b6a7ac9ad602317a2c5321a68-760x480-26.png", alt: "Collaboration Logo 8", width: 760, height: 480 },
];

const CollaborationsLogos = () => {
  return (
    <section className="bg-background text-foreground py-20 lg:py-[120px] border-b border-border">
      <div className="max-w-[1600px] mx-auto px-10">
        <h2 className="font-sans text-sm font-bold uppercase tracking-[0.1em] mb-12 lg:mb-20">
          (Collaborations)
        </h2>
        <div className="collaborations_content">
          <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 items-center">
            {logos.map((logo, index) => (
              <li key={index} className="flex justify-center items-center h-[120px]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="w-auto h-auto max-h-[80px] object-contain transition-all duration-300 ease-in-out filter grayscale hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CollaborationsLogos;