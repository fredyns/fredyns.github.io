const skills = [
  { name: 'Yii Framework', level: 90 },
  { name: 'Laravel', level: 85 },
  { name: 'React / Next.js', level: 80 },
  { name: 'MySQL / PostgreSQL', level: 88 },
  { name: 'Git / CI-CD', level: 82 },
  { name: 'Figma / UI Design', level: 70 },
  { name: 'Docker / Cloud', level: 75 },
  { name: 'TypeScript', level: 78 },
];

const techStack = [
  'PHP', 'JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3',
  'Yii', 'Laravel', 'React', 'Vue.js', 'Tailwind CSS',
  'MySQL', 'PostgreSQL', 'Redis', 'REST API', 'GraphQL',
  'Docker', 'AWS', 'GCP', 'Linux', 'Nginx', 'Git',
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-925/50">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-brand-400 uppercase tracking-widest mb-3">Technical Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">Skills & Technologies</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-lg font-semibold text-white mb-8">Core Competencies</h3>
            <div className="space-y-6">
              {skills.map(({ name, level }) => (
                <div key={name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-slate-300 font-medium">{name}</span>
                    <span className="text-sm text-slate-500">{level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brand-500 to-teal-400 rounded-full transition-all duration-1000"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-8">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-sm text-slate-300 hover:border-brand-500/30 hover:text-brand-400 transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
