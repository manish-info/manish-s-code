import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    school: "Greater Noida Institute of Technology, Greater Noida",
    year: "2022 – 2027",
    desc: "Focused on system design, machine learning, and algorithmic problem-solving.",
  },
  {
    degree: "Senior Secondary",
    school: "Holy Mission Senior Secondary School, Bihar",
    year: "2020 – 2022",
    desc: "Science stream with Mathematics and Computer Science.",
  },
  {
    degree: "Secondary",
    school: "Lohia Nagar Mount Carmel High School, Bihar",
    year: "2019 – 2020",
    desc: "Completed with distinction.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <ScrollReveal direction="right">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Academic journey</h2>
        </ScrollReveal>

        <div className="relative">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-5 top-0 w-px bg-gradient-to-b from-primary/50 via-neon-blue/30 to-transparent"
          />

          <div className="space-y-8">
            {education.map((item, i) => (
              <ScrollReveal key={item.degree} delay={0.2 + i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative pl-14"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 200 }}
                    className="absolute left-0 top-1 w-10 h-10 rounded-full bg-primary/10 border border-glass-border flex items-center justify-center"
                  >
                    <GraduationCap size={18} className="text-primary" />
                  </motion.div>
                  <p className="font-mono text-xs text-primary mb-1">{item.year}</p>
                  <h3 className="font-semibold mb-1">{item.degree}</h3>
                  <p className="text-sm text-foreground/80 mb-1">{item.school}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
