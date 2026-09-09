import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Instagram, Send, User, MessageSquare } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:Manishraj.kumarlmc2017@gmail.com?subject=Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name} (${form.email})`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal direction="scale">
          <div className="text-center mb-12">
            <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Let's connect</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a conversation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <ScrollReveal delay={0.1} direction="left">
            <motion.div
              whileHover={{ boxShadow: "0 8px 40px hsl(var(--neon) / 0.1)" }}
              className="glass-card p-8 h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-5">
                  <motion.a
                    href="mailto:Manishraj.kumarlmc2017@gmail.com"
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail size={16} className="text-primary" />
                    </div>
                    <span>Manishraj.kumarlmc2017@gmail.com</span>
                  </motion.a>
                  <motion.a
                    href="tel:+917070378703"
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone size={16} className="text-primary" />
                    </div>
                    <span>+91 7070378703</span>
                  </motion.a>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-glass-border">
                <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider font-mono">Follow me</p>
                <div className="flex items-center gap-3">
                  {[
                    { icon: Github, href: "https://github.com/manish-info", label: "GitHub" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/manish-kumar-70074b267", label: "LinkedIn" },
                    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                    { icon: Mail, href: "mailto:Manishraj.kumarlmc2017@gmail.com", label: "Email" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ y: -4, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                      title={social.label}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={0.2} direction="right">
            <motion.form
              onSubmit={handleSubmit}
              whileHover={{ boxShadow: "0 8px 40px hsl(var(--neon) / 0.1)" }}
              className="glass-card p-8 h-full flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-6">Send a Message</h3>
              <div className="space-y-4 flex-1">
                <div>
                  <label className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1.5 block">Name</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary border border-glass-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1.5 block">Email</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary border border-glass-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1.5 block">Message</label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-3 top-3 text-muted-foreground" />
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Your message..."
                      rows={4}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary border border-glass-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                    />
                  </div>
                </div>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px hsl(var(--neon) / 0.25)" }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-colors"
              >
                Send Message
                <Send size={16} />
              </motion.button>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
