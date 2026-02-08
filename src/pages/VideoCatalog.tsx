import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Video, MapPin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { videoManufacturers } from "@/data/videoManufacturers";
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
const VideoCatalog = () => {
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
              Каталог видеокассет
            </h1>
            <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto">
              Коллекция видеокассет различных форматов: VHS, S-VHS, Hi8, Video8, MiniDV и Video 2000
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manufacturers Grid */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {videoManufacturers.map((manufacturer, index) => <motion.div key={manufacturer.id} initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.05
          }}>
                <Link to={`/video-catalog/${manufacturer.id}`} className="tape-card block group h-full">
                  {/* Logo Area */}
                  <div className="aspect-square overflow-hidden flex items-center justify-center p-4" style={{
                backgroundColor: '#ffffff'
              }}>
                    <LogoImage src={manufacturer.logo} alt={manufacturer.name} fallbackText={manufacturer.name.charAt(0)} />
                  </div>

                  {/* Content */}
                  <div className="p-3 bg-[#ede5de]">
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
                        Смотреть →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <Video className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="font-display text-2xl text-foreground mb-4">
            Форматы видеокассет
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            В каталоге представлены кассеты форматов VHS, S-VHS, Hi8, Video8, Digital8, MiniDV и Video 2000
          </p>
          <Link to="/about-video" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
            Узнать больше о форматах
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>;
};
export default VideoCatalog;