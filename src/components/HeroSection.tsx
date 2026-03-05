import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/5521972002180";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Streaming entertainment" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-sm text-primary font-medium">
          ✨ Lumi Player — Entretenimento Digital
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          VENHA PARA O <br />
          <span className="gradient-text">MELHOR CONTEÚDO ONLINE</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
          Quer assistir tudo o que quiser?
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Temos a solução perfeita para você.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-glow text-lg">
            🚀 QUERO ASSINAR AGORA
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-glow-outline text-lg">
            🎬 TESTE GRATUITO
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
