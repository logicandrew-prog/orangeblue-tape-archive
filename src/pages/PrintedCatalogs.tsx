import { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, Image, Video, ExternalLink } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { printedCatalogs, PrintedCatalog } from "@/data/printedCatalogs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
const CatalogCard = ({
  catalog,
  onClick
}: {
  catalog: PrintedCatalog;
  onClick?: () => void;
}) => {
  const isPdf = catalog.type === 'pdf';
  const isVideo = catalog.type === 'video';
  const Icon = isPdf ? FileText : isVideo ? Video : Image;
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} className="tape-card overflow-hidden cursor-pointer group bg-[#ede5de]" onClick={onClick}>
      {catalog.image ? <div className="aspect-[4/3] bg-muted overflow-hidden">
          <img src={catalog.image} alt={catalog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        </div> : <div className="aspect-[4/3] bg-muted flex items-center justify-center">
          <Icon className="w-16 h-16 text-primary/30" />
        </div>}

      <div className="p-4 bg-[#ede5de]">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-lg text-foreground truncate">
              {catalog.title}
            </h3>
            {catalog.year && <p className="text-sm text-primary font-medium">{catalog.year}</p>}
            {catalog.description && <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {catalog.description}
              </p>}
          </div>
        </div>

        {isPdf && catalog.pdfUrl && <a href={catalog.pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-3" onClick={e => e.stopPropagation()}>
            <Download className="w-4 h-4" />
            Скачать PDF
          </a>}
      </div>
    </motion.div>;
};
const PrintedCatalogs = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const audioCatalogs = printedCatalogs.filter(c => c.type === 'audio');
  const videoCatalogs = printedCatalogs.filter(c => c.type === 'video');
  const pdfCatalogs = printedCatalogs.filter(c => c.type === 'pdf');
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
              Печатные каталоги
            </h1>
            <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto">
              Оригинальные каталоги производителей: сканы страниц и PDF-документы
            </p>
          </motion.div>
        </div>
      </section>

      {/* Audio Catalogs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mb-8">
            <h2 className="font-display text-3xl text-foreground mb-2">
              Каталоги аудиокассет
            </h2>
            <p className="text-muted-foreground">
              Сканы печатных каталогов аудиокассет разных лет
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {audioCatalogs.map(catalog => <CatalogCard key={catalog.title + catalog.year} catalog={catalog} onClick={() => catalog.image && setSelectedImage(catalog.image)} />)}
          </div>
        </div>
      </section>

      {/* Video Catalogs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mb-8">
            <h2 className="font-display text-3xl text-foreground mb-2">
              Каталоги видеокассет
            </h2>
            <p className="text-muted-foreground">
              Сканы печатных каталогов видеокассет
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videoCatalogs.map(catalog => <CatalogCard key={catalog.title + catalog.year} catalog={catalog} onClick={() => catalog.image && setSelectedImage(catalog.image)} />)}
          </div>
        </div>
      </section>

      {/* PDF Catalogs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mb-8">
            <h2 className="font-display text-3xl text-foreground mb-2">
              PDF-каталоги
            </h2>
            <p className="text-muted-foreground">
              Каталоги в формате PDF для скачивания
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pdfCatalogs.map(catalog => <CatalogCard key={catalog.title + catalog.year} catalog={catalog} />)}
          </div>
        </div>
      </section>

      {/* Image Preview Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle>Просмотр каталога</DialogTitle>
          </DialogHeader>
          {selectedImage && <div className="p-4 overflow-auto">
              <img src={selectedImage} alt="Каталог" className="w-full h-auto" />
            </div>}
        </DialogContent>
      </Dialog>
    </Layout>;
};
export default PrintedCatalogs;