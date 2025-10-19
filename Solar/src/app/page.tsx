import HeaderNavigation from "@/components/sections/header-navigation";
import HeroSplash from "@/components/sections/hero-splash";
import ProjectCarousel from "@/components/sections/project-carousel";
import CompanyVision from "@/components/sections/company-vision";
import FeaturedProjectsGrid from "@/components/sections/featured-projects-grid";
import ApproachMethodology from "@/components/sections/approach-methodology";
import AwardsShowcase from "@/components/sections/awards-showcase";
import CollaborationsLogos from "@/components/sections/collaborations-logos";
import ServicesCapabilities from "@/components/sections/services-capabilities";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      
      <main className="pt-[56px]">
        <HeroSplash />
        <ProjectCarousel />
        <CompanyVision />
        <FeaturedProjectsGrid />
        <ApproachMethodology />
        <AwardsShowcase />
        <CollaborationsLogos />
        <ServicesCapabilities />
      </main>

      <Footer />
    </div>
  );
}