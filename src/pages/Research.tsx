import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Define the type for a research paper
type Paper = {
  title: string;
  authors: string[];
  category: string;
  abstract: string;
  date?: string; // optional
};

const Research = () => {
  // Your papers array, strongly typed
  const papers: Paper[] = [
    {
      title: "AI-Powered Threat Detection",
      authors: ["Authors", "Anonymous"],
      category: "Machine Learning",
      abstract:
        "Developing machine learning models for real-time cybersecurity threat detection and response in African networks.",
      date: "2025-01-12",
    },
    {
      title: "Mobile Banking Security in East Africa",
      authors: ["Authors", "Anonymous"],
      category: "Financial Security",
      abstract:
        "Comprehensive analysis of mobile payment security vulnerabilities and mitigation strategies for East African markets.",
      date: "2025-02-03",
    },
    {
      title: "IoT Device Security Framework",
      authors: ["Authors", "Anonymous"],
      category: "IoT Security",
      abstract:
        "Proposing a security framework for IoT deployments in smart city initiatives across Tanzania.",
    },
    {
      title: "Blockchain for Secure Voting Systems",
      authors: ["Authors", "Anonymous"], // ✅ fixed typo here
      category: "Blockchain",
      abstract:
        "Implementing blockchain technology for transparent and secure electoral systems in developing nations.",
      date: "2025-03-18",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
              <span className="text-matrix animate-pulse-neon">CYBER</span>{" "}
              <span className="text-neon-cyan">RESEARCH</span>
            </h1>
            <p className="text-xl text-muted-foreground font-mono max-w-3xl mx-auto">
              Cutting-edge cybersecurity research and collaborative projects
            </p>
          </div>

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
                  {paper.date && ( // ✅ only show if date exists
                    <span className="text-muted-foreground font-mono text-sm">
                      {paper.date}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-orbitron font-bold text-matrix mb-2 group-hover:text-neon-cyan transition-colors">
                  {paper.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {paper.authors.map((author, authorIndex) => (
                    <span
                      key={authorIndex}
                      className="text-neon-cyan font-mono text-sm"
                    >
                      {author}
                      {authorIndex < paper.authors.length - 1 ? "," : ""}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground font-mono text-sm">
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
