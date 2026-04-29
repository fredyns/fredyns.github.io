import { ArrowUpRight, Clock } from 'lucide-react';

const posts = [
  {
    title: 'How to Become a Frontend Developer',
    excerpt: 'A comprehensive guide to starting your journey as a frontend developer, covering essential skills and learning resources.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'Jan 2024',
    readTime: '5 min',
  },
  {
    title: 'My Personal Productivity System',
    excerpt: 'Discover the tools, habits, and workflows that keep me productive as a freelance developer working with multiple clients.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'Dec 2023',
    readTime: '4 min',
  },
  {
    title: 'Building Scalable Web Applications',
    excerpt: 'Key principles and patterns for building web apps that can grow with your business, from architecture to deployment.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'Nov 2023',
    readTime: '6 min',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding bg-slate-925/50">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-brand-400 uppercase tracking-widest mb-3">Latest Insights</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">From the Blog</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.title} className="glass-card overflow-hidden hover-lift group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-brand-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm text-brand-400 font-medium group-hover:gap-2 transition-all">
                  Read More <ArrowUpRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
