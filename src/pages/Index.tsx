import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import AboutUs from "@/components/AboutUs";
import Plans from "@/components/Plans";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Global Background Lights */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-light-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px] animate-light-fast" />
        <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] bg-accent/15 rounded-full blur-[100px] animate-light-slow" style={{ animationDelay: '-7s' }} />
        <div className="absolute bottom-[20%] left-[10%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[80px] animate-light-fast" style={{ animationDelay: '-3s' }} />
      </div>

      <Header />
      <main className="relative z-10">
        <Hero />
        <HowWeWork />
        <AboutUs />
        <Plans />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
