import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { CoursesPreview } from "@/components/home/CoursesPreview";
import { WhyNirvaan } from "@/components/home/WhyNirvaan";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { FacultySpotlight } from "@/components/home/FacultySpotlight";
import { ResultsGrid } from "@/components/home/ResultsGrid";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { AdmissionCTA } from "@/components/home/AdmissionCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <CoursesPreview />
      <ComparisonSection />
      <ResultsGrid />
      <WhyNirvaan />
      <FacultySpotlight />
      <TestimonialsSection />
      <AdmissionCTA />
    </>
  );
}

