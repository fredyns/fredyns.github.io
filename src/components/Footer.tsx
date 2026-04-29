import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 sm:px-8 lg:px-16 py-8">
      <div className="container-narrow mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1 text-sm text-slate-500">
          <span>&copy; {new Date().getFullYear()} Fredy Nurman Saleh. Built with</span>
          <Heart size={14} className="text-brand-500 fill-brand-500" />
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: 'https://github.com/fredyns', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:fredy@fredyns.id', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-brand-400 transition-colors"
              aria-label={label}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
