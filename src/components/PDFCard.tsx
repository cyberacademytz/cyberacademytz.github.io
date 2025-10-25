// components/PDFCard.tsx
'use client';

const PDFCard = ({ pdf, onOpen }: { pdf: any; onOpen: () => void }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 border-green-400';
      case 'Medium': return 'text-yellow-400 border-yellow-400';
      case 'Hard': return 'text-red-400 border-red-400';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'CTF': return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
      case 'Web Security': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Binary Exploitation': return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'Network Security': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'Cryptography': return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <div 
      className="group bg-black/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/10"
      onClick={onOpen}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white font-mono group-hover:text-green-400 transition-colors line-clamp-2">
            {pdf.title}
          </h3>
          <div className="flex items-center space-x-2 mt-2">
            <span className={`px-2 py-1 rounded text-xs font-mono border ${getCategoryColor(pdf.category)}`}>
              {pdf.category}
            </span>
            <span className={`px-2 py-1 rounded text-xs font-mono border ${getDifficultyColor(pdf.difficulty)}`}>
              {pdf.difficulty}
            </span>
          </div>
        </div>
        <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
          <span className="text-green-400 text-lg">▶</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm font-mono mb-4 line-clamp-3 leading-relaxed">
        {pdf.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {pdf.tags.slice(0, 3).map((tag: string, index: number) => (
          <span 
            key={index}
            className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300 font-mono"
          >
            #{tag}
          </span>
        ))}
        {pdf.tags.length > 3 && (
          <span className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-500 font-mono">
            +{pdf.tags.length - 3}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
        <span className="text-gray-500 text-xs font-mono">
          {new Date(pdf.date).toLocaleDateString()}
        </span>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-xs font-mono">Available</span>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-green-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </div>
  );
};

export default PDFCard;