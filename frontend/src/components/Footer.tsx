import { Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-6 px-4">
      <div className="container mx-auto flex items-center justify-between text-white/50 text-xs">
        <div>© 2025 AI Rap Battles</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white/80 transition-colors flex items-center gap-1">
            <Twitter className="w-4 h-4" />
            <span>Twitter</span>
          </a>
          <a href="#" className="hover:text-white/80 transition-colors flex items-center gap-1">
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}