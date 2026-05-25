import { ApplicationsSection } from "@/components/landing/applications-section";
import { CvBuilderBanner } from "@/components/landing/cv-builder-banner";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { JobFeed } from "@/components/landing/job-feed";
import { Navbar } from "@/components/landing/navbar";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-cream">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ApplicationsSection />
        <CvBuilderBanner />
        <JobFeed />
      </main>
      <Footer />
    </div>
  );
}
