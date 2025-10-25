// components/PDFGallery.tsx
'use client';

import { useState } from 'react';
import PDFCard from './PDFCard';
import PDFModal from './PDFModal';

const pdfData = [
  {
    id: 1,
    title: "HTB - Cybernetics",
    description: "Complete walkthrough of HackTheBox Cybernetics machine with privilege escalation techniques",
    category: "CTF",
    difficulty: "Medium",
    date: "2024-10-15",
    pdfUrl: "https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf",
    tags: ["Web Exploitation", "Privilege Escalation", "Linux"],
    thumbnail: "/thumbnails/cybernetics.jpg"
  },
  {
    id: 2,
    title: "SQL Injection Mastery",
    description: "Advanced SQL injection techniques with real-world examples and prevention methods",
    category: "Web Security",
    difficulty: "Hard",
    date: "2024-10-10",
    pdfUrl: "https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf",
    tags: ["SQLi", "Database", "Web App"],
    thumbnail: "/thumbnails/sqli.jpg"
  },
  {
    id: 3,
    title: "Buffer Overflow Exploitation",
    description: "Step-by-step guide to buffer overflow attacks on Windows and Linux systems",
    category: "Binary Exploitation",
    difficulty: "Hard",
    date: "2024-10-05",
    pdfUrl: "https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf",
    tags: ["PWN", "Assembly", "Memory Corruption"],
    thumbnail: "/thumbnails/bof.jpg"
  },
  {
    id: 4,
    title: "Web App Penetration Testing",
    description: "Comprehensive web application penetration testing methodology and tools",
    category: "Web Security",
    difficulty: "Medium",
    date: "2024-10-01",
    pdfUrl: "https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf",
    tags: ["OWASP", "Burp Suite", "Web Security"],
    thumbnail: "/thumbnails/webapp.jpg"
  },
  {
    id: 5,
    title: "Network Enumeration Guide",
    description: "Complete network enumeration techniques using Nmap and other tools",
    category: "Network Security",
    difficulty: "Easy",
    date: "2024-09-28",
    pdfUrl: "https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf",
    tags: ["Nmap", "Network", "Reconnaissance"],
    thumbnail: "/thumbnails/network.jpg"
  },
  {
    id: 6,
    title: "Cryptography Challenges",
    description: "Solving various cryptography challenges from CTF competitions",
    category: "Cryptography",
    difficulty: "Medium",
    date: "2024-09-25",
    pdfUrl: "https://raw.githubusercontent.com/cyberacademytz/Writeups/main/wifi_h%40cking.pdfn",
    tags: ["RSA", "AES", "Encryption"],
    thumbnail: "/thumbnails/crypto.jpg"
  },
  {
  id: 7,
  title: "Exploiting the Mind - Psychology in Cybersecurity",
  description: "Psychology in Cybersecurity",
  category: "Your Category",
  difficulty: "Easy",
  date: "2024-10-20",
  pdfUrl: "https://raw.githubusercontent.com/cyberacademytz/Writeups/main/Exploiting%20the%20Mind_%20Understanding%20the%20Role%20of%20Human%20Psychology%20in%20Cybersecurity.pdf",
  tags: ["tag1", "tag2", "tag3"],
  thumbnail: "/thumbnails/your-image.jpg"
},
{
    id: 8,
    title: "Zero cost Web hosting in github",
    description: "Solving various cryptography challenges from CTF competitions",
    category: "Cryptography",
    difficulty: "Medium",
    date: "2024-09-25",
    pdfUrl: "https://raw.githubusercontent.com/cyberacademytz/Writeups/main/0Tsh%2C%20Cost%20of%20%20Website%20Hosting..pdf",
    tags: ["RSA", "AES", "Encryption"],
    thumbnail: "/thumbnails/crypto.jpg"
  }
];

const categories = ["All", "CTF", "Web Security", "Binary Exploitation", "Network Security", "Cryptography"];
const difficulties = ["All", "Easy", "Medium", "Hard"];

const PDFGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPDF, setSelectedPDF] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredPDFs = pdfData.filter(pdf => {
    const matchesCategory = selectedCategory === "All" || pdf.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "All" || pdf.difficulty === selectedDifficulty;
    const matchesSearch = pdf.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         pdf.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pdf.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const openModal = (pdf: any) => {
    setSelectedPDF(pdf);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPDF(null);
  };

  return (
    <div className="relative">
      {/* Filters Section */}
      <div className="mb-12">
        <div className="flex items-center mb-8">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-green-400 font-mono text-sm uppercase tracking-wider">
              Writeups Library
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent ml-4"></div>
        </div>

        {/* Search and Filters */}
        <div className="bg-black/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-green-400 font-mono">$</span>
              </div>
              <input
                type="text"
                placeholder="search_writeups..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-4 py-3 bg-black/50 border border-green-500/30 rounded-lg text-green-400 font-mono placeholder-green-400/50 focus:outline-none focus:border-green-400 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-cyan-400 font-mono focus:outline-none focus:border-cyan-400 transition-colors appearance-none"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-black text-cyan-400">
                    {category}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-cyan-400">▼</span>
              </div>
            </div>

            {/* Difficulty Filter */}
            <div className="relative">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg text-blue-400 font-mono focus:outline-none focus:border-blue-400 transition-colors appearance-none"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty} className="bg-black text-blue-400">
                    {difficulty}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-blue-400">▼</span>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 flex justify-between items-center">
            <span className="text-gray-400 font-mono text-sm">
              Found {filteredPDFs.length} writeups
            </span>
            <div className="flex space-x-2">
              {selectedCategory !== "All" && (
                <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded text-green-400 text-xs font-mono">
                  {selectedCategory}
                </span>
              )}
              {selectedDifficulty !== "All" && (
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-blue-400 text-xs font-mono">
                  {selectedDifficulty}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* PDF Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredPDFs.map((pdf) => (
          <PDFCard 
            key={pdf.id} 
            pdf={pdf} 
            onOpen={() => openModal(pdf)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredPDFs.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-500 font-mono text-lg mb-4">
            No writeups found matching your criteria
          </div>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSelectedDifficulty("All");
              setSearchTerm("");
            }}
            className="px-6 py-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 font-mono hover:bg-green-500/30 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* PDF Modal */}
      {isModalOpen && selectedPDF && (
        <PDFModal 
          pdf={selectedPDF} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default PDFGallery;