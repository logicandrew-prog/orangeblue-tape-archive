import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Disc } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { manufacturers } from "@/data/manufacturers";
const ImageWithFallback = ({
  src,
  alt,
  className
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [error, setError] = useState(false);
  if (error) {
    return <div className={`flex items-center justify-center bg-secondary ${className}`}>
        <Disc className="w-16 h-16 text-primary/50" />
      </div>;
  }
  return <img src={src} alt={alt} className={className} onError={() => setError(true)} loading="lazy" />;
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
              Каталог производителей
            </h1>
            <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto">
              Исследуйте коллекции аудиокассет от ведущих мировых производителей. 
              Выберите бренд, чтобы увидеть полный список моделей.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manufacturers Grid */}
      <section className="py-16 text-primary bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturers.map((manufacturer, index) => <motion.div key={manufacturer.id} initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }}>
                <Link to={`/catalog/${manufacturer.id}`} className="tape-card block group h-full">
                  {/* Logo + Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <ImageWithFallback src={manufacturer.image} alt={manufacturer.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {manufacturer.logo && (
                      <div className="absolute top-3 left-3 w-16 h-16 rounded-lg overflow-hidden shadow-sm flex items-center justify-center p-2" style={{ backgroundColor: '#ffffff', border: '2px solid #ffffff' }}>
                        <img
                          src={manufacturer.logo}
                          alt={`${manufacturer.name} logo`}
                          className="max-w-full max-h-full object-contain"
                          style={{ imageRendering: 'auto' }}
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 bg-primary-foreground">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h2 className="font-display text-3xl text-foreground group-hover:text-primary transition-colors">
                          {manufacturer.name}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {manufacturer.fullName}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {manufacturer.country}
                      </span>
                      {manufacturer.founded && <span className="inline-flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          с {manufacturer.founded}
                        </span>}
                    </div>
                    
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {manufacturer.description}
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-border">
                      <span className="text-sm font-medium text-primary">
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
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4 border-input text-orange-50 bg-amber-50">
          <h3 className="font-display text-2xl mb-8 text-center text-secondary-foreground bg-muted-foreground">
            Типы магнитной ленты
          </h3>
          <div className="flex flex-wrap justify-center gap-4 border-0">
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
              <span className="tape-type-badge tape-type-IV bg-amber-100 text-base">Type IV</span>
              <span className="text-muted-foreground text-base">Metal</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Catalog;