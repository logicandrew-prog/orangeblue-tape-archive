import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MessageSquare, User, AtSign, Loader2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { siteSettings } from "@/data/siteSettings";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Static site: open mailto link instead
    const mailtoUrl = `mailto:${siteSettings.contact_email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Имя: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.open(mailtoUrl, "_blank");

    toast({
      title: "Открыт почтовый клиент",
      description: "Отправьте письмо через ваш почтовый клиент."
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

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

      {/* Contact Form */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Contact Info */}
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-2 space-y-6 pt-0">
                <div className="tape-card p-6 bg-primary-foreground">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl text-foreground">Email</h3>
                  </div>
                  <a className="text-primary hover:text-primary/80 transition-colors break-words" href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </a>
                </div>

                <div className="tape-card p-6 bg-primary-foreground">
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
                </div>
              </motion.div>

              {/* Form */}
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-3">
                <form onSubmit={handleSubmit} className="tape-card p-6 space-y-6 bg-primary-foreground">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Ваше имя
                    </Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Иван Иванов" required className="bg-background" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <AtSign className="w-4 h-4 text-primary" />
                      Email
                    </Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="ivan@example.com" required className="bg-background" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      Тема
                    </Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Вопрос о кассетах..." required className="bg-background" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Расскажите подробнее..." rows={5} required className="bg-background resize-none" />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        Отправить сообщение
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Contact;
