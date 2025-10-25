import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
              <span className="text-matrix animate-pulse-neon">CYBER</span>{" "}
              <span className="text-neon-cyan">COURSES</span>
            </h1>
            <p className="text-xl text-muted-foreground font-mono max-w-3xl mx-auto">
              Master cybersecurity through structured learning paths and hands-on training
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ethical Hacking",
                level: "Beginner",
                duration: "8 weeks",
                description: "Learn the fundamentals of ethical hacking and penetration testing"
              },
              {
                title: "Network Security",
                level: "Intermediate", 
                duration: "6 weeks",
                description: "Deep dive into network protocols and security implementations"
              },
              {
                title: "Malware Analysis",
                level: "Advanced",
                duration: "10 weeks", 
                description: "Reverse engineering and analyzing malicious software"
              },
              {
                title: "Web Application Security",
                level: "Intermediate",
                duration: "7 weeks",
                description: "Secure coding practices and web vulnerability assessment"
              },
              {
                title: "Digital Forensics",
                level: "Advanced",
                duration: "12 weeks",
                description: "Investigate cyber incidents and collect digital evidence"
              },
              {
                title: "Cryptography",
                level: "Intermediate",
                duration: "8 weeks",
                description: "Understanding encryption algorithms and cryptographic protocols"
              }
            ].map((course, index) => (
              <div
                key={index}
                className="bg-background-secondary border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all duration-300 group hover:shadow-neon"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono ${
                    course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {course.level}
                  </span>
                  <span className="text-neon-cyan font-mono text-sm">{course.duration}</span>
                </div>
                <h3 className="text-xl font-orbitron font-bold text-matrix mb-3 group-hover:text-neon-cyan transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground font-mono text-sm">
                  {course.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Courses;