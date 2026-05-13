import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import WorkflowPreview from "@/components/WorkflowPreview";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <ProblemSection />
      <FeaturesGrid />
      <WorkflowPreview />
      <UseCases />
      <HowItWorks />
      <FinalCTA />
    </>
  );
}
