import { motion } from "framer-motion";
import { Heart, MapPin, Sparkles, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-boticario-lilac/10 blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Avatar/Icon */}
          <motion.div
            className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-boticario-purple-light to-boticario-rose flex items-center justify-center shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <User className="w-14 h-14 text-primary" />
          </motion.div>

          <motion.h2
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Olá, eu sou a <span className="text-gradient">Sara Neris Dias</span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Revendedora O Boticário apaixonada por beleza e autocuidado. Levo até você produtos originais, 
            com carinho, confiança e atendimento personalizado. Meu compromisso é proporcionar uma 
            experiência única de compra!
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-2 mb-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Porto Velho, Rondônia e proximidades</span>
          </motion.div>

          {/* Decorative icons */}
          <motion.div
            className="flex items-center justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 text-primary">
              <Heart className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium">Com carinho</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Produtos originais</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
