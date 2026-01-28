import { metadata } from "./metadata";
import Navbar from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import CrawlingBanner from "@/components/sections/CrawlingBanner";
import { Feelings } from "@/components/sections/Feelings";
import { Insurances } from "@/components/sections/Insurances";
import { Approach } from "@/components/sections/Approach";
import { About } from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import Location from "@/components/sections/Location"
import Footer from "@/components/sections/Footer";

export { metadata };

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <CrawlingBanner />
      <Feelings />
      <Insurances />
      <Approach />
      <About />
      <FAQ />
      <Contact />
      <CTA />
      <Location />
      <Footer />
    </main>
  );
}