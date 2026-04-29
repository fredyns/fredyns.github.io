import { Phone, Mail, MapPin, ScanLine } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '(+62) 811 2644 120' },
  { icon: Mail, label: 'Email', value: 'dm@fredyns.id' },
  { icon: MapPin, label: 'Location', value: 'Jakarta, Indonesia' },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-brand-400 uppercase tracking-widest mb-3">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Scan the QR code to save my contact info instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-500/10 flex items-center justify-center shrink-0">
                  <Icon className="text-brand-400" size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-slate-200">{value}</p>
                </div>
              </div>
            ))}

            <div className="glass-card p-6 mt-8">
              <p className="text-sm text-slate-400 leading-relaxed">
                I'm currently available for freelance work and open to discussing new projects.
                Feel free to reach out through any of the contact methods listed or scan the QR code
                to add me directly to your contacts.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="glass-card p-6 sm:p-8 inline-block">
              <div className="bg-white rounded-xl p-4 sm:p-6">
                <img
                  src="/vCard_Fredy.png"
                  alt="Scan to save contact - vCard QR Code"
                  className="w-56 h-56 sm:w-72 sm:h-72"
                />
              </div>
              <div className="flex items-center justify-center gap-2 mt-5 text-slate-400">
                <ScanLine size={16} className="text-brand-400" />
                <span className="text-sm">Scan to save my contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}