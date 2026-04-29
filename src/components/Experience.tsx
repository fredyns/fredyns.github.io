import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Tech Startup',
    period: 'Apr 2015 - Mar 2018',
    description:
      'Developed and maintained responsive web interfaces. Collaborated with designers and backend teams to deliver seamless user experiences using modern JavaScript frameworks.',
  },
  {
    role: 'Software Engineer',
    company: 'Enterprise Solutions',
    period: 'Mar 2018 - Sep 2019',
    description:
      'Designed and implemented fullstack web applications. Led database architecture decisions and mentored junior developers on best practices.',
  },
  {
    role: 'DevOps Engineer',
    company: 'Cloud Services',
    period: 'Oct 2019 - Feb 2021',
    description:
      'Managed CI/CD pipelines, cloud infrastructure, and deployment automation. Improved system reliability and reduced deployment times by 60%.',
  },
  {
    role: 'Freelance Fullstack Developer',
    company: 'Self-Employed',
    period: 'Mar 2021 - Present',
    description:
      'Providing end-to-end web development services. Building custom applications for diverse clients, from startups to established businesses.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-925/50">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-brand-400 uppercase tracking-widest mb-3">Career Path</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">Work Experience</h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/[0.06] -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative md:w-1/2 ${
                  i % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
                }`}
              >
                <div className="hidden md:block absolute top-6 w-3 h-3 rounded-full bg-brand-500 border-4 border-slate-950"
                  style={{
                    [i % 2 === 0 ? 'right' : 'left']: '-7px',
                  }}
                />

                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase size={14} className="text-brand-400" />
                    <span className="text-sm text-brand-400">{exp.company}</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
