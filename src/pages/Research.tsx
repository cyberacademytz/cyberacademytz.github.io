import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Research = () => {
  const authorInfo = {
    name: "cyber@academy",
    link: "https://cse.udsm.ac.tz/view-staffs/staff-details/107",
  };

  const papers = [
    {
      title: "AI-Powered Threat Detection",
      category: "Machine Learning",
      abstract:
        "Developing machine learning models for real-time cybersecurity threat detection and response in African networks.",
      date: "2025-01-12",
    },
    {
      title: "Mobile Banking Security in East Africa",
      category: "Financial Security",
      abstract:
        "Comprehensive analysis of mobile payment security vulnerabilities and mitigation strategies for East African markets.",
      date: "2025-02-03",
    },
    {
      title: "IoT Device Security Framework",
      category: "IoT Security",
      abstract:
        "Proposing a security framework for IoT deployments in smart city initiatives across Tanzania.",
      date: "2025-03-01",
    },
    {
      title: "Blockchain for Secure Voting Systems",
      category: "Blockchain",
      abstract:
        "Implementing blockchain technology for transparent and secure electoral systems in developing nations.",
      date: "2025-03-18",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
              <span className="text-matrix animate-pulse-neon">CYBER</span>{" "}
              <span className="text-neon-cyan">PROJECTS</span>
            </h1>
            <p className="text-xl text-muted-foreground font-mono max-w-3xl mx-auto">
              Cutting-edge cybersecurity research and projects
              led by <span className="text-neon-cyan">cyber@academy</span>
            </p>
          </div>

          {/* Papers */}
          <div className="space-y-8">
            {papers.map((paper, index) => (
              <div
                key={index}
                className="bg-background-secondary border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all duration-300 group hover:shadow-neon"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-xs font-mono">
                    {paper.category}
                  </span>
                  {paper.date && (
                    <span className="text-muted-foreground font-mono text-sm">
                      {paper.date}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-orbitron font-bold text-matrix mb-3 group-hover:text-neon-cyan transition-colors">
                  {paper.title}
                </h3>

                {/* Author Section */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-sm text-muted-foreground">
                    Author:
                  </span>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="text-neon-cyan border-neon-cyan hover:bg-neon-cyan/10 font-mono text-xs"
                  >
                    <a
                      href={authorInfo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      {authorInfo.name}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>

                <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                  {paper.abstract}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
