import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github, Terminal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">

          {/* Logo & About */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-3">
              <Terminal className="h-8 w-8 text-matrix" />
              <div className="font-orbitron">
                <h1 className="text-xl font-bold flex space-x-0.5">
                  <span className="text-[#1eb53a]">TA</span>
                  <span className="text-[#fcd116]">N</span>
                  <span className="text-[#000000] drop-shadow-[0_0_2px_white]">ZA</span>
                  <span className="text-[#fcd116]">N</span>
                  <span className="text-[#00a3dd]">IA</span>
                </h1>
                <span className="text-sm text-neon-cyan">CYBER ACADEMY</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-xs">
              Empowering cybersecurity passion with hands-on learning, labs, and research.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-foreground font-semibold">Quick Links</h4>
            <Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Home</Link>
            <Link to="/courses" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Courses</Link>
            <Link to="/labs" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Labs</Link>
            <Link to="/research" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Research</Link>
            <Link to="/Writeups" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Writeups</Link>
          </div>

          {/* Connect / Social */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-foreground font-semibold">Connect with us</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/cyberacademytz" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

        </div>

        {/* ⚠️ Disclaimer Section */}
        <div className="mt-10 text-center">
          <p className="text-red-500 text-sm font-semibold">
            ⚠️ DISCLAIMER: All content on this platform is provided strictly for educational and ethical purposes only.  
            Any misuse of information and or knowledge gained for unauthorized activities or law violations is strictly prohibited.  
            The Tanzania CyberSecurity Academy and its affiliates are not responsible for any illegal use of the knowledge gained. 🚫
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-primary/20 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Tanzania CyberSecurity Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
