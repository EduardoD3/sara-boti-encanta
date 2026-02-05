import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-card">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm flex items-center justify-center gap-2 text-card/80">
          Feito com <Heart className="w-4 h-4 fill-accent text-accent" /> por Sara Neris Dias
        </p>
        <p className="text-xs text-card/60 mt-2">
          Revendedora O Boticário • Produtos 100% Originais
        </p>
      </div>
    </footer>
  );
};

export default Footer;
