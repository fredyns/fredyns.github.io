import { Globe, Smartphone, PenTool, Mail, LayoutGrid as Layout, Palette } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Building responsive, high-performance web applications using modern frameworks like Yii, Laravel, and React.',
  },
  {
    icon: PenTool,
    title: 'Technical Writing',
    description: 'Creating clear technical documentation, API guides, and developer resources for complex systems.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications with responsive design and native-like performance.',
  },
  {
    icon: Mail,
    title: 'Email Development',
    description: 'Crafting pixel-perfect, responsive email templates that render beautifully across all clients.',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Designing visual assets, branding materials, and creative graphics that communicate your message.',
  },
  {
    icon: Layout,
    title: 'Web Design',
    description: 'Creating intuitive, user-centered designs with Figma -- from wireframes to polished prototypes.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-brand-400 uppercase tracking-widest mb-3">What I Do</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">Services I Offer</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From concept to deployment, I provide end-to-end solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="glass-card p-7 hover-lift group">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-5 group-hover:bg-brand-500/20 transition-colors duration-200">
                <Icon className="text-brand-400" size={22} />
              </div>
              <h3 className="text-white font-semibold mb-3">{title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
