const WHATSAPP_URL = "https://wa.me/5521972002180";

const tiers = [
  { range: "10 a 49 créditos", price: "R$7,00", per: "por crédito" },
  { range: "50 a 99 créditos", price: "R$5,00", per: "por crédito" },
  { range: "100 a 499 créditos", price: "R$4,50", per: "por crédito" },
  { range: "500+ créditos", price: "R$3,50", per: "por crédito" },
];

const Revenda = () => {
  return (
    <section id="revenda" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Tenha seu <span className="gradient-text">próprio negócio</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-xl mx-auto">
          Trabalhe revendendo acessos e tenha uma renda extra.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {tiers.map((t) => (
            <div key={t.range} className="card-dark text-center">
              <p className="text-sm text-muted-foreground mb-2">{t.range}</p>
              <p className="text-3xl font-black gradient-text mb-1">{t.price}</p>
              <p className="text-xs text-muted-foreground">{t.per}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-glow inline-block text-lg">
            QUERO REVENDER
          </a>
        </div>
      </div>
    </section>
  );
};

export default Revenda;
