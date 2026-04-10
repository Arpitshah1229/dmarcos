import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/logo1.svg";
import { Bold } from "lucide-react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 200);   // Logo appears large
    const t2 = setTimeout(() => setPhase(2), 1400);  // Logo shrinks back
    const t3 = setTimeout(() => setPhase(3), 2200);  // Brand name + tagline
    const t4 = setTimeout(() => setPhase(4), 3600);  // Exit
    const t5 = setTimeout(() => onComplete(), 4400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-5">
            {/* Logo — appears first large, then shrinks back */}
            <motion.img
              src={logo}
              alt="D'MARCOS logo"
              className="w-20 h-20 md:w-24 md:h-24 mx-auto origin-center"
              initial={{ opacity: 0, scale: 2.5 }}
              animate={
                phase >= 2
                  ? { opacity: 1, scale: 1 }
                  : phase >= 1
                    ? { opacity: 1, scale: 2.5 }
                    : { opacity: 0, scale: 2.5 }
              }
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: phase >= 3 ? "6rem" : 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-px bg-gold/50 origin-center"
              style={{ transform: "translateX(-3px)" }}
            />

            {/* Brand name */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: phase >= 3 ? "0%" : "100%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl font-black tracking-[0.15em] text-foreground uppercase"
                // style={{ fontFamily: "var(--font-display)" }}
                style={{ fontFamily: "'Century Gothic Bold', 'Century Gothic', CenturyGothic, 'Apple Gothic', sans-serif", fontWeight: 700 }}
              >
                D’MARCOS
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={phase >= 3 ? { opacity: 0.6, letterSpacing: "0.4em" } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs uppercase text-gold/90 font-light"
              // style={{ fontFamily: "'Century Gothic ', 'Century Gothic', CenturyGothic, 'Apple Gothic', sans-serif", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.4em" }}
              style={{fontSize: "1.15rem"}}
            >
              <span className="text-gold/100 font-bold">F</span>EW{" "}
              <span className="text-gold/100 font-bold">&</span>{" "}
              <span className="text-gold/100 font-bold">F</span>EARLESS
            </motion.p>
          </div>

          {/* Bottom line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase >= 1 ? 1 : 0 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 left-0 right-0 h-px bg-gold/20 origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
