import { useState } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5521972002180";

const links = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Planos", href: "#planos" },
  { label: "Revenda", href: "#revenda" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold gradient-text">
          Lumi Player
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-glow text-sm !py-2 !px-5">
            ASSINAR
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border pb-4 px-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-glow block text-center text-sm !py-2">
            ASSINAR
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
