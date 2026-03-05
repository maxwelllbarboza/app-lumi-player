const WHATSAPP_URL = "https://wa.me/5521972002180";

const CTAFinal = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="section-title mb-4">
          Comece <span className="gradient-text">agora mesmo</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10">Teste grátis disponível.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-glow-outline text-lg">
            🎬 TESTE GRÁTIS
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-glow text-lg">
            🚀 ASSINAR AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
