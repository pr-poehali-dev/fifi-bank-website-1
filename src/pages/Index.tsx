import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import MemeGallery from "@/components/MemeGallery";
import AdvantagesSection from "@/components/AdvantagesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Index() {
  const playSound = () => {
    // Имитация звукового эффекта (в реальном проекте здесь был бы Audio API)
    console.log("🔊 Звук клика: дзынь!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-fun-blue/10 via-white to-fun-yellow/10">
      <Header playSound={playSound} />
      <HeroSection playSound={playSound} />
      <ProductsSection playSound={playSound} />
      <MemeGallery playSound={playSound} />
      <AdvantagesSection playSound={playSound} />
      <CTASection playSound={playSound} />
      <Footer />
    </div>
  );
}