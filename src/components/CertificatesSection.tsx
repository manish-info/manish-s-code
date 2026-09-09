import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "C Programming",
    issuer: "E&ICT Academy, IIT Kanpur",
    link: null as string | null,
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    link: null as string | null,
  },
  {
    title: "Corporate Foundation Expert Program",
    issuer: "Professional Certification",
    link: null as string | null,
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal direction="left">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">Certificates</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Learning, verified</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={0.1 + i * 0.12} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 12px 40px hsl(var(--neon) / 0.12)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card p-6 h-full flex flex-col group"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                >
                  <Award size={20} className="text-primary" />
                </motion.div>
                <h3 className="font-semibold mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
                  >
                    Verify credential
                    <ExternalLink size={12} />
                  </a>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
