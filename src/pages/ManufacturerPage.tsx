import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, ExternalLink, Disc } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { getManufacturerById } from "@/data/manufacturers";
const ImageWithFallback = ({
  src,
  alt,
  className
}: {
  src?: string;
  alt: string;
  className?: string;
}) => {
  const [error, setError] = useState(false);
  if (!src || error) {
    return <div className={`flex items-center justify-center bg-muted ${className}`}>
        <Disc className="w-12 h-12 text-primary/30" />
      </div>;
  }
  return <img src={src} alt={alt} className={className} onError={() => setError(true)} loading="lazy" />;
};
const ManufacturerPage = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const manufacturer = id ? getManufacturerById(id) : undefined;
  if (!manufacturer) {
    return <Navigate to="/catalog" replace />;
  }
  const typeLabels = {
    I: "Type I (Ferric)",
    II: "Type II (Chrome)",
    III: "Type III (Ferro-Chrome)",
    IV: "Type IV (Metal)"
  };
  return <Layout>
      {/* Header */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }}>
            <Link to="/catalog" className="inline-flex items-center gap-2 text-primary/80 hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Назад к каталогу
            </Link>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 lg:w-1/4">
                <div className="aspect-square rounded-xl overflow-hidden bg-accent">
                  <ImageWithFallback src={manufacturer.image} alt={manufacturer.name} className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="flex-1">
                <h1 className="font-display text-5xl md:text-6xl text-primary mb-2">
                  {manufacturer.name}
                </h1>
                <p className="text-accent-foreground/70 text-lg mb-4">
                  {manufacturer.fullName}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-accent-foreground/80 mb-6">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {manufacturer.country}
                  </span>
                  {manufacturer.founded && <span className="inline-flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Основана в {manufacturer.founded} году
                    </span>}
                </div>
                
                <p className="text-accent-foreground/80 text-lg leading-relaxed">
                  {manufacturer.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tapes Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl text-foreground mb-8">
            Модели кассет ({manufacturer.tapes.length})
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {manufacturer.tapes.map((tape, index) => <motion.div key={tape.id} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.05
          }} className="tape-card overflow-hidden">
                <div className="aspect-[4/3] bg-muted overflow-hidden flex items-center justify-center">
                  <div className="text-center p-4">
                    <Disc className="w-16 h-16 text-primary/30 mx-auto mb-2" />
                    <span className="text-sm text-muted-foreground">{manufacturer.name}</span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display text-xl text-foreground">
                      {tape.name}
                    </h3>
                    <span className={`tape-type-badge tape-type-${tape.type}`}>
                      Type {tape.type}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2">
                    {typeLabels[tape.type]}
                  </p>
                  
                  <p className="text-sm text-primary font-medium">
                    {tape.years}
                  </p>
                  
                  {tape.description && <p className="text-sm text-muted-foreground mt-2">
                      {tape.description}
                    </p>}
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">​Информация обновляется и дополняется.        </p>
          <div className="flex flex-wrap justify-center gap-4">
            
            
          </div>
        </div>
      </section>
    </Layout>;
};
export default ManufacturerPage;