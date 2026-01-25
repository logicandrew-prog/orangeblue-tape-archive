import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Disc } from "lucide-react";
const navLinks = [{
  href: "/",
  label: "Главная"
}, {
  href: "/catalog",
  label: "Каталог"
}, {
  href: "/about",
  label: "Об аудиокассетах"
}, {
  href: "/catalogs",
  label: "Печатные каталоги"
}, {
  href: "/contact",
  label: "Обратная связь"
}];
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  return <header className="header-gradient sticky top-0 z-50 mt-0 pt-[20px] pb-[20px]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20 pt-[30px] pb-0">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group pb-[10px]">
            <motion.div whileHover={{
            rotate: 180
          }} transition={{
            duration: 0.5
          }} className="w-10 h-10 rounded-full bg-primary flex items-center justify-center pb-0">
              <Disc className="w-6 h-6 text-secondary" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-display text-primary leading-none text-4xl">
                orangeblue
              </span>
              <span className="text-primary/70 tracking-[0.2em] uppercase font-semibold font-mono text-center text-sm">
                tape
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.href} to={link.href} className={`nav-link font-medium ${location.pathname === link.href ? "text-primary" : ""}`}>
                {link.label}
                {location.pathname === link.href && <motion.div layoutId="activeNav" className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />}
              </Link>)}
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-primary" aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-secondary border-t border-primary/20">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link, index) => <motion.div key={link.href} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: index * 0.1
          }}>
                  <Link to={link.href} onClick={() => setIsMenuOpen(false)} className={`block py-2 px-4 rounded-lg font-medium transition-colors ${location.pathname === link.href ? "bg-primary/20 text-primary" : "text-primary/80 hover:bg-primary/10 hover:text-primary"}`}>
                    {link.label}
                  </Link>
                </motion.div>)}
            </nav>
          </motion.div>}
      </AnimatePresence>
    </header>;
};