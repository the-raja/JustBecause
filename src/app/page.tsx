import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TemplateGallery from "@/components/TemplateGallery";
import CustomWebsite from "@/components/CustomWebsite";
import HostingPlans from "@/components/HostingPlans";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TemplateGallery />
        <CustomWebsite />
        <HostingPlans />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
