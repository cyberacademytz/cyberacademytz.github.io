import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Labs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
              <span className="text-matrix animate-pulse-neon">VIRTUAL</span>{" "}
              <span className="text-neon-cyan">LABS</span>
            </h1>
            <p className="text-xl text-muted-foreground font-mono max-w-3xl mx-auto">
              Practice cybersecurity skills in isolated, safe environments
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Penetration Testing Lab",
                status: "Online",
                tools: ["Kali Linux", "Metasploit", "Nmap", "Burp Suite"],
                description: "Full-featured penetration testing environment with vulnerable machines"
              },
              {
                title: "Malware Analysis Sandbox",
                status: "Online", 
                tools: ["REMnux", "YARA", "Volatility", "Ghidra"],
                description: "Isolated environment for analyzing malicious software safely"
              },
              {
                title: "Network Security Lab",
                status: "Maintenance",
                tools: ["Wireshark", "pfSense", "Snort", "OSSEC"],
                description: "Network monitoring and intrusion detection practice environment"
              },
              {
                title: "Web Application Testing",
                status: "Online",
                tools: ["OWASP ZAP", "SQLMap", "Nikto", "Gobuster"],
                description: "Test web applications for common vulnerabilities and security flaws"
              }
            ].map((lab, index) => (
              <div
                key={index}
                className="bg-background-secondary border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all duration-300 group hover:shadow-neon"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-orbitron font-bold text-matrix group-hover:text-neon-cyan transition-colors">
                    {lab.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-mono ${
                    lab.status === 'Online' ? 'bg-green-500/20 text-green-400 animate-pulse-neon' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {lab.status}
                  </span>
                </div>
                <p className="text-muted-foreground font-mono text-sm mb-4">
                  {lab.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {lab.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-xs font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Labs;