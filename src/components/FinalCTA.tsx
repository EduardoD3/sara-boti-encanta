import { motion } from "framer-motion";
import { MessageCircle, Heart } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5569992415809";

const FinalCTA = () => {
  return (
    <section className="py-24 section-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-boticario-purple/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
      
      <motion.div
        className="absolute top-20 right-1/4 w-6 h-6 rounded-full bg-boticario-rose/50"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-4 h-4 rounded-full bg-boticario-lilac/60"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Heart className="w-4 h-4 fill-current" />
            Pronta para se cuidar?
          </motion.div>

          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pronta para se cuidar ou{" "}
            <span className="text-gradient">presentear alguém especial?</span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Fale comigo pelo WhatsApp e encontre o produto perfeito para você ou para quem você ama.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg px-10 py-5 inline-flex"
            >
              <MessageCircle className="w-6 h-6" />
              Chamar no WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
