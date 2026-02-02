import { motion } from "framer-motion";
import { Target, Users, BarChart3, Zap } from "lucide-react";

const highlights = [
  { icon: Target, label: "Foco em Performance" },
  { icon: Users, label: "Leads Qualificados" },
  { icon: BarChart3, label: "Decisões Baseadas em Dados" },
  { icon: Zap, label: "Otimização Contínua" },
];

const AboutUs = () => {
  return (
    <section id="quem-somos" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-4 text-xs md:text-sm font-medium rounded-full glass-card text-accent border border-accent/30">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Quem é a <span className="gradient-text">GEO Digital</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                Somos uma agência de marketing especializada em estratégia, criação de anúncios, gestão de perfis em redes sociais e tráfego pago. Atuamos com foco em performance, ajudando negócios locais e online a gerar visibilidade, leads e novos clientes.
              </p>
              <p>
                Trabalhamos com <span className="text-foreground font-medium">TikTok Orgânico</span>, <span className="text-foreground font-medium">TikTok Ads</span> e <span className="text-foreground font-medium">Instagram Ads</span>, desenvolvendo campanhas completas que envolvem planejamento estratégico, criação de criativos, gestão de anúncios, análise de dados e otimização contínua dos resultados.
              </p>
              <p>
                Nosso objetivo é simples e claro: <span className="text-foreground font-medium">ganhar clientes, escalar negócios e otimizar o tempo dos nossos parceiros</span>, utilizando marketing moderno, processos organizados e decisões baseadas em dados.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl gradient-brand flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-sm md:text-base font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
