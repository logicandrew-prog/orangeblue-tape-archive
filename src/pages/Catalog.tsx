import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Disc } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { manufacturers } from "@/data/manufacturers";
const LogoImage = ({
  src,
  alt,
  fallbackText
}: {
  src?: string;
  alt: string;
  fallbackText: string;
}) => {
  const [error, setError] = useState(false);
  if (!src || error) {
    return <div className="w-full h-full flex items-center justify-center bg-white">
        <span className="font-display text-2xl text-muted-foreground">{fallbackText}</span>
      </div>;
  }
  return <img src={src} alt={alt} className="max-w-[80%] max-h-[80%] object-contain" onError={() => setError(true)} style={{
    imageRendering: 'auto'
  }} />;
};
const Catalog = () => {
  return <Layout>
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-center">
            <h1 className="font-display text-5xl md:text-6xl text-primary mb-4">
              Каталог аудиокассет
            </h1>
            <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto">
              Исследуйте коллекции аудиокассет от ведущих мировых производителей.
              Выберите бренд, чтобы увидеть полный список моделей.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manufacturers Grid */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {manufacturers.map((manufacturer, index) => <motion.div key={manufacturer.id} initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.03
          }}>
                <Link to={`/catalog/${manufacturer.id}`} className="tape-card block group h-full bg-[sidebar-primary-foreground] bg-[#ede5de]">
                  {/* Logo Area */}
                  <div className="aspect-square overflow-hidden flex items-center justify-center p-4" style={{
                backgroundColor: '#ffffff'
              }}>
                    <LogoImage src={manufacturer.logo} alt={manufacturer.name} fallbackText={manufacturer.name.charAt(0)} />
                  </div>

                  {/* Content */}
                  <div className="p-3 bg-[sidebar-primary-foreground] bg-[#dbd7cc]">
                    <div className="flex items-start justify-between mb-1">
                      <h2 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                        {manufacturer.name}
                      </h2>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <MapPin className="w-3 h-3" />
                      {manufacturer.country}
                    </div>

                    <div className="pt-2 border-t border-border">
                      <span className="text-xs font-medium text-primary">
                        Смотреть каталог →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Tape Types Legend */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="font-display text-2xl mb-8 text-center text-foreground">
            Типы магнитной ленты
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
              <span className="tape-type-badge tape-type-I text-base">Type I</span>
              <span className="text-muted-foreground text-base">Ferric (Normal)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="tape-type-badge tape-type-II text-base">Type II</span>
              <span className="text-muted-foreground text-base">Chrome (High)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="tape-type-badge tape-type-III text-base">Type III</span>
              <span className="text-muted-foreground text-base">Ferro-Chrome</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="tape-type-badge tape-type-IV text-base">Type IV</span>
              <span className="text-muted-foreground text-base">Metal</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Catalog;