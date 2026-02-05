import { motion } from "framer-motion";
import { Award, HeartHandshake, MessageSquare, Gift } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Produtos Originais",
    description: "100% autênticos e com garantia O Boticário",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Personalizado",
    description: "Consultoria exclusiva para suas necessidades",
  },
  {
    icon: MessageSquare,
    title: "Compra Fácil",
    description: "Peça direto pelo WhatsApp de forma rápida",
  },
  {
    icon: Gift,
    title: "Ideal para Presentes",
    description: "Surpreenda quem você ama com qualidade",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            💖 Vantagens
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que comprar <span className="text-gradient">comigo?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-br from-secondary/50 to-boticario-purple-light/30 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
