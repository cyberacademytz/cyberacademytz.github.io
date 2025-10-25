import Navigation from "@/components/Navigation";
import PDFGallery from "@/components/PDFGallery";
import Footer from "@/components/Footer";

const Writeups = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
              <span className="text-matrix animate-pulse-neon">CYBERSECURITY</span>{" "}
              <span className="text-neon-cyan">WRITEUPS</span>
            </h1>
            <p className="text-xl text-muted-foreground font-mono max-w-3xl mx-auto">
              Sharpen your skills with hands-on writeups and walkthroughs
            </p>
          </div>
             <PDFGallery />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Writeups;

