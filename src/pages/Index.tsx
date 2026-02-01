import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import AboutUs from "@/components/AboutUs";
import Plans from "@/components/Plans";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <HowWeWork />
        <AboutUs />
        <Plans />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
