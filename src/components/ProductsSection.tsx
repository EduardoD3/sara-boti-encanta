import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import productNativaSpa from "@/assets/product-nativa-spa.jpeg";
import productSabonetes from "@/assets/product-sabonetes.jpeg";
import productBatom from "@/assets/product-batom.jpeg";
import productFloratta from "@/assets/product-floratta.jpeg";

const products = [
  {
    name: "Loção Noturna Desodorante Corporal Nativa Spa Orquídea Noire – 400ml",
    price: "R$ 64,90",
    image: productNativaSpa,
  },
  {
    name: "Sabonetes Cuide-se Bem Rosa e Algodão – Kit 4x80g",
    price: "R$ 29,90",
    image: productSabonetes,
  },
  {
    name: "Batom Semi Mate Pop – Marron Glacê – 3,6g",
    price: "R$ 22,90",
    image: productBatom,
  },
  {
    name: "Floratta Red Desodorante Colônia – 75ml",
    price: "R$ 139,90",
    image: productFloratta,
  },
];

const ProductsSection = () => {
  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 rounded-full bg-boticario-purple/5 blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-boticario-rose/10 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-boticario-purple/10 text-primary text-sm font-medium mb-4">
            🛍️ Produtos Disponíveis
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Descubra nossa <span className="text-gradient">seleção especial</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Produtos originais O Boticário selecionados com carinho para você
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
