import { Github, Linkedin, Mail } from 'lucide-react';
import { NavLink } from './NavLink';

export function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <div className="bg-gray-900/40 backdrop-blur-xl rounded-3xl px-8 py-5 shadow-lg 
        border border-emerald-500/10 glow-effect">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">John Doe</h1>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="https://github.com" className="text-emerald-300/80 hover:text-emerald-300 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" className="text-emerald-300/80 hover:text-emerald-300 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:john@example.com" className="text-emerald-300/80 hover:text-emerald-300 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}