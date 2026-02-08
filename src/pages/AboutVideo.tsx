import { motion } from "framer-motion";
import { Video, Clock, AlertTriangle, HardDrive, Monitor, Disc } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutVideo = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Video className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-display text-5xl md:text-6xl text-primary mb-4">
              О видеокассетах
            </h1>
            <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto">
              История форматов домашнего видео, технические особенности и сохранение записей
            </p>
          </motion.div>
        </div>
      </section>

      {/* VHS Article */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-4xl mx-auto"
          >
            <h2 className="font-display text-4xl text-foreground mb-6 flex items-center gap-3">
              <Monitor className="w-10 h-10 text-primary" />
              VHS: От домашнего видео к цифровому архиву
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              VHS (Video Home System) — это не просто старая кассета, а целая эпоха в истории домашних развлечений 
              и личных воспоминаний. Доминируя на рынке с конца 1970-х до середины 1990-х, этот формат стал носителем 
              миллионов часов уникального контента: семейных праздников, любимых фильмов, записей телепередач. 
              Сегодня главная задача — сохранить это наследие, переведя его в цифровую форму.
            </p>

            <h3 className="font-display text-2xl text-foreground mt-10 mb-4">
              История формата и "война форматов"
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Разработанный японской компанией JVC и выпущенный в 1976 году, VHS одержал решительную победу 
              в конкурентной борьбе с форматом Betamax от Sony. Ключевыми факторами успеха стали:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-6">
              <li><strong>Открытая лицензия:</strong> JVC активно лицензировала технологию другим производителям.</li>
              <li><strong>Большая длительность записи:</strong> Первые кассеты VHS предлагали до 2 часов записи (против 1 часа у Betamax).</li>
              <li><strong>Прочный механизм:</strong> "М-образная" заправка ленты была проще и надежнее.</li>
              <li><strong>Поддержка видеопроката:</strong> JVC первой наладила отношения с киностудиями Голливуда.</li>
            </ul>

            <h3 className="font-display text-2xl text-foreground mt-10 mb-4">
              Семейство форматов VHS
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-semibold text-foreground mb-2">VHS-C (1982)</h4>
                <p className="text-sm text-muted-foreground">
                  Компактная кассета для первых камкордеров. Через адаптер воспроизводилась в обычных VHS-магнитофонах.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-semibold text-foreground mb-2">S-VHS (1987)</h4>
                <p className="text-sm text-muted-foreground">
                  Улучшенное качество — разрешение увеличено с ~240 до ~420 телевизионных линий.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-semibold text-foreground mb-2">D-VHS (1998)</h4>
                <p className="text-sm text-muted-foreground">
                  Цифровая версия формата, способная записывать видео в стандарте HD.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-semibold text-foreground mb-2">Стандартный VHS</h4>
                <p className="text-sm text-muted-foreground">
                  Магнитная лента 1/2 дюйма в корпусе 188×104×25 мм. Скорости: SP, LP, EP/SLP.
                </p>
              </div>
            </div>

            <h3 className="font-display text-2xl text-foreground mt-10 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-primary" />
              Риски и проблемы носителей
            </h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              <li><strong>Магнитный износ:</strong> Потеря сигнала из-за выпадения частиц магнитного слоя.</li>
              <li><strong>"Липкая лента" (Sticky Shed Syndrome):</strong> Разложение связующего слоя.</li>
              <li><strong>Механические повреждения:</strong> Разрывы ленты, поломка корпуса.</li>
              <li><strong>Плесень и влага:</strong> Могут безвозвратно повредить магнитный слой.</li>
              <li><strong>Устаревание оборудования:</strong> Исправные магнитофоны становятся редкостью.</li>
            </ul>

            <h3 className="font-display text-2xl text-foreground mt-10 mb-4 flex items-center gap-2">
              <HardDrive className="w-6 h-6 text-primary" />
              Оцифровка и сохранение
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Профессиональное сохранение видеозаписей VHS включает:
            </p>
            <ol className="text-muted-foreground space-y-2 mb-6 list-decimal list-inside">
              <li>Диагностика и визуальный осмотр кассеты</li>
              <li>Очистка и восстановление (удаление плесени, склейка разрывов)</li>
              <li>Воспроизведение на совместимом оборудовании (PAL/SECAM/NTSC)</li>
              <li>Коррекция сигнала (TBC, DNR)</li>
              <li>Захват с помощью качественной карты</li>
            </ol>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Рекомендуемые форматы:</strong> FFV1, Apple ProRes (для архива), H.264/H.265 (для просмотра).
            </p>
          </motion.article>
        </div>
      </section>

      {/* Video8 Article */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-4xl mx-auto"
          >
            <h2 className="font-display text-4xl text-foreground mb-6 flex items-center gap-3">
              <Disc className="w-10 h-10 text-primary" />
              Video8, Hi8, Digital8: Компактная революция
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              В конце 1980-х на смену громоздким камерам VHS-C пришла более изящная альтернатива — 
              формат Video8 и его наследники. Разработанные консорциумом во главе с Sony, эти 8-миллиметровые 
              кассеты на десятилетие стали синонимом компактной любительской видеосъемки.
            </p>

            <h3 className="font-display text-2xl text-foreground mt-10 mb-4">
              Эволюция формата: три поколения
            </h3>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-2 text-left">Параметр</th>
                    <th className="border p-2 text-left">Video8 (1985)</th>
                    <th className="border p-2 text-left">Hi8 (1989)</th>
                    <th className="border p-2 text-left">Digital8 (1999)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border p-2 font-medium">Тип сигнала</td>
                    <td className="border p-2">Аналоговый</td>
                    <td className="border p-2">Аналоговый</td>
                    <td className="border p-2">Цифровой (DV)</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-medium">Разрешение</td>
                    <td className="border p-2">~250 твл</td>
                    <td className="border p-2">~400 твл</td>
                    <td className="border p-2">~500 твл</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-medium">Звук</td>
                    <td className="border p-2">Аналоговый FM</td>
                    <td className="border p-2">AFM + цифровой PCM</td>
                    <td className="border p-2">Цифровой DV</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-display text-2xl text-foreground mt-10 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-primary" />
              Угрозы и сложности сохранения
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Кассеты семейства Video8 находятся в зоне повышенного риска:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-6">
              <li><strong>Нехватка оборудования:</strong> Основная масса устройств — камеры, стационарные декки редки.</li>
              <li><strong>Хрупкость носителя:</strong> 8-мм лента тоньше VHS, подвержена разрывам и расслоению.</li>
              <li><strong>Проблемы со звуком:</strong> Интеграция аудио с видео делает звук уязвимым.</li>
              <li><strong>Плесень:</strong> Даже небольшое поражение делает кассету безнадёжной.</li>
            </ul>

            <h3 className="font-display text-2xl text-foreground mt-10 mb-4">
              Процесс оцифровки
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-background">
                <h4 className="font-semibold text-foreground mb-2">Аналоговые Video8/Hi8</h4>
                <p className="text-sm text-muted-foreground">
                  Захват через аналоговые выходы камеры (композитный или S-Video) с обязательным TBC.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-background">
                <h4 className="font-semibold text-foreground mb-2">Digital8</h4>
                <p className="text-sm text-muted-foreground">
                  Идеальный способ — цифровой захват через FireWire (i.LINK) без потерь качества.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Своевременная и грамотная оцифровка — единственный надежный способ спасти 
              запечатленные на этих кассетах моменты прошлого.
            </p>
          </motion.article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-display text-2xl text-accent-foreground mb-4">
            Исследуйте коллекцию видеокассет
          </h3>
          <Link
            to="/video-catalog"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Открыть каталог
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutVideo;
