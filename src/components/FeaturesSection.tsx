import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  Shield, 
  Users, 
  Award, 
  Zap, 
  Globe, 
  Terminal,
  Database,
  Lock
} from "lucide-react";
import cyberLabImage from "@/assets/cyber-lab.jpg";
import ctfCompetitionImage from "@/assets/ctf-competition.jpg";
import { Link } from "react-router-dom";

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "E-Learning Platform",
      description: "Comprehensive cybersecurity courses from beginner to advanced levels",
      details: [
        "Interactive video lectures",
        "Hands-on coding challenges", 
        "Real-world case studies",
        "Certification programs"
      ],
      image: cyberLabImage,
      gradient: "bg-gradient-primary"
    },
    {
      icon: Shield,
      title: "Virtual Security Labs",
      description: "Practice in safe, isolated environments with real-world scenarios",
      details: [
        "Penetration testing labs",
        "Malware analysis sandbox",
        "Network security simulations",
        "24/7 lab access"
      ],
      image: cyberLabImage,
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Award,
      title: "CTF Competitions",
      description: "Compete in Capture The Flag events and sharpen your skills",
      details: [
        "Weekly CTF challenges",
        "Team competitions",
        "Global leaderboards",
        "Prize rewards"
      ],
      image: ctfCompetitionImage,
      gradient: "bg-gradient-accent"
    }
  ];

  const academyFeatures = [
    {
      icon: Users,
      title: "Research Collaboration",
      description: "Join cutting-edge cybersecurity research projects"
    },
    {
      icon: Globe,
      title: "Industry Partnerships",
      description: "Connect with leading cybersecurity companies"
    },
    {
      icon: Zap,
      title: "Live Threat Intelligence",
      description: "Real-time cyber threat monitoring and analysis"
    },
    {
      icon: Database,
      title: "Knowledge Repository",
      description: "Access extensive cybersecurity documentation"
    },
    {
      icon: Lock,
      title: "Security Certifications",
      description: "Earn recognized cybersecurity certifications"
    },
    {
      icon: Terminal,
      title: "Command Line Mastery",
      description: "Master essential hacking and defense tools"
    }
  ];

  return (
    <section className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-background/50 px-4 py-2 rounded-lg border border-primary/30 mb-6">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">./protect_the_features.py</span>
          </div>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-matrix">CYBER</span>{" "}
            <span className="text-neon-cyan">LEARNING</span>{" "}
            <span className="text-glitch-purple">PLATFORM</span></h2>
          <p className="text-xl text-muted-foreground font-mono max-w-3xl mx-auto">
            Master cybersecurity through immersive learning experiences, 
            cutting-edge research, and competitive challenges
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="group bg-background-tertiary/50 border-primary/20 backdrop-blur-sm hover:bg-primary/5 transition-all duration-500 hover:shadow-neon hover:scale-105"
              >
                <CardContent className="p-6">
                  {/* Feature Image */}
                  <div className="relative mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-48 object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    />
                    <div className={`absolute inset-0 ${feature.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                    <div className="absolute top-4 left-4 p-3 bg-background/80 rounded-lg backdrop-blur-sm">
                      <IconComponent className="h-8 w-8 text-primary animate-pulse-neon" />
                    </div>
                  </div>

                  {/* Feature Content */}
                  <h3 className="font-orbitron text-xl font-bold text-matrix mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-mono mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Feature Details */}
                  <ul className="space-y-2 mb-6">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm font-mono text-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mr-3 animate-pulse" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono transition-all duration-300 hover:shadow-neon"
                  >
                    Explore {feature.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {academyFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="bg-background/50 border-primary/20 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300 hover:shadow-cyber group"
              >
                <CardContent className="p-6 text-center">
                  <IconComponent className="h-12 w-12 text-secondary mx-auto mb-4 group-hover:text-secondary-glow transition-colors duration-300 animate-pulse-neon" />
                  <h3 className="font-orbitron text-lg font-bold text-matrix mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-background-tertiary/50 border border-primary/30 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="font-orbitron text-2xl font-bold text-matrix mb-4">
              Ready to Begin Your Cyber Journey?
            </h3>
            <p className="text-muted-foreground font-mono mb-6 max-w-2xl mx-auto">
              Join thousands of cybersecurity professionals and enthusiasts 
              advancing their skills at Tanzania Cyber Academy
            </p>
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
      </div>
    </section>
  );
};

export default FeaturesSection;