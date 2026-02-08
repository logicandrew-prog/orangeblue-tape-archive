import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Video, Loader2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { getVideoManufacturerById } from "@/data/videoManufacturers";
import { fetchVideoTapesFromFolder, ParsedVideoTape } from "@/utils/videoTapeParser";
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
        <Video className="w-12 h-12 text-primary/30" />
      </div>;
  }
  return <img src={src} alt={alt} className={className} onError={() => setError(true)} loading="lazy" />;
};
const LogoSquare = ({
  src,
  alt
}: {
  src?: string;
  alt: string;
}) => {
  const [error, setError] = useState(false);
  if (!src || error) {
    return <div className="w-full aspect-square rounded-xl overflow-hidden flex items-center justify-center" style={{
      backgroundColor: '#ffffff',
      border: '2px solid #ffffff'
    }}>
        <span className="font-display text-3xl text-muted-foreground">{alt[0]}</span>
      </div>;
  }
  return <div className="w-full aspect-square rounded-xl overflow-hidden flex items-center justify-center p-4" style={{
    backgroundColor: '#ffffff',
    border: '2px solid #ffffff'
  }}>
      <img src={src} alt={alt} className="max-w-full max-h-full object-contain" onError={() => setError(true)} style={{
      imageRendering: 'auto'
    }} />
    </div>;
};
const VideoManufacturerPage = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const manufacturer = id ? getVideoManufacturerById(id) : undefined;
  const [tapes, setTapes] = useState<ParsedVideoTape[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!manufacturer) return;
    setLoading(true);
    fetchVideoTapesFromFolder(manufacturer.folder).then(result => {
      setTapes(result);
      setLoading(false);
    });
  }, [manufacturer]);
  if (!manufacturer) {
    return <Navigate to="/video-catalog" replace />;
  }
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
            <Link to="/video-catalog" className="inline-flex items-center gap-2 text-primary/80 hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Назад к каталогу видеокассет
            </Link>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 lg:w-1/4">
                <LogoSquare src={manufacturer.logo} alt={manufacturer.name} />
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
          {loading ? <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <span className="ml-3 text-muted-foreground">Загрузка каталога...</span>
            </div> : tapes.length > 0 ? <>
              <h2 className="font-display text-3xl text-foreground mb-8">
                Видеокассеты ({tapes.length})
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {tapes.map((tape, index) => <motion.div key={tape.id} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: Math.min(index * 0.02, 0.5)
            }} className="tape-card overflow-hidden bg-muted">
                    <div className="aspect-[4/3] bg-muted overflow-hidden">
                      <ImageWithFallback src={tape.image} alt={tape.name} className="w-full h-full object-contain" />
                    </div>

                    <div className="p-4 bg-muted">
                      <h3 className="font-display text-lg text-foreground mb-1">
                        {tape.name}
                      </h3>
                      {tape.size && <p className="text-sm text-muted-foreground">
                          Размер: {tape.size}
                        </p>}
                    </div>
                  </motion.div>)}
              </div>
            </> : <div className="text-center py-20">
              <Video className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">Каталог видеокассет пока не загружен</p>
            </div>}
        </div>
      </section>
    </Layout>;
};
export default VideoManufacturerPage;