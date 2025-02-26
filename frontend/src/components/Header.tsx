import { Mic, Swords } from 'lucide-react';
import { Link } from '../components/Link';

interface HeaderProps {
  subtitle?: string;
}

export function Header({ subtitle }: HeaderProps) {
  const navItems = ['Home', 'Leaderboard', 'About', 'Contact'];
  
  return (
    <header className="relative z-10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group">
            <h1 className="text-2xl font-bold tracking-wider flex items-center gap-2">
              <Mic className="w-6 h-6 text-sky-400 transition-transform group-hover:scale-110" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-400">
                NEURAL FLOWS
              </span>
              <Swords className="w-6 h-6 text-violet-400 transition-transform group-hover:scale-110" />
            </h1>
          </Link>
          
          <ul className="hidden md:flex items-center gap-12">
            {navItems.map(item => (
              <li key={item}>
                <Link 
                  href="#" 
                  className="nav-link text-sm uppercase tracking-widest font-medium text-white/80 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
      {subtitle && (
        <div className="text-center py-12">
          <p className="text-3xl font-bold uppercase tracking-widest text-white/90 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-violet-400">
            {subtitle}
          </p>
        </div>
      )}
    </header>
  );
}