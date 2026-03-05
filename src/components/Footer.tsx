import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5521972002180";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold gradient-text mb-2">Lumi Player</h3>
        <p className="text-muted-foreground mb-6">Entretenimento digital em um só lugar.</p>
        <div className="flex justify-center gap-4 mb-8">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors text-sm font-medium"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors text-sm font-medium"
          >
            Instagram
          </a>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Lumi Player. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
