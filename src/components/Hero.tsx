import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-teal-500/6 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow mx-auto relative">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* Text content */}
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <span className="text-sm text-brand-300 font-medium">Available for new projects</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-6 animate-fade-up">
              Hi, I'm{' '}
              <span className="gradient-text">Fredy Nurman Saleh</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '0.15s' }}>
              Software Engineer & Fullstack Web Developer. I analyze business requirements,
              design databases, build web applications, and deploy them to the cloud using
              modern frameworks.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-brand-500 text-white font-medium hover:bg-brand-600 transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/25"
              >
                Get in Touch
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white transition-all duration-200"
              >
                View My Work
                <ArrowDown size={16} />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 animate-fade-up" style={{ animationDelay: '0.45s' }}>
              <div className="flex items-center gap-4">
                <span className="text-xs text-slate-500 uppercase tracking-widest">Currently at</span>
                <div className="w-8 h-px bg-slate-700" />
                <div className="h-8 px-3 py-1 rounded-lg bg-white/[0.06] border border-white/[0.06] flex items-center">
                  <img src="/BKI_Utama.png" alt="BKI - Biro Klasifikasi Indonesia" className="h-6" />
                </div>
              </div>

              <div className="hidden sm:block w-px h-6 bg-slate-700" />

              <div className="flex items-center gap-3">
                {[
                  { icon: Github, href: 'https://github.com/fredyns', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/fredyns/', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:dm@fredyns.id', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-400 hover:text-brand-400 hover:border-brand-500/30 transition-all duration-200"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-brand-500/20 ring-offset-4 ring-offset-slate-950">
                <img
                  src="/pp.jpg"
                  alt="Fredy Nurman Saleh"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border border-brand-500/10 scale-110" />
              <div className="absolute inset-0 rounded-full border border-white/[0.04] scale-125" />
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-600 hover:text-slate-400 transition-colors">
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}
