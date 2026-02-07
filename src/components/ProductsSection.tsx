import { motion } from "framer-motion";
import { useState } from "react";
import ProductCard from "./ProductCard";

// Produtos originais
import productNativaSpa from "@/assets/product-nativa-spa.jpeg";
import productSabonetes from "@/assets/product-sabonetes.jpeg";
import productBatom from "@/assets/product-batom.jpeg";
import productFloratta from "@/assets/product-floratta.jpeg";

// Novos produtos
import productMalbecLegend from "@/assets/product-malbec-legend.avif";
import productDreamBaunilha from "@/assets/product-dream-baunilha.avif";
import productDreamAmor from "@/assets/product-dream-amor.avif";
import productNativaSpaAmeixa from "@/assets/product-nativa-spa-ameixa.avif";
import productEgeo from "@/assets/product-egeo.avif";
import productMatchSeda from "@/assets/product-match-seda.avif";
import productCuideSeMel from "@/assets/product-cuide-se-mel.avif";
import productMalbecAerosol from "@/assets/product-malbec-aerosol.avif";
import productCuideSeBem from "@/assets/product-cuide-se-bem.avif";
import productLiz from "@/assets/product-liz.avif";
import productBotiSun from "@/assets/product-boti-sun.avif";
import productAuMigos from "@/assets/product-au-migos.avif";
import productMalbecCreme from "@/assets/product-malbec-creme.avif";

type Category = "todos" | "perfumes" | "corpo" | "cabelos" | "maquiagem" | "kids";

interface Product {
  name: string;
  price: string;
  image: string;
  category: Category[];
  featured?: boolean;
}

const products: Product[] = [
  // Perfumes
  {
    name: "Malbec Legend Black Desodorante Colônia – 100ml",
    price: "R$ 139,90",
    image: productMalbecLegend,
    category: ["perfumes"],
    featured: true,
  },
  {
    name: "Floratta Red Desodorante Colônia – 75ml",
    price: "R$ 139,90",
    image: productFloratta,
    category: ["perfumes"],
    featured: true,
  },
  {
    name: "Liz Sublime Eau de Parfum – 100ml",
    price: "R$ 139,90",
    image: productLiz,
    category: ["perfumes"],
    featured: true,
  },
  {
    name: "Egeo Dolce Woman Desodorante Colônia – 90ml",
    price: "R$ 139,90",
    image: productEgeo,
    category: ["perfumes"],
  },

  // Body Splash
  {
    name: "Dream Céu de Baunilha Body Splash – 200ml",
    price: "R$ 64,90",
    image: productDreamBaunilha,
    category: ["corpo"],
    featured: true,
  },
  {
    name: "Dream Amor no Ar Body Splash – 200ml",
    price: "R$ 64,90",
    image: productDreamAmor,
    category: ["corpo"],
  },

  // Corpo e Banho
  {
    name: "Loção Noturna Desodorante Corporal Nativa Spa Orquídea Noire – 400ml",
    price: "R$ 64,90",
    image: productNativaSpa,
    category: ["corpo"],
  },
  {
    name: "Nativa SPA Ameixa Negra Loção Hidratante – 400ml",
    price: "R$ 64,90",
    image: productNativaSpaAmeixa,
    category: ["corpo"],
  },
  {
    name: "Malbec Creme Hidratante Desodorante Corporal – 250ml",
    price: "R$ 64,90",
    image: productMalbecCreme,
    category: ["corpo"],
  },
  {
    name: "Cuide-se Bem Cheirinho de Bebê Creme Corporal – 250ml",
    price: "R$ 64,90",
    image: productCuideSeBem,
    category: ["corpo"],
  },
  {
    name: "Cuide-se Bem Mel Loção Hidratante – 400ml",
    price: "R$ 64,90",
    image: productCuideSeMel,
    category: ["corpo"],
  },
  {
    name: "Sabonetes Cuide-se Bem Rosa e Algodão – Kit 4x80g",
    price: "R$ 29,90",
    image: productSabonetes,
    category: ["corpo"],
  },
  {
    name: "Malbec Black Legend Desodorante Aerosol – 75g",
    price: "R$ 29,90",
    image: productMalbecAerosol,
    category: ["corpo"],
  },

  // Cabelos
  {
    name: "Match Efeito Seda Shampoo + Condicionador – 300ml cada",
    price: "R$ 64,90",
    image: productMatchSeda,
    category: ["cabelos"],
  },

  // Maquiagem
  {
    name: "Batom Semi Mate Pop – Marron Glacê – 3,6g",
    price: "R$ 22,90",
    image: productBatom,
    category: ["maquiagem"],
  },

  // Proteção Solar
  {
    name: "Boti Sun Protetor Solar Facial FPS 50 Cor 02 – 50g",
    price: "R$ 64,90",
    image: productBotiSun,
    category: ["corpo"],
  },

  // Kids / Pets
  {
    name: "Au.Migos Colônia para Pets – 100ml",
    price: "R$ 64,90",
    image: productAuMigos,
    category: ["kids"],
  },
];

const categories: { id: Category; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "perfumes", label: "Perfumes" },
  { id: "corpo", label: "Corpo & Banho" },
  { id: "cabelos", label: "Cabelos" },
  { id: "maquiagem", label: "Maquiagem" },
  { id: "kids", label: "Kids & Pets" },
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("todos");

  const filteredProducts = activeCategory === "todos" 
    ? products 
    : products.filter(p => p.category.includes(activeCategory));

  // Ordenar: featured primeiro
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <section id="produtos" className="py-16 md:py-20 bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 rounded-full bg-boticario-purple/5 blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-boticario-rose/10 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-8 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-boticario-purple/10 text-primary text-sm font-medium mb-4">
            🛍️ {products.length} Produtos Disponíveis
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Descubra nossa <span className="text-gradient">seleção especial</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Produtos originais O Boticário selecionados com carinho para você
          </p>
        </motion.div>

        {/* Category Filter - Mobile Optimized */}
        <motion.div
          className="mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:justify-center md:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-foreground hover:bg-primary/10 border border-border"
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid - Mobile 2 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
          {sortedProducts.map((product, index) => (
            <ProductCard
              key={`${product.name}-${index}`}
              name={product.name}
              price={product.price}
              image={product.image}
              index={index}
              featured={product.featured}
            />
          ))}
        </div>

        {/* Results count */}
        <motion.p
          className="text-center text-muted-foreground text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Exibindo {sortedProducts.length} de {products.length} produtos
        </motion.p>
      </div>
    </section>
  );
};

export default ProductsSection;
