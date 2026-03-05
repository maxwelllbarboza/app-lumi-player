import moviesBanner from "@/assets/movies-banner.png";

const Catalogo = () => {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="section-title">
          Catálogo de <span className="gradient-text">Conteúdos Digitais</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg">
          Atualizações frequentes e experiência moderna.
        </p>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Track */}
        <div
          className="flex w-max gap-0 will-change-transform hover:[animation-play-state:paused]"
          style={{
            animation: "scroll-left 22s linear infinite",
          }}
        >
          <img
            src={moviesBanner}
            alt="Catálogo de conteúdos digitais no Lumi Player"
            className="h-48 md:h-64 w-auto object-cover flex-shrink-0 select-none pointer-events-none"
            draggable={false}
          />
          <img
            src={moviesBanner}
            alt=""
            aria-hidden="true"
            className="h-48 md:h-64 w-auto object-cover flex-shrink-0 select-none pointer-events-none"
            draggable={false}
          />
        </div>
      </div>

      {/* Keyframes locais (não depende de tailwind.config) */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Catalogo;