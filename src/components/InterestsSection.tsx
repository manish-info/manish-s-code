import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Wrench, Eye, Gamepad2, Heart } from "lucide-react";

const interests = [
  { icon: Wrench, label: "System Troubleshooting" },
  { icon: Heart, label: "Emotion-Aware AI" },
  { icon: Eye, label: "Visual Modeling" },
  { icon: Gamepad2, label: "Gaming" },
];

const InterestsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal direction="scale">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">Interests</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">What excites me</h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {interests.map((item, i) => (
            <ScrollReveal key={item.label} delay={0.1 + i * 0.1} direction="scale">
              <motion.div
                whileHover={{ y: -8, scale: 1.04, boxShadow: "0 12px 40px hsl(var(--neon) / 0.15)" }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="glass-card p-6 text-center group cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors"
                >
                  <item.icon size={22} className="text-primary" />
                </motion.div>
                <p className="text-sm font-medium">{item.label}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
