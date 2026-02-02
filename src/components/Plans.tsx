import { motion } from "framer-motion";
import { MessageCircle, Instagram } from "lucide-react";
import { Button } from "./ui/button";

const WHATSAPP_LINK = "https://wa.me/5511974489877?text=Olá! Gostaria de saber mais sobre o plano ";

const plans = [
  {
    icon: "/assets/tiktok_logo.png",
    name: "TikTok Pro Orgânico",
    description: "Estratégia completa para crescimento orgânico no TikTok com criação de conteúdo e gestão de perfil.",
    features: [
      "Planejamento de conteúdo",
      "Criação de roteiros",
      "Gestão do perfil",
      "Análise de métricas",
    ],
    popular: false,
  },
  {
    icon: "/assets/tiktok_logo.png",
    name: "Professional ADS",
    description: "Campanhas de tráfego pago completas no TikTok com foco em conversão e geração de leads.",
    features: [
      "Criação de criativos",
      "Gestão de campanhas",
      "Otimização contínua",
      "Relatórios semanais",
    ],
    popular: true,
  },
  {
    icon: "/assets/instagram_logo.png",
    name: "Pro Insta ADS",
    description: "Estratégia profissional de anúncios no Instagram para escalar seu negócio e gerar resultados.",
    features: [
      "Anúncios no Feed e Stories",
      "Segmentação avançada",
      "Testes A/B",
      "Suporte via WhatsApp",
    ],
    popular: false,
  },
];

const Plans = () => {
  return (
    <section id="planos" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-xs md:text-sm font-medium rounded-full glass-card text-primary border border-primary/30">
            Planos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Escolha o plano <span className="gradient-text">ideal</span> para seu negócio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Trabalhamos com estratégias personalizadas em TikTok Orgânico, TikTok Ads e Instagram Ads, de acordo com seus objetivos. Se não souber qual o plano ideal, entre em contato conosco.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group ${plan.popular ? 'lg:-mt-4 lg:mb-4 neon-border-rgb' : ''} rounded-2xl`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1.5 text-xs font-semibold rounded-full gradient-brand text-primary-foreground shadow-button">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className={`glass-card rounded-2xl p-6 md:p-8 h-full flex flex-col shadow-card transition-all duration-300 hover:-translate-y-1 ${plan.popular ? 'border-primary/50 ring-1 ring-primary/20' : 'hover:border-primary/30'}`}>
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 border border-white/20 group-hover:shadow-glow transition-all duration-300">
                  <img src={plan.icon} alt={plan.name} className="w-8 h-8 object-contain" />
                </div>

                <h3 className="text-xl md:text-2xl font-display font-semibold mb-3">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <span className="w-5 h-5 rounded-full gradient-brand flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild variant={plan.popular ? "cta" : "outline"} size="lg" className="w-full">
                  <a href={`${WHATSAPP_LINK}${encodeURIComponent(plan.name)}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Entrar em Contato
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
