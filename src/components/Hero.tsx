import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import heroBanner from "@/assets/hero-banner.jpeg";

const WHATSAPP_LINK = "https://wa.me/5511974489877?text=Olá! Gostaria de saber mais sobre os serviços da GEO Digital.";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-66px)] md:min-h-[calc(100vh-82px)] flex items-center mt-[66px] md:mt-[82px] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="GEO Digital - Agência de Marketing"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-12 md:py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs md:text-sm font-medium rounded-full glass-card text-primary border border-primary/30">
              Agência de Marketing Digital
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
          >
            A <span className="gradient-text">GEO Digital</span> é uma agência de marketing focada em levar{" "}
            <span className="gradient-text">clientes</span> para o seu negócio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
          >
            Especialista em criação de anúncios e estratégias digitais, atua para aumentar a visibilidade da sua marca, atrair o público certo e gerar oportunidades reais de clientes para o seu negócio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild variant="cta" size="lg">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com um Especialista
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#como-trabalhamos">
                Saiba Mais
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { duration: 1.5, repeat: Infinity }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;
