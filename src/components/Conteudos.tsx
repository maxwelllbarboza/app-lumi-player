import { Tv, Film, Clapperboard, Trophy, Baby, Heart, Sparkles, BookOpen } from "lucide-react";

const items = [
  { icon: Tv, label: "Canais ao vivo" },
  { icon: Film, label: "Filmes" },
  { icon: Clapperboard, label: "Séries" },
  { icon: Trophy, label: "Esportes" },
  { icon: Baby, label: "Conteúdo infantil" },
  { icon: Heart, label: "Novelas" },
  { icon: Sparkles, label: "Animes" },
  { icon: BookOpen, label: "Documentários" },
];

const Conteudos = () => {
  return (
    <section id="conteudos" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Conteúdos <span className="gradient-text">Disponíveis</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Milhares de conteúdos disponíveis em um único aplicativo.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {items.map((item) => (
            <div key={item.label} className="card-dark text-center group cursor-default">
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="font-semibold text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conteudos;
