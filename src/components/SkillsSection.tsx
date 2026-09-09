import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "C", level: 75 },
      { name: "JavaScript", level: 78 },
      { name: "HTML / CSS", level: 88 },
    ],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      { name: "React.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Node.js", level: 70 },
      { name: "Git / GitHub", level: 80 },
      { name: "VS Code", level: 90 },
    ],
  },
  {
    title: "Databases & Concepts",
    skills: [
      { name: "MySQL", level: 78 },
      { name: "MongoDB (Basic)", level: 60 },
      { name: "DSA", level: 80 },
      { name: "OOPs", level: 85 },
      { name: "DBMS", level: 78 },
      { name: "Computer Networks", level: 72 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="mb-4 last:mb-0">
    <div className="flex justify-between mb-1.5">
      <span className="text-sm font-medium">{name}</span>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
        className="text-xs text-muted-foreground font-mono"
      >
        {level}%
      </motion.span>
    </div>
    <div className="h-2 rounded-full bg-secondary overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        className="h-full rounded-full relative overflow-hidden"
        style={{
          background: `linear-gradient(90deg, hsl(var(--neon)), hsl(var(--neon-blue)))`,
        }}
      >
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2, delay: delay + 0.8, repeat: 0, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </motion.div>
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal direction="right">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Tools & technologies I work with</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <ScrollReveal key={cat.title} delay={ci * 0.12} direction={ci === 0 ? "left" : ci === 2 ? "right" : "up"}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 8px 30px hsl(var(--neon) / 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card p-6 h-full"
              >
                <h3 className="font-semibold text-sm text-primary mb-5 uppercase tracking-wider">{cat.title}</h3>
                {cat.skills.map((skill, si) => (
                  <SkillBar key={skill.name} {...skill} delay={0.2 + ci * 0.15 + si * 0.1} />
                ))}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
