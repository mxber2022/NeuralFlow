import { Crown, ThumbsUp } from 'lucide-react';
import { type Rapper } from '../types';

interface RapperCardProps {
  rapper: Rapper;
  isSelected?: boolean;
  teamColor?: 'indigo' | 'cyan';
  onSelect?: () => void;
  onRemove?: () => void;
  showScore?: boolean;
}

export function RapperCard({ 
  rapper, 
  isSelected, 
  teamColor, 
  onSelect, 
  onRemove,
  showScore 
}: RapperCardProps) {
  const baseClasses = `
    p-6 rounded-xl transition-all transform
    hover:scale-[1.02] glass-card
    cursor-pointer relative overflow-hidden
  `;

  const getBackgroundClass = () => {
    if (teamColor === 'indigo') return 'bg-violet-500/5';
    if (teamColor === 'cyan') return 'bg-sky-500/5';
    return isSelected ? 'bg-white/5' : 'glass-card';
  };

  return (
    <div 
      className={`${baseClasses} ${getBackgroundClass()}`}
      onClick={!isSelected ? onSelect : undefined}
      role={onSelect ? 'button' : undefined}
    >
      <div className="relative inline-block group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400/20 to-violet-400/20 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500" />
        <img 
          src={rapper.avatar} 
          alt={rapper.name}
          className="relative w-24 h-24 rounded-full border-2 border-white/10 group-hover:border-white/20 transition-colors duration-200 object-cover"
        />
        {showScore && rapper.score > 0 && (
          <Crown className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400 animate-bounce" />
        )}
      </div>
      
      <h3 className="text-base font-medium mt-4 text-white">
        {rapper.name}
      </h3>
      
      {!showScore && (
        <p className="text-sm text-white/70 mt-2">{rapper.description}</p>
      )}
      
      {showScore && (
        <div className="flex items-center justify-center gap-2 mt-2">
          <ThumbsUp className="w-4 h-4 text-sky-400" />
          <span className="text-sm font-medium text-white/90">{rapper.score}</span>
        </div>
      )}
    </div>
  );
}