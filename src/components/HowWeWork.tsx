import { motion } from "framer-motion";
import { Search, PenTool, Rocket, TrendingUp, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Entendimento do seu negócio",
    description: "Analisamos o negócio, o público e os objetivos para definir a melhor estratégia digital.",
    number: "01",
  },
  {
    icon: PenTool,
    title: "Criação e Estruturação",
    description: "Criamos os criativos para anúncios, estruturamos perfis e organizamos as contas de anúncios de forma profissional.",
    number: "02",
  },
  {
    icon: Rocket,
    title: "Publicação e Gestão",
    description: "Gerenciamos conteúdos e campanhas, ajustando segmentações, formatos e abordagens para melhor performance.",
    number: "03",
  },
  {
    icon: TrendingUp,
    title: "Análise e Otimização",
    description: "Acompanhamos os resultados e realizamos otimizações contínuas para gerar mais oportunidades de clientes.",
    number: "04",
  },
  {
    icon: MessageCircle,
    title: "Suporte via WhatsApp",
    description: "Oferecemos suporte direto via WhatsApp para alinhamentos, dúvidas e acompanhamento do serviço durante o período contratado.",
    number: "05",
  },
];

const HowWeWork = () => {
  return (
    <section id="como-trabalhamos" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-xs md:text-sm font-medium rounded-full glass-card text-secondary border border-secondary/30">
            Metodologia
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Como <span className="gradient-text">Trabalhamos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Um processo estruturado para garantir resultados reais para o seu negócio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-6 md:p-8 h-full shadow-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                {/* Number badge */}
                <span className="absolute -top-3 -right-3 w-12 h-12 rounded-full gradient-brand flex items-center justify-center text-sm font-bold text-primary-foreground shadow-button">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl gradient-brand flex items-center justify-center mb-6 group-hover:shadow-button transition-shadow duration-300">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-lg md:text-xl font-display font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
