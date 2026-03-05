import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ComoFunciona from "@/components/ComoFunciona";
import Conteudos from "@/components/Conteudos";
import Catalogo from "@/components/Catalogo";
import Depoimentos from "@/components/Depoimentos";
import Planos from "@/components/Planos";
import Revenda from "@/components/Revenda";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ComoFunciona />
      <Conteudos />
      <Catalogo />
      <Depoimentos />
      <Planos />
      {/* <Revenda /> */}
      <FAQ />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
