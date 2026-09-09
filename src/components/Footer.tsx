import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-glass-border py-8 px-6"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Manish Kumar. Built with passion.
        </p>
        <div className="flex items-center gap-3">
          {[
            { href: "mailto:Manishraj.kumarlmc2017@gmail.com", icon: Mail, label: "Email" },
            { href: "https://github.com/manish-info", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/manish-kumar-70074b267", icon: Linkedin, label: "LinkedIn" },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ y: -3, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={link.label}
            >
              <link.icon size={16} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
