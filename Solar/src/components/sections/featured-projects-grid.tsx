"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  link: string;
  media: {
    type: "image" | "video";
    src: string;
  };
}

const projects: Project[] = [
  {
    title: "FULL BLOOM",
    link: "/projects/tokyo-creative-salon-2024/",
    media: {
      type: "image",
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/7379a22bb8571d840637e2d53676534a3f5f5061-1530x2010-5.jpg",
    },
  },
  {
    title: "UNCOMFORTABLE BEERGLASS",
    link: "/projects/uncomfortable-beerglass/",
    media: {
      type: "video",
      src: "https://cdn.sanity.io/files/tpf097rx/production/3cf6ae151a58304d8a89b3ae9fbe0187902307b0.mp4",
    },
  },
  {
    title: "PALLAS’S CAT SONG",
    link: "/projects/pallas-s-cat-song/",
    media: {
      type: "video",
      src: "https://cdn.sanity.io/files/tpf097rx/production/d416e8ad2226d6ff1b1d84ee95364d4d785b7859.mp4",
    },
  },
  {
    title: "DRAMATIC PHRASES",
    link: "/projects/dramatic-phrases/",
    media: {
      type: "image",
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9249db0-cb3b-4b10-9dfa-57e6d757f237-lqve-jp/assets/images/ce2f9e214c90a92b719e36d0c3c001c7a0845530-1500x1002-6.jpg",
    },
  },
  {
    title: "SHAKE HANDS WITH NATURE",
    link: "/projects/shake-hands-with-nature/",
    media: {
      type: "video",
      src: "https://cdn.sanity.io/files/tpf097rx/production/8d39033eb1565780e29ec7c6a499899885ca241c.mp4",
    },
  },
  {
    title: "KATARU HOTARU",
    link: "/projects/kataru-hotaru/",
    media: {
      type: "video",
      src: "https://cdn.sanity.io/files/tpf097rx/production/a7b4ef5cdac107e36e2c83581f23e40e2989b1a1.mp4",
    },
  },
  {
    title: "SITUATION",
    link: "/projects/situation/",
    media: {
      type: "video",
      src: "https://cdn.sanity.io/files/tpf097rx/production/912f9ea96a30d4b63950d0b68946e72c381554f7.mp4",
    },
  },
  {
    title: "CHASE YOUR LIGHT",
    link: "/projects/chase-your-light/",
    media: {
      type: "video",
      src: "https://cdn.sanity.io/files/tpf097rx/production/06603f3ea9705794f4c989d3fe58482978ed6c7d.mp4",
    },
  },
];

const ProjectTile = ({ project }: { project: Project }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <Link
      href={project.link}
      className="group relative block aspect-square overflow-hidden bg-secondary"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {project.media.type === "video" ? (
        <video
          ref={videoRef}
          src={project.media.src}
          className="absolute inset-0 h-full w-full object-cover"
          loop
          muted
          playsInline
          preload="metadata"
        />
      ) : (
        <Image
          src={project.media.src}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white bg-gradient-to-t from-black/60 to-transparent">
        <h3 className="font-sans text-2xl font-black uppercase leading-tight tracking-[-0.01em]">
          {project.title}
        </h3>
      </div>
    </Link>
  );
};

const FeaturedProjectsGrid = () => {
  return (
    <section className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <ProjectTile key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjectsGrid;