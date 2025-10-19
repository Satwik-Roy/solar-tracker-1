'use client';

import Image from 'next/image';
import type { FC } from 'react';

interface Project {
  id: number;
  total: number;
  title: string;
  client: string;
  year: string;
  description: string;
  media: {
    type: 'image' | 'placeholder';
    src: string;
    aspectRatio: string;
  };
}

const projectsData: Project[] = [
  {
    id: 1,
    total: 12,
    title: 'FULL BLOOM',
    client: 'TOKYO CREATIVE SALON GINZA',
    year: '2024',
    description: 'Ginza was taken over with visuals themed around "sakura."',
    media: {
      type: 'image',
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/7379a22bb8571d840637e2d53676534a3f5f5061-1530x2010-3.jpg',
      aspectRatio: '1530 / 2010',
    },
  },
  {
    id: 2,
    total: 12,
    title: 'UNCOMFOR-\nTABLE\nBEERGLASS',
    client: 'YOHO BREWING',
    year: '2024',
    description: 'Hard-to-drink beer glass made by a beer company',
    media: {
      type: 'placeholder',
      src: '',
      aspectRatio: '1 / 1',
    },
  },
];

const ProjectCarousel: FC = () => {
  return (
    <section className="h-screen w-full overflow-hidden bg-background text-primary-text">
      <div className="flex h-full w-full snap-x snap-mandatory overflow-x-auto scroll-smooth">
        {projectsData.map((project, index) => (
          <article
            key={project.id}
            className="grid h-full w-full flex-shrink-0 snap-center grid-cols-1 items-center gap-8 px-10 md:grid-cols-2 lg:gap-16 lg:px-20"
          >
            <div className="order-2 flex flex-col justify-center text-left md:order-1">
              <h1 className="font-display">
                <div className="text-sm font-bold tracking-[0.05em]">
                  {String(project.id).padStart(2, '0')} / {project.total}
                </div>
                <div className="mt-4 whitespace-pre-line text-4xl font-black uppercase leading-[1.2] tracking-[-0.01em] md:text-5xl lg:text-[72px]">
                  {project.title}
                </div>
              </h1>
              <p className="mt-6 font-sans text-xs tracking-wider">
                <span className="text-muted-foreground">Client:</span>
                <span className="ml-2">{project.client}</span>
                <br />
                <span className="text-muted-foreground">Year:</span>
                <span className="ml-2">{project.year}</span>
              </p>
              <p className="font-sans mt-6 text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="order-1 flex items-center justify-center md:order-2">
              <div
                className="relative w-full max-w-xs sm:max-w-sm md:max-w-md"
                style={{ aspectRatio: project.media.aspectRatio }}
              >
                {project.media.type === 'image' ? (
                  <Image
                    src={project.media.src}
                    alt={project.title.replace(/\n/g, ' ')}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 80vw, 40vw"
                    priority={index === 0}
                  />
                ) : (
                  <div className="h-full w-full bg-secondary"></div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectCarousel;