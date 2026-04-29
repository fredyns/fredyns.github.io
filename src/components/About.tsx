import { Code2, Database, Cloud, Layers } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Fullstack Dev', desc: 'Frontend & Backend' },
  { icon: Database, label: 'Database Design', desc: 'Schema & Optimization' },
  { icon: Cloud, label: 'Cloud Deploy', desc: 'AWS, GCP & More' },
  { icon: Layers, label: 'Architecture', desc: 'System Design' },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-medium text-brand-400 uppercase tracking-widest mb-3">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6 leading-tight">
            Building digital solutions that make a difference
          </h2>
          <p className="text-slate-400 leading-relaxed mb-5">
            I'm Fredy Nurman Saleh, a passionate Software Engineer and Fullstack Web Developer.
            I specialize in analyzing business requirements, designing robust database architectures,
            and developing scalable web applications that solve real-world problems.
          </p>
          <p className="text-slate-400 leading-relaxed mb-10">
            Using modern programming frameworks, I build what your business needs -- from concept
            to cloud deployment. My approach combines clean code practices with a deep understanding
            of user experience and business goals.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="glass-card p-4 hover-lift group">
                <Icon className="text-brand-400 mb-3 group-hover:scale-110 transition-transform duration-200" size={22} />
                <p className="text-white font-medium text-sm">{label}</p>
                <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
