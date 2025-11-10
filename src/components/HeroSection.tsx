import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import cyberHeroImage from "@/assets/cyber-hero.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = " ./initialize_cyber_academy.sh";

  // Typing effect
  useEffect(() => {
    const typeText = () => {
      for (let i = 0; i <= fullText.length; i++) {
        setTimeout(() => {
          setTypedText(fullText.slice(0, i));
        }, i * 100);
      }
    };

    typeText();
    const interval = setInterval(typeText, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background images */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${cyberHeroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95" />
      <div className="absolute inset-0 bg-circuit opacity-10" />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 bg-black/70 px-4 py-2 rounded-lg border border-cyan-400/40 mb-8 backdrop-blur-sm">
          <Terminal className="h-5 w-5 text-cyan-400 animate-pulse" />
          <span className="font-mono text-sm text-gray-400">
            💡 Security is not something you buy, it's a mindset.
          </span>
        </div>

        <div className="space-y-6 mb-12">
          <h1 className="font-orbitron text-4xl sm:text-6xl lg:text-7xl font-black">
            <span className="text-[#1eb53a]">TA</span>
            <span className="text-[#fcd116]">N</span>
            <span className="text-[#000000] drop-shadow-[0_0_6px_white]">ZA</span>
            <span className="text-[#fcd116]">N</span>
            <span className="text-[#00a3dd]">IA</span>
            <br />
            <span className="text-purple-500 animate-pulse">CYBERSECURITY</span>
            <br />
            <span className="text-cyan-400 animate-pulse">ACADEMY</span>
          </h1>

          <div className="bg-black/80 border border-cyan-400/40 rounded-lg p-4 font-mono text-left max-w-2xl mx-auto backdrop-blur-sm">
            <div className="text-gray-500 mb-2">Initializing Cyber Academy...</div>
            <div className="flex items-center">
              <span className="text-red-500">root@academy:~$</span>
              <span className="text-green-500 ml-2">{typedText}</span>
              <span className="text-green-500 animate-pulse ml-1">█</span>
            </div>
          </div>
        </div>

        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-400 font-mono mb-8 leading-relaxed">
          <span className="text-purple-400">Mastering</span> cybersecurity <br />
          through hands-on learning & research
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/Register">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold text-lg px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#00ffff]"
            >
              <Terminal className="mr-2 h-5 w-5" />
              Join & Start Learning Now!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
