import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { siteSettings } from "@/data/siteSettings";

const Contact = () => {
  const contactEmail = siteSettings.contact_email;
  const contactIntro = siteSettings.contact_intro;

  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary py-[34px]">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="font-display text-5xl md:text-6xl text-primary mb-4">
              Обратная связь
            </h1>
            <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto">
              {contactIntro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="tape-card p-6 bg-primary-foreground">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground">Email</h3>
              </div>
              <a className="text-primary hover:text-primary/80 transition-colors break-words" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="tape-card p-6 bg-primary-foreground">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground">О чём писать?</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Вопросы о типах кассет</li>
                <li>• Помощь с идентификацией</li>
                <li>• Предложения для каталога</li>
                <li>• Сотрудничество</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Contact;
