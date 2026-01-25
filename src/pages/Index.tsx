import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Disc, History, BookOpen, Users } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { CassetteIcon } from "@/components/ui/CassetteIcon";
import { manufacturers } from "@/data/manufacturers";
const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary py-20 md:py-32">
        <div className="cassette-pattern absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="text-center md:text-left">
              <h1 className="font-display text-5xl md:text-7xl text-primary mb-4 leading-tight">
                orangeblue
                <span className="block text-accent-foreground">Tape</span>
              </h1>
              <p className="text-lg md:text-xl text-accent-foreground/80 mb-8 max-w-lg">
                Путешествие в мир аналогового звука. Каталог компакт-кассет от легендарных производителей: история, типы и коллекционирование.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link to="/catalog" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Смотреть каталог
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/about" className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors">
                  Узнать больше
                </Link>
              </div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="flex justify-center">
              <CassetteIcon className="w-64 md:w-80" animate />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Погрузитесь в историю
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Компакт-кассета — символ эпохи аналогового звука, изменивший музыкальную индустрию навсегда
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            icon: History,
            title: "История",
            description: "Philips представила компакт-кассету в 1963 году, открыв эру портативной музыки",
            link: "/about"
          }, {
            icon: Disc,
            title: "Каталог",
            description: "Коллекция кассет от AGFA, BASF, Sony, TDK, Maxell и других легендарных брендов",
            link: "/catalog"
          }, {
            icon: BookOpen,
            title: "Типы лент",
            description: "Узнайте различия между Type I, II, III и IV — от ферро до металла",
            link: "/about"
          }].map((feature, index) => <motion.div key={feature.title} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                <Link to={feature.link} className="tape-card block p-6 h-full group bg-primary-foreground">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Link>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Manufacturers Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Производители
            </h2>
            <p className="text-muted-foreground text-lg">
              Легендарные бренды, создавшие историю аудиокассет
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {manufacturers.slice(0, 8).map((manufacturer, index) => <motion.div key={manufacturer.id} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.05
          }}>
                <Link to={`/catalog/${manufacturer.id}`} className="tape-card block p-4 text-center group bg-primary-foreground">
                  <div className="aspect-square mb-3 rounded-lg overflow-hidden bg-muted">
                    <img src={manufacturer.image} alt={manufacturer.name} className="w-full h-full group-hover:scale-105 transition-transform duration-300 object-cover" loading="lazy" />
                  </div>
                  <h3 className="font-display text-xl text-foreground">
                    {manufacturer.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{manufacturer.country}</p>
                </Link>
              </motion.div>)}
          </div>

          <div className="text-center mt-10">
            <Link to="/catalog" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
              Смотреть все бренды
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center max-w-2xl mx-auto">
            <Users className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-display text-4xl text-accent-foreground mb-4">
              Есть вопросы?
            </h2>
            <p className="text-accent-foreground/70 mb-8">
              Свяжитесь с нами, если хотите узнать больше о коллекционировании аудиокассет или поделиться своей коллекцией
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Написать нам
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>;
};
export default Index;