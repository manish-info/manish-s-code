// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, Sparkles } from "lucide-react";

// interface WelcomeGateProps {
//   onEnter: (visitor: { name: string; email: string; passion: string }) => void;
// }

// const WelcomeGate = ({ onEnter }: WelcomeGateProps) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [passion, setPassion] = useState("");
//   const [exiting, setExiting] = useState(false);

//   const isValid = name.trim().length > 0 && email.trim().includes("@") && passion.trim().length > 0;

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!isValid) return;
//     setExiting(true);
//     setTimeout(() => onEnter({ name: name.trim(), email: email.trim(), passion: passion.trim() }), 800);
//   };

//   return (
//     <AnimatePresence>
//       {!exiting ? (
//         <motion.div
//           key="gate"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0, scale: 1.05 }}
//           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//           className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
//         >
//           {/* Ambient glows */}
//           <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-float" />
//           <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: "3s" }} />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-blue/3 rounded-full blur-[100px]" />

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//             className="relative z-10 w-full max-w-md mx-6"
//           >
//             {/* Header */}
//             <div className="text-center mb-8">
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
//                 className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-5"
//               >
//                 <Sparkles size={24} className="text-primary" />
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.5 }}
//                 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3"
//               >
//                 <span className="gradient-text">Welcome, friend</span>
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.6 }}
//                 className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto"
//               >
//                 We'd love to know you! Share a little about yourself before stepping into my world.
//               </motion.p>
//             </div>

//             {/* Form */}
//             <motion.form
//               onSubmit={handleSubmit}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.7 }}
//               className="glass-card p-6 sm:p-8 space-y-5"
//             >
//               <div className="space-y-1.5">
//                 <label htmlFor="visitor-name" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
//                   Your Name
//                 </label>
//                 <input
//                   id="visitor-name"
//                   type="text"
//                   placeholder="What should I call you?"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   maxLength={100}
//                   className="w-full h-11 px-4 rounded-lg bg-secondary border border-glass-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
//                 />
//               </div>

//               <div className="space-y-1.5">
//                 <label htmlFor="visitor-email" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
//                   Email
//                 </label>
//                 <input
//                   id="visitor-email"
//                   type="email"
//                   placeholder="your@email.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   maxLength={255}
//                   className="w-full h-11 px-4 rounded-lg bg-secondary border border-glass-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
//                 />
//               </div>

//               <div className="space-y-1.5">
//                 <label htmlFor="visitor-passion" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
//                   Your Passion
//                 </label>
//                 <input
//                   id="visitor-passion"
//                   type="text"
//                   placeholder="What excites you most?"
//                   value={passion}
//                   onChange={(e) => setPassion(e.target.value)}
//                   maxLength={200}
//                   className="w-full h-11 px-4 rounded-lg bg-secondary border border-glass-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={!isValid}
//                 className="group w-full h-12 rounded-lg bg-primary text-primary-foreground font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-[0_0_24px_hsl(var(--neon)/0.3)] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none"
//               >
//                 Enter My World
//                 <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
//               </button>
//             </motion.form>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1 }}
//               className="text-center text-[11px] text-muted-foreground/40 mt-4"
//             >
//               Your info stays between us — no spam, just friendship.
//             </motion.p>
//           </motion.div>
//         </motion.div>
//       ) : (
//         <motion.div
//           key="exit"
//           initial={{ opacity: 1 }}
//           animate={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//           className="fixed inset-0 z-50 bg-background"
//         />
//       )}
//     </AnimatePresence>
//   );
// };

// export default WelcomeGate;






import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

interface WelcomeGateProps {
  onEnter: (visitor: { name: string; email: string; passion: string }) => void;
}

const WelcomeGate = ({ onEnter }: WelcomeGateProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passion, setPassion] = useState("");
  const [exiting, setExiting] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  const isValid = name.trim().length > 0 && email.trim().includes("@") && passion.trim().length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || saving) return;

    setSaving(true);
    setSaveError("");

    const { error } = await supabase.from("visitors").insert({
      name: name.trim(),
      email: email.trim(),
      passion: passion.trim(),
    });

    setSaving(false);

    if (error) {
      console.error("Failed to save visitor:", error);
      setSaveError("Something went wrong saving your info, but you can still continue.");
    }

    setExiting(true);
    setTimeout(() => onEnter({ name: name.trim(), email: email.trim(), passion: passion.trim() }), 800);
  };

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="gate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Ambient glows */}
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: "3s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-blue/3 rounded-full blur-[100px]" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-md mx-6"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-5"
              >
                <Sparkles size={24} className="text-primary" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-2xl sm:text-3xl font-bold tracking-tight mb-3"
              >
                <span className="gradient-text">Welcome, friend</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto"
              >
                We'd love to know you! Share a little about yourself before stepping into my world.
              </motion.p>
            </div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="glass-card p-6 sm:p-8 space-y-5"
            >
              <div className="space-y-1.5">
                <label htmlFor="visitor-name" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  id="visitor-name"
                  type="text"
                  placeholder="What should I call you?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  className="w-full h-11 px-4 rounded-lg bg-secondary border border-glass-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="visitor-email" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="visitor-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={255}
                  className="w-full h-11 px-4 rounded-lg bg-secondary border border-glass-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="visitor-passion" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Your Passion
                </label>
                <input
                  id="visitor-passion"
                  type="text"
                  placeholder="What excites you most?"
                  value={passion}
                  onChange={(e) => setPassion(e.target.value)}
                  maxLength={200}
                  className="w-full h-11 px-4 rounded-lg bg-secondary border border-glass-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={!isValid || saving}
                className="group w-full h-12 rounded-lg bg-primary text-primary-foreground font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-[0_0_24px_hsl(var(--neon)/0.3)] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none"
              >
                {saving ? "Saving..." : "Enter My World"}
                {!saving && <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />}
              </button>

              {saveError && (
                <p className="text-center text-xs text-destructive mt-2">{saveError}</p>
              )}
            </motion.form>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center text-[11px] text-muted-foreground/40 mt-4"
            >
              Your info stays between us — no spam, just friendship.
            </motion.p>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="exit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 bg-background"
        />
      )}
    </AnimatePresence>
  );
};

export default WelcomeGate;