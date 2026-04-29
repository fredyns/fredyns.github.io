import { FolderGit2, Award, Users, Bug } from 'lucide-react';

const stats = [
  { icon: FolderGit2, value: '12+', label: 'Projects Completed' },
  { icon: Award, value: '3', label: 'Awards Won' },
  { icon: Users, value: '8+', label: 'Happy Clients' },
  { icon: Bug, value: '99+', label: 'Bugs Squashed' },
];

export default function Stats() {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="glass-card p-6 text-center hover-lift group">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-500/20 transition-colors">
                <Icon className="text-brand-400" size={22} />
              </div>
              <p className="text-3xl font-display font-bold text-white mb-1">{value}</p>
              <p className="text-sm text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
