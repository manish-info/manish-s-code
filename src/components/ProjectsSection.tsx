import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Cpu, Network, Globe, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    icon: Network,
    title: "Neural Social Twin for Misinformation Dynamics",
    status: "Ongoing",
    desc: "Developing a Neural Social Twin model to simulate and analyze how misinformation spreads across social networks.",
    role: "Epidemic-inspired models (SIR) combined with neural techniques for predictive analysis and mitigation strategies",
    tags: ["Python", "Deep Learning", "Graph Models", "SIR"],
    link: null as string | null,
  },
  {
    icon: Cpu,
    title: "Emotion-Aware Music Player",
    status: "Research",
    desc: "A smart music player that detects the listener's mood and plays matching tracks using machine learning.",
    role: "System architecture, design, and emotion detection integration using OpenCV and DeepFace",
    tags: ["Python", "OpenCV", "DeepFace", "ML"],
    link: null as string | null,
  },
  {
    icon: Globe,
    title: "Indus Propower Techno Industries – Website",
    status: "Completed",
    desc: "A well-working, fully responsive business website for a solar products company, deployed for live usage.",
    role: "Modern UI components, full design and development, deployment",
    tags: ["React.js", "Vite", "Tailwind CSS", "JavaScript"],
    link: "https://induspropower.com/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal direction="left">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-balance">Things I've been building</h2>
        </ScrollReveal>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, boxShadow: "0 16px 50px hsl(var(--neon) / 0.12)" }}
              className="glass-card p-6 md:p-8 group h-full flex flex-col cursor-default"
            >
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.15 }}
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                >
                  <project.icon size={20} className="text-primary" />
                </motion.div>
                <span
                  className="text-xs font-mono px-2.5 py-1 rounded-full"
                  style={{
                    color: "hsl(var(--neon))",
                    backgroundColor: "hsl(var(--neon) / 0.12)",
                  }}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{project.desc}</p>
              <p className="text-xs text-muted-foreground/70 mb-4">
                <span className="text-primary font-medium">My role:</span> {project.role}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline mb-4"
                >
                  Visit live site
                  <ExternalLink size={12} />
                </a>
              )}

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, ti) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + ti * 0.06 }}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal delay={0.3} direction="up">
          <div className="flex justify-center mt-10">
            <motion.a
              href="https://github.com/manish-info"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 24px hsl(var(--neon) / 0.25)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-glass-border text-foreground font-medium text-sm hover:border-primary/40 hover:text-primary transition-all duration-200"
            >
              <Github size={18} />
              View More on GitHub
              <ExternalLink size={14} className="text-muted-foreground" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
