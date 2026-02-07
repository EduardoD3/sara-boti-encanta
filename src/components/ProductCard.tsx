import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  index: number;
  featured?: boolean;
}

const WHATSAPP_URL = "https://wa.me/5569992415809";

const ProductCard = ({ name, price, image, index, featured }: ProductCardProps) => {
  const whatsappMessage = encodeURIComponent(`Olá Sara! Tenho interesse no produto: ${name}`);
  
  return (
    <motion.div
      className={`card-product group relative ${featured ? 'ring-2 ring-primary/30' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-2 left-2 z-10 flex items-center gap-1 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
          <Star className="w-3 h-3 fill-current" />
          <span className="hidden sm:inline">Destaque</span>
        </div>
      )}

      <div className="relative overflow-hidden aspect-square bg-boticario-nude/30">
        <img
          src={image}
          alt={name}
          className="product-image w-full h-full object-cover transition-transform duration-500"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-3 md:p-5">
        <h3 className="font-display text-sm md:text-lg font-semibold text-foreground mb-2 line-clamp-2 min-h-[2.5rem] md:min-h-[3.5rem]">
          {name}
        </h3>
        
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <span className="text-lg md:text-2xl font-bold text-primary">
            {price}
          </span>
        </div>
        
        <a
          href={`${WHATSAPP_URL}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp-small w-full justify-center text-xs md:text-sm"
        >
          <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
          <span className="hidden sm:inline">Quero esse no WhatsApp</span>
          <span className="sm:hidden">Comprar</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
