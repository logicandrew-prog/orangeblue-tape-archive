import { Link } from "react-router-dom";
import { Disc, Mail, ExternalLink } from "lucide-react";
export const Footer = () => {
  return <footer className="footer-gradient text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Disc className="w-6 h-6 text-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-primary leading-none text-4xl">
                  orangeblue
                </span>
                <span className="text-primary/70 tracking-[0.2em] uppercase text-center font-mono text-sm font-bold">
                  Tape
                </span>
              </div>
            </Link>
            <p className="text-sm text-accent-foreground/70 max-w-xs">
              Каталог компакт-кассет — история аналогового звука и коллекционирование магнитных лент.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-xl text-primary">Разделы</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">
                Главная
              </Link>
              <Link to="/catalog" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">
                Каталог кассет
              </Link>
              <Link to="/about" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">
                Об аудиокассетах
              </Link>
              <Link to="/catalogs" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">
                Печатные каталоги
              </Link>
              <Link to="/contact" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">
                Обратная связь
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-display text-xl text-primary">Ресурсы</h4>
            <div className="flex flex-col gap-2">
              <a href="https://c-90.org" target="_blank" rel="noopener noreferrer" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-1">
                C-90.org <ExternalLink className="w-3 h-3" />
              </a>
              <a href="https://www.tapetype.by" target="_blank" rel="noopener noreferrer" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-1">
                TapeType.by <ExternalLink className="w-3 h-3" />
              </a>
              <a target="_blank" rel="noopener noreferrer" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-1" href="">
                ​ <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-accent-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-accent-foreground/50">
            © 2024 orangeblue Tape. Все права защищены.
          </p>
          <a className="text-sm text-accent-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-2" href="mailto:tape@offmail.ru">​<Mail className="w-4 h-4" />
            tape@offmail.ru
          </a>
        </div>
      </div>
    </footer>;
};