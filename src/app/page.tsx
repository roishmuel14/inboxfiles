import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointSection from "@/components/PainPointSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import { FinalCTA, Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100">
            <Navbar />
            <HeroSection />
            <HowItWorksSection />
            <PainPointSection />
            <FeaturesSection />
            <FinalCTA />
            <Footer />
        </main>
    );
}
