import { useState } from "react";
import { Menu, X, Terminal, Shield, BookOpen, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: Terminal },
    { name: "Courses", href: "/courses", icon: BookOpen },
    { name: "Labs", href: "/labs", icon: Shield },
    { name: "Research", href: "/research", icon: Users },
    { name: "Writeups", href: "/Writeups", icon: Award },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-primary/20 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center space-x-2 text-foreground font-mono"
              >
                <IconComponent className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary p-2 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background-secondary border-t border-primary/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-3 px-3 py-2 text-foreground font-mono"
                  onClick={() => setIsOpen(false)}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
