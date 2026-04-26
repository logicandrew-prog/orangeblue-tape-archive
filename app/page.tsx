"use client";

import Link from "next/link";
import Image from "next/image";
import DOMPurify from "dompurify";
import { motion } from "framer-motion";
import { ArrowRight, Disc, Video, Monitor, History, BookOpen } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { CassetteIcon } from "@/components/ui/CassetteIcon";

const audioShowcase = [
  { name: "SONY", id: "sony", image: "/Sony_cassettes/images/Sony_Metal_Master_161.jpg" },
  { name: "TDK", id: "tdk", image: "/TDK/images/TDK_SA_215.jpg" },
  { name: "BASF", id: "basf", image: "/Basf_Emtec/images/BASF_Chrome_Super_II_68.jpg" },
  { name: "DENON", id: "denon", image: "/Denon_Columbia/images/Denon_HD-M_32.jpg" },
];

const videoShowcase = [
  { name: "SONY", id: "sony-video", image: "/Videocassette/Sony/images/sony_1992-v-e-180.jpg" },
  { name: "TDK", id: "tdk-video", image: "/Videocassette/TDK/images/TDK_1987-hs-e-180-1.jpg" },
  { name: "BASF", id: "basf-video", image: "/Videocassette/BASF/images/BASF_1985-super-hg-e-180.jpg" },
  { name: "JVC", id: "jvc-video", image: "/Videocassette/JVC/images/JVC_1985-super-hg-e-180-1.jpg" },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary py-20 md:py-32">
        <div className="cassette-pattern absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h1 className="font-display text-5xl md:text-7xl text-primary mb-4 leading-tight">
                orangeblue
                <span className="block text-accent-foreground">Tape</span>
              </h1>
              <p className="text-lg md:text-xl text-accent-foreground/80 mb-8 max-w-lg">
                Путешествие в мир аналогового звука и видео. Каталог аудио компакт-кассет и видеокассет от легендарных производителей: история, типы и коллекционирование.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="/catalog"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Каталог Аудио
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/video-catalog"
                  className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
                >
                  Каталог Видео
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <CassetteIcon className="w-64 md:w-80" animate />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Navigation Buttons */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Погрузитесь в историю</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Компакт-кассета — символ эпохи аналогового звука, изменивший музыкальную индустрию навсегда
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Disc, title: "Типы аудиолент", description: "Type I, II, III и IV — от ферро до металла", link: "#tape-types" },
              { icon: Video, title: "Форматы видеокассет", description: "VHS, Hi8, Video8, MiniDV и другие форматы", link: "#video-history" },
              { icon: History, title: "Каталог Аудиокассет", description: "Коллекция кассет от легендарных брендов", link: "/catalog" },
              { icon: BookOpen, title: "Каталог Видеокассет", description: "Видеокассеты различных форматов", link: "/video-catalog" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={feature.link} className="tape-card block p-6 h-full group bg-[#f8f7f7]">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audio History */}
      <section className="py-16 bg-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl text-foreground mb-6 flex items-center gap-3">
                История аудиокассеты
                <img src="/Videocassette/Glavnaya/compact-cassette-logo.png" alt="Compact Cassette" className="inline-block h-10" />
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  <strong className="text-foreground">Компакт-кассета</strong> (Compact Cassette) была представлена компанией
                  <strong className="text-primary"> Philips</strong> в августе 1963 года на выставке Berlin Radio Show.
                  Изначально кассета предназначалась для диктофонов и голосовой записи.
                </p>
                <p>
                  В 1965 году Philips сделала технологию <strong className="text-foreground">бесплатной для лицензирования</strong>,
                  что обеспечило совместимость устройств по всему миру и превратило кассета в мировой стандарт.
                </p>
                <p>
                  Благодаря развитию химии магнитных лент и систем шумоподавления (Dolby B, C, S),
                  кассета эволюционировала от носителя для голоса до полноценного Hi-Fi формата.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src="/Videocassette/Glavnaya/CompactCassettes1.jpg"
                alt="Компакт-кассеты"
                className="w-full max-w-md rounded-xl shadow-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tape Types */}
      <section id="tape-types" className="py-16 bg-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl text-foreground mb-4">Типы магнитной ленты</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Международная электротехническая комиссия (IEC) в 1979 году установила 4 стандартных типа кассетных лент
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { type: "I", label: "Ferric / Normal Bias", composition: "Оксид железа (γ-Fe₂O₃)", eq: "120 мкс", features: "Хорошая передача низких частот, но более высокий уровень шума. Наиболее доступный и распространённый тип.", examples: "TDK D, Sony HF, Maxell UR, BASF Ferro" },
              { type: "II", label: "Chrome / High Bias", composition: "Диоксид хрома (CrO₂) или кобальт-модифицированный феррит", eq: "70 мкс", features: "Улучшенная передача высоких частот и меньший шум. Оптимальный баланс цена/качество для Hi-Fi записи.", examples: "TDK SA, Maxell XL II, Sony UX, BASF Chrome" },
              { type: "III", label: "Ferro-Chrome", composition: "Двухслойное покрытие (феррит + хром)", eq: "70 мкс", features: "Попытка объединить преимущества Type I и II. Технология не получила широкого распространения.", examples: "Sony FeCr, Memorex FeCr (редкие, 1970-е годы)" },
              { type: "IV", label: "Metal", composition: "Чистые металлические частицы (MP)", eq: "70 мкс", features: "Максимальное качество записи, широчайший динамический диапазон, превосходная передача высоких частот.", examples: "TDK MA, Sony Metal Master, Maxell Metal Vertex" },
            ].map((t, i) => (
              <motion.div
                key={t.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="tape-card p-6 bg-primary-foreground"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`tape-type-badge tape-type-${t.type} text-base px-4 py-1`}>Type {t.type}</span>
                  <span className="text-lg font-medium text-foreground">{t.label}</span>
                </div>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p><strong className="text-foreground">Состав:</strong> {t.composition}</p>
                  <p><strong className="text-foreground">Эквализация:</strong> {t.eq}</p>
                  <p><strong className="text-foreground">Особенности:</strong> {t.features}</p>
                  <p><strong className="text-foreground">Примеры:</strong> {t.examples}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audio Manufacturers Showcase */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 border-inherit bg-inherit">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-4xl text-foreground mb-2 bg-card">Аудиокассеты</h2>
            <p className="text-muted-foreground bg-inherit">Лучшие модели от легендарных брендов</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {audioShowcase.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/catalog/${m.id}`} className="tape-card block p-4 text-center group bg-muted">
                  <div className="aspect-square mb-3 rounded-lg overflow-hidden bg-muted">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full group-hover:scale-105 transition-transform duration-300 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-xl text-foreground">{m.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/catalog" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
              Смотреть все бренды <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Manufacturers Showcase */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 bg-muted">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-4xl text-foreground mb-2 bg-card">Видеокассеты</h2>
            <p className="text-muted-foreground">Легендарные бренды мира видео</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {videoShowcase.map((m, i) => (
              <motion.div
                key={`video-${m.name}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/video-catalog/${m.id}`} className="tape-card block p-4 text-center group border-muted bg-muted">
                  <div className="aspect-square mb-3 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full group-hover:scale-105 transition-transform duration-300 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-xl text-foreground">{m.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/video-catalog" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
              Смотреть все бренды <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
