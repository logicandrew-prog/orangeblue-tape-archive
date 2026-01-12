import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { CassetteIcon } from "@/components/ui/CassetteIcon";
const About = () => {
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
              Об аудиокассетах
            </h1>
            <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto">
              История, типы и технические особенности компакт-кассет
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <h2 className="font-display text-4xl text-foreground mb-6">
                История создания
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  <strong className="text-foreground">Компакт-кассета</strong> (Compact Cassette) была представлена компанией 
                  <strong className="text-primary"> Philips</strong> в августе 1963 года на выставке Berlin Radio Show. 
                  Изначально кассета предназначалась для диктофонов и голосовой записи.
                </p>
                <p>
                  В 1965 году Philips сделала технологию <strong className="text-foreground">бесплатной для лицензирования</strong>, 
                  что обеспечило совместимость устройств по всему миру и превратило кассету в мировой стандарт.
                </p>
                <p>
                  Благодаря развитию химии магнитных лент и систем шумоподавления (Dolby B, C, S), 
                  кассета эволюционировала от носителя для голоса до полноценного Hi-Fi формата.
                </p>
              </div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="flex justify-center">
              <CassetteIcon className="w-64 md:w-80" animate={false} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tape Types */}
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
        }} className="text-center mb-12">
            <h2 className="font-display text-4xl text-foreground mb-4">
              Типы магнитной ленты
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Международная электротехническая комиссия (IEC) в 1979 году установила 4 стандартных типа кассетных лент
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Type I */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="tape-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="tape-type-badge tape-type-I text-base px-4 py-1">Type I</span>
                <span className="text-lg font-medium text-foreground">Ferric / Normal Bias</span>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Состав:</strong> Оксид железа (γ-Fe₂O₃)
                </p>
                <p>
                  <strong className="text-foreground">Эквализация:</strong> 120 мкс
                </p>
                <p>
                  <strong className="text-foreground">Особенности:</strong> Хорошая передача низких частот, но более высокий уровень шума. 
                  Наиболее доступный и распространённый тип. Подходит для речи и музыки среднего качества.
                </p>
                <p>
                  <strong className="text-foreground">Примеры:</strong> TDK D, Sony HF, Maxell UR, BASF Ferro
                </p>
              </div>
            </motion.div>

            {/* Type II */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1
          }} className="tape-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="tape-type-badge tape-type-II text-base px-4 py-1">Type II</span>
                <span className="text-lg font-medium text-foreground">Chrome / High Bias</span>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Состав:</strong> Диоксид хрома (CrO₂) или кобальт-модифицированный феррит
                </p>
                <p>
                  <strong className="text-foreground">Эквализация:</strong> 70 мкс
                </p>
                <p>
                  <strong className="text-foreground">Особенности:</strong> Улучшенная передача высоких частот и меньший шум. 
                  Оптимальный баланс цена/качество для Hi-Fi записи.
                </p>
                <p>
                  <strong className="text-foreground">Примеры:</strong> TDK SA, Maxell XL II, Sony UX, BASF Chrome
                </p>
              </div>
            </motion.div>

            {/* Type III */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} className="tape-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="tape-type-badge tape-type-III text-base px-4 py-1">Type III</span>
                <span className="text-lg font-medium text-foreground">Ferro-Chrome</span>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Состав:</strong> Двухслойное покрытие (феррит + хром)
                </p>
                <p>
                  <strong className="text-foreground">Эквализация:</strong> 70 мкс
                </p>
                <p>
                  <strong className="text-foreground">Особенности:</strong> Попытка объединить преимущества Type I и II. 
                  Технология не получила широкого распространения и была вытеснена улучшенными Type II и появлением Type IV.
                </p>
                <p>
                  <strong className="text-foreground">Примеры:</strong> Sony FeCr, Memorex FeCr (редкие, 1970-е годы)
                </p>
              </div>
            </motion.div>

            {/* Type IV */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3
          }} className="tape-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="tape-type-badge tape-type-IV text-base px-4 py-1 text-destructive bg-orange-100">Type IV</span>
                <span className="text-lg font-medium text-foreground">Metal</span>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Состав:</strong> Чистые металлические частицы (MP — Metal Particle)
                </p>
                <p>
                  <strong className="text-foreground">Эквализация:</strong> 70 мкс
                </p>
                <p>
                  <strong className="text-foreground">Особенности:</strong> Максимальное качество записи, широчайший динамический диапазон, 
                  превосходная передача высоких частот. Требует специальных головок для записи. Самый дорогой тип.
                </p>
                <p>
                  <strong className="text-foreground">Примеры:</strong> TDK MA, Sony Metal Master, Maxell Metal Vertex
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
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
        }} className="text-center mb-12">
            <h2 className="font-display text-4xl text-foreground mb-4">
              Технические характеристики
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="tape-card p-6 text-center">
              <div className="text-4xl font-display text-primary mb-2">3.81 мм</div>
              <p className="text-foreground font-medium mb-1">Ширина ленты</p>
              <p className="text-sm text-muted-foreground">
                Стандартная ширина магнитной ленты для всех компакт-кассет
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1
          }} className="tape-card p-6 text-center">
              <div className="text-4xl font-display text-primary mb-2">4.76 см/с</div>
              <p className="text-foreground font-medium mb-1">Скорость протяжки</p>
              <p className="text-sm text-muted-foreground">
                Стандартная скорость движения ленты (1⅞ дюйма в секунду)
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} className="tape-card p-6 text-center">
              <div className="text-4xl font-display text-primary mb-2">C-90</div>
              <p className="text-foreground font-medium mb-1">Популярный формат</p>
              <p className="text-sm text-muted-foreground">
                90 минут (45 минут на сторону) — самая распространённая длина
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturers Overview */}
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
        }} className="text-center mb-12">
            <h2 className="font-display text-4xl text-foreground mb-4">
              Ключевые производители
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
            name: "TDK",
            description: "Японская компания, создавшая легендарную серию SA (Super Avilyn) — эталон Type II кассет. Также известна сериями D, AD и металлическими MA."
          }, {
            name: "Sony",
            description: "Пионер формата Metal и создатель первого портативного плеера Walkman. Серии HF, UX и Metal Master стали классикой индустрии."
          }, {
            name: "Maxell",
            description: "Японский производитель с культовыми сериями XL II и Metal Vertex. Известны рекламой «Blown Away Guy», ставшей символом эпохи."
          }, {
            name: "BASF",
            description: "Немецкий концерн, изготовивший ленту для первого прототипа Philips. Главный производитель настоящего хромдиоксида (CrO₂)."
          }, {
            name: "Denon",
            description: "Японский производитель премиум-аудиотехники. Кассеты серий DX и HD отличались высочайшей точностью изготовления."
          }, {
            name: "AGFA",
            description: "Немецкий производитель фотоматериалов и магнитных лент. Серии Superferro и Stereochrom были популярны в Европе."
          }].map((manufacturer, index) => <motion.div key={manufacturer.name} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="tape-card p-6">
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {manufacturer.name}
                </h3>
                <p className="text-muted-foreground">
                  {manufacturer.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>
    </Layout>;
};
export default About;