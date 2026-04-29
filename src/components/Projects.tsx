import { Ship, FileCheck, Container, LayoutDashboard, ExternalLink } from 'lucide-react';

const projects = [
  {
    icon: Ship,
    title: 'Shipbuilding S-Curve',
    category: 'Maritime Monitoring',
    description:
      'Aplikasi monitoring pembangunan kapal dengan laporan harian, mingguan, dan bulanan. Dilengkapi visualisasi kurva S untuk memantau progres pembangunan secara real-time terhadap target rencana.',
    tags: ['Monitoring', 'Reporting', 'S-Curve', 'Dashboard'],
    color: 'brand',
  },
  {
    icon: FileCheck,
    title: 'VGM Certificate',
    category: 'Digital Certification',
    description:
      'Sistem penerbitan sertifikat VGM (Verified Gross Mass) digital yang terintegrasi dengan sistem pihak ketiga. Memastikan kepatuhan regulasi SOLAS untuk pengiriman peti kemas secara efisien.',
    tags: ['API Integration', 'Digital Certificate', 'SOLAS', 'Compliance'],
    color: 'teal',
  },
  {
    icon: Container,
    title: 'CSC Register',
    category: 'Container Management',
    description:
      'Database register peti kemas dengan fitur analisa duplikasi data, deteksi typo nomor kontainer secara otomatis, dan integrasi langsung dengan BoxTech global container register.',
    tags: ['Database', 'BoxTech', 'Data Validation', 'Container Registry'],
    color: 'amber',
  },
  {
    icon: LayoutDashboard,
    title: 'Stowage Plan',
    category: 'Naval Architecture',
    description:
      'Aplikasi pembuatan stowage plan kapal secara real-time dengan kalkulasi intact stability otomatis. Membantu petugas cargo memastikan distribusi muatan aman sesuai standar keselamatan kapal.',
    tags: ['Real-time', 'Stability Calculation', 'Cargo Planning', 'Maritime'],
    color: 'rose',
  },
];

const colorMap: Record<string, { icon: string; tag: string; dot: string }> = {
  brand: {
    icon: 'text-brand-400 bg-brand-500/10 border-brand-500/20',
    tag: 'bg-brand-500/10 text-brand-300 border-brand-500/20',
    dot: 'bg-brand-500',
  },
  teal: {
    icon: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    tag: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
    dot: 'bg-teal-500',
  },
  amber: {
    icon: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    tag: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    dot: 'bg-amber-500',
  },
  rose: {
    icon: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    tag: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
    dot: 'bg-rose-500',
  },
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-brand-400 uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">Project Experience</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Proyek-proyek unggulan di bidang maritim dan logistik yang telah berhasil dibangun dan diimplementasikan.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            const colors = colorMap[project.color];
            return (
              <div key={i} className="glass-card p-7 hover-lift group flex flex-col gap-5">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${colors.icon}`}>
                    <Icon size={22} />
                  </div>
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wider pt-1">
                    {project.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-brand-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-full border font-medium ${colors.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
