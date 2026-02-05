import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5569992415809";

const WhatsAppButton = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay: 1 }}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center"
      >
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-4 py-2 rounded-lg bg-foreground text-card text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
          Fale com a vendedora
        </span>
        
        {/* Button */}
        <div className="relative">
          {/* Pulse animation ring */}
          <span className="absolute inset-0 rounded-full bg-boticario-green animate-ping opacity-30" />
          <span className="absolute inset-0 rounded-full pulse-animation" />
          
          <div className="relative w-16 h-16 rounded-full bg-boticario-green flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
            <MessageCircle className="w-7 h-7 text-card fill-card" />
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
