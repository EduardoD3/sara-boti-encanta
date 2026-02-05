import { motion } from "framer-motion";
import { MessageCircle, MapPin, Sparkles } from "lucide-react";
import saraFull from "@/assets/sara-avatar-full.png";
import saraPerfume from "@/assets/sara-avatar-perfume.png";

const WHATSAPP_URL = "https://wa.me/5569992415809";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-gradient floral-bg overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-5 md:left-10 w-48 md:w-64 h-48 md:h-64 rounded-full bg-boticario-purple/10 blur-3xl" />
      <div className="absolute bottom-32 right-5 md:right-10 w-56 md:w-80 h-56 md:h-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-32 md:w-40 h-32 md:h-40 rounded-full bg-boticario-lilac/30 blur-2xl" />
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-boticario-rose/40 blur-2xl" />
      
      {/* Floating sparkles */}
      <motion.div
        className="absolute top-20 right-10 md:right-32"
        animate={{ y: [0, -15, 0], scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="w-6 h-6 text-boticario-purple/60" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-8 md:left-20"
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Sparkles className="w-5 h-5 text-accent/50" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-5"
        animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="w-3 h-3 rounded-full bg-boticario-rose/60" />
      </motion.div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          
          {/* Mobile: Image first, Desktop: Content first */}
          <div className="order-1 lg:order-2 relative w-full lg:w-1/2 flex justify-center">
            {/* Main avatar with perfume - positioned prominently */}
            <motion.div
              className="relative z-20"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <motion.img
                src={saraPerfume}
                alt="Sara Neris - Revendedora O Boticário"
                className="w-64 md:w-80 lg:w-96 h-auto drop-shadow-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Glow effect behind image */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-boticario-purple/20 to-accent/20 blur-3xl rounded-full scale-75" />
            </motion.div>

            {/* Secondary avatar - smaller, positioned to the side on desktop */}
            <motion.div
              className="hidden lg:block absolute -left-8 bottom-0 z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.img
                src={saraFull}
                alt="Sara Neris com sacola O Boticário"
                className="w-48 h-auto drop-shadow-xl opacity-90"
                animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </motion.div>

            {/* Decorative ring around main image */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-72 md:h-96 rounded-full border-2 border-boticario-purple/20 -z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 md:w-[26rem] h-80 md:h-[26rem] rounded-full border border-accent/10 -z-10"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1 w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-boticario-purple/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Produtos Originais O Boticário
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Realce sua{" "}
              <span className="text-gradient">beleza</span>
              <br />
              com O Boticário
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Autocuidado, fragrâncias marcantes e produtos originais para o seu dia a dia.
            </motion.p>

            {/* Location badge */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-2 mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground font-medium">
                Porto Velho, Rondônia e proximidades
              </span>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base md:text-lg px-8 py-4 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                Comprar pelo WhatsApp
              </a>
            </motion.div>

            <motion.p
              className="mt-6 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Atendimento personalizado • Entrega com carinho 💜
            </motion.p>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(0 0% 100%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
