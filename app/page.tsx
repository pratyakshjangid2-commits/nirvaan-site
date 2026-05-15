import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { CoursesPreview } from "@/components/home/CoursesPreview";
import { WhyNirvaan } from "@/components/home/WhyNirvaan";
import { ResultsGrid } from "@/components/home/ResultsGrid";
import { FacultySpotlight } from "@/components/home/FacultySpotlight";
import { CampusGallery } from "@/components/home/CampusGallery";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FeedbackSection } from "@/components/home/FeedbackSection";
import { FAQSection } from "@/components/home/FAQSection";
import { ContactSection } from "@/components/home/ContactSection";
import { AdmissionCTA } from "@/components/home/AdmissionCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <CoursesPreview />
      <WhyNirvaan />
      <ResultsGrid />
      <FacultySpotlight />
      <CampusGallery />
      <TestimonialsSection />
      <FeedbackSection />
      <FAQSection />
      <ContactSection />
      <AdmissionCTA />
    </>
  );
}


