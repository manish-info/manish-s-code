import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Code2, Brain, Users } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Developer", desc: "Building with Java, Python, React.js, Node.js and Tailwind CSS — clean, scalable code." },
  { icon: Brain, title: "ML Enthusiast", desc: "Working on neural social twins, misinformation dynamics, and emotion-aware AI systems." },
  { icon: Users, title: "Team Player", desc: "Experienced in collaborative projects with strong leadership and communication skills." },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal direction="left">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            A curious mind shaping the future with technology
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15} direction="right">
          <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            I'm a B.Tech Computer Science Engineering student at Greater Noida Institute of Technology (2022–2027),
            with a deep interest in system design, machine learning, and algorithmic problem-solving. I've shipped a
            live business website and I'm currently researching how misinformation spreads through social networks.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.title} delay={0.1 + i * 0.12} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 12px 40px hsl(var(--neon) / 0.12)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card p-6 group cursor-default h-full"
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                >
                  <item.icon size={20} className="text-primary" />
                </motion.div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
