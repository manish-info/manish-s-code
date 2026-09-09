import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";
import manishPhoto from "@/assets/manish-photo.jpeg";

const HeroSection = ({ visitorName }: { visitorName?: string }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo - Left side, blended into background */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 relative"
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-[22rem] md:w-[22rem] md:h-[26rem] lg:w-[24rem] lg:h-[30rem]">
              <img
                src={manishPhoto}
                alt="Manish kumar"
                className="w-full h-full object-cover object-top rounded-2xl border-2 border-glass-border shadow-2xl"
              />
              {/* Decorative corner accents */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-lg" />
              {/* Glow behind */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 via-neon-blue/10 to-neon-purple/15 rounded-2xl blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Text content - Right side */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-sm text-primary mb-4 tracking-widest uppercase"
            >
              {visitorName ? `Hey ${visitorName}, I'm` : "Hello, I'm"}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
            >
              <span className="gradient-text">Manish kumar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-4 text-balance"
            >
              Building smart solutions with code and creativity
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm md:text-base text-muted-foreground/70 max-w-lg mx-auto lg:mx-0 mb-10"
            >
              Passionate developer skilled in Java, Python, React.js and problem solving.
              <br />
              B.Tech CSE Student · Aspiring Software Developer · ML Enthusiast
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="#projects"
                animate={{
                  boxShadow: [
                    "0 0 8px hsl(160 100% 50% / 0.2)",
                    "0 0 24px hsl(160 100% 50% / 0.5), 0 0 48px hsl(160 100% 50% / 0.2)",
                    "0 0 8px hsl(160 100% 50% / 0.2)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-colors duration-200"
              >
                View Projects
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </motion.a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-glass-border text-foreground font-medium text-sm hover:border-primary/40 hover:text-primary transition-all duration-200 active:scale-[0.97]"
              >
                Contact Me
                <Send size={14} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
