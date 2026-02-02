import { motion } from "framer-motion";
import { Instagram, MessageCircle, Mail, Phone } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511974489877?text=Olá! Gostaria de saber mais sobre os serviços da GEO Digital.";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-48 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container relative z-10 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <span className="font-display text-2xl font-bold gradient-text">
              GEO Digital
            </span>
            <p className="text-muted-foreground text-sm mt-4 max-w-sm leading-relaxed">
              Agência de marketing digital especializada em estratégias que geram resultados reais para o seu negócio.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/geodigital.agencia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
                aria-label="Instagram"
              >
                <img src="/assets/instagram_logo.png" alt="Instagram" className="w-5 h-5 object-contain opacity-60 hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.tiktok.com/@oficial.geo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
                aria-label="TikTok"
              >
                <img src="/assets/tiktok_logo.png" alt="TikTok" className="w-5 h-5 object-contain opacity-60 hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <img src="/assets/whatsapp_logo.png" alt="WhatsApp" className="w-5 h-5 object-contain opacity-60 hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display font-semibold mb-4">Navegação</h4>
            <ul className="space-y-3">
              {[
                { label: "Início", href: "#hero" },
                { label: "Como Trabalhamos", href: "#como-trabalhamos" },
                { label: "Quem Somos", href: "#quem-somos" },
                { label: "Planos", href: "#planos" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+5511974489877"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (11) 97448-9877
                </a>
              </li>
              <li>
                <a
                  href="mailto:geodigital.agencia@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  geodigital.agencia@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-center"
        >
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} GEO Digital. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            CNPJ: 48.251.180/0001-00
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
