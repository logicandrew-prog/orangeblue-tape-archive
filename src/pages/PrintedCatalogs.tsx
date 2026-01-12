import { motion } from "framer-motion";
import { Download, FileText, ExternalLink } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

interface CatalogItem {
  title: string;
  year: string;
  description: string;
  pdfUrl: string;
  previewUrl?: string;
}

const sonyCatalogs: CatalogItem[] = [
  {
    title: "Sony Cassettes 1990",
    year: "1990",
    description: "Полный каталог аудиокассет Sony за 1990 год, включая серии HF, UX и Metal",
    pdfUrl: "https://www.hifi-archiv.info/Sony%20Cassettes%201990.pdf",
  },
  {
    title: "Sony Cassettes 1991",
    year: "1991",
    description: "Каталог кассет Sony 1991 года с новыми моделями UX-Pro и Metal Master",
    pdfUrl: "https://www.hifi-archiv.info/Sony%20Cassettes%201991.pdf",
  },
  {
    title: "Sony Cassettes 1992",
    year: "1992",
    description: "Обновлённая линейка аудиокассет Sony с улучшенными характеристиками",
    pdfUrl: "https://www.hifi-archiv.info/Sony%20Cassettes%201992.pdf",
  },
  {
    title: "Sony Audio Cassettes 1993",
    year: "1993",
    description: "Каталог 1993 года — пик развития кассетных технологий Sony",
    pdfUrl: "https://www.hifi-archiv.info/Sony%20Audio%20Cassettes%201993.pdf",
  },
  {
    title: "Sony Tape Catalog 1988",
    year: "1988",
    description: "Ранний каталог кассет Sony конца 80-х годов",
    pdfUrl: "https://www.hifi-archiv.info/Sony%20Tape%20Catalog%201988.pdf",
  },
];

const PrintedCatalogs = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl md:text-6xl text-primary mb-4">
              Печатные каталоги
            </h1>
            <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto">
              Оригинальные каталоги производителей в формате PDF для скачивания и изучения
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sony Catalogs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-4xl text-foreground mb-4">
              Каталоги Sony
            </h2>
            <p className="text-muted-foreground">
              Официальные каталоги аудиокассет Sony разных лет. Источник:{" "}
              <a
                href="https://www.hifi-archiv.info/sony.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 inline-flex items-center gap-1"
              >
                hifi-archiv.info <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sonyCatalogs.map((catalog, index) => (
              <motion.div
                key={catalog.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="tape-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-foreground mb-1">
                      {catalog.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-2">
                      {catalog.year}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {catalog.description}
                    </p>
                    <a
                      href={catalog.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Скачать PDF
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-3xl text-foreground mb-6">
              Дополнительные ресурсы
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Больше каталогов и документации можно найти на специализированных сайтах, 
              посвящённых винтажной аудиотехнике
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.hifi-archiv.info"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
              >
                HiFi-Archiv.info
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://www.fedyunin.ru/cassettes/adt-cassette-tape/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
              >
                Fedyunin.ru
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PrintedCatalogs;
