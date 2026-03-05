import moviesBanner from "@/assets/movies-banner.png";

const Catalogo = () => {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="section-title">
          Catálogo de <span className="gradient-text">Filmes e Séries</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg">
          Milhares de títulos atualizados toda semana.
        </p>
      </div>

      {/* Infinite scroll animation */}
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-scroll-left">
          <img
            src={moviesBanner}
            alt="Catálogo de filmes e séries disponíveis no Lumi Player"
            className="h-48 md:h-64 w-auto object-cover flex-shrink-0"
          />
          <img
            src={moviesBanner}
            alt=""
            className="h-48 md:h-64 w-auto object-cover flex-shrink-0"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default Catalogo;