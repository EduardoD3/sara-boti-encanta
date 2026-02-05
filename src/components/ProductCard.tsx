import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  index: number;
}

const WHATSAPP_URL = "https://wa.me/5569992415809";

const ProductCard = ({ name, price, image, index }: ProductCardProps) => {
  const whatsappMessage = encodeURIComponent(`Olá Sara! Tenho interesse no produto: ${name}`);
  
  return (
    <motion.div
      className="card-product group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden aspect-square bg-boticario-nude/30">
        <img
          src={image}
          alt={name}
          className="product-image w-full h-full object-cover transition-transform duration-500"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2 min-h-[3.5rem]">
          {name}
        </h3>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-primary">
            {price}
          </span>
        </div>
        
        <a
          href={`${WHATSAPP_URL}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp-small w-full justify-center"
        >
          <MessageCircle className="w-4 h-4" />
          Quero esse no WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
