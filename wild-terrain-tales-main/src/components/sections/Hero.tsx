import "./Hero.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroTerrain from "@/assets/hero-terrian.webp";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  return (
    <section ref={ref} className="hero">

      {/* ── Parallax background ── */}
      <motion.div className="hero__bg" style={{ y, scale }}>
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={heroTerrain}
            loading="eager"
            {...({ fetchpriority: "high" } as any)}
            decoding="async"
            alt="D'MARCOS terrain landscape"
            className="hero__img"

          />
        </motion.div>
        <div className="hero__gradient-lr" />
        <div className="hero__gradient-tb" />
      </motion.div>

      {/* ── Grain overlay ── */}
      <div className="hero__grain" aria-hidden="true" />

      {/* ── Main content ── */}
      <motion.div className="hero__content" style={{ y: textY, opacity }}>
        <div className="hero__content-inner">

          {/* Animated gold rule */}
          <motion.div
            className="hero__rule"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Title */}
          <div className="hero__title-wrap">
            <h1 className="hero__title">
              {"D\u2019MARCOS".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%", opacity: 0, filter: "blur(12px)" }}
                  animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 1,
                    delay: 0.15 + i * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Tagline */}
          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hero__tagline-bold">F</span>EW{" "}
            <span className="hero__tagline-bold">&</span>{" "}
            <span className="hero__tagline-bold">F</span>EARLESS
          </motion.p>

          {/* Subtitle */}
          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 0.7, x: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Thoughtfully made everyday utility wear inspired by nature. Rooted
            in terrain. Built for real life.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hero__cta-label">Explore Collection</span>
            <div className="hero__cta-line" />
          </motion.div>

        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="hero__scroll-label">Scroll</span>
        <div className="hero__scroll-track">
          <motion.div
            className="hero__scroll-thumb"
            animate={{ y: [0, 44, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;






// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import heroTerrain from "@/assets/hero-terrian.webp";

// const Hero = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
//   const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

//   return (
//     <section ref={ref} className="relative h-[110vh] w-full overflow-hidden">
//       {/* Background with parallax — cinematic top-to-bottom reveal */}
//       <motion.div className="absolute inset-0" style={{ y, scale }}>
//         <motion.div
//           initial={{ clipPath: "inset(0 0 100% 0)" }}
//           animate={{ clipPath: "inset(0 0 0% 0)" }}
//           transition={{ duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//         >
//           <img
//             src={heroTerrain}
//             loading="eager"
//             alt="D'MARCOS terrain landscape"
//             className="h-[110vh] w-full object-cover"
//           />
//         </motion.div>
//         <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
//         <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
//       </motion.div>

//       {/* Grain overlay */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-20"
//         style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E\")" }}
//       />

//       {/* Content */}
//       <motion.div
//         className="relative z-10 flex h-full flex-col justify-end pb-32 md:pb-40 section-padding"
//         style={{ y: textY, opacity }}
//       >
//         <div className="max-w-5xl">
//           {/* Animated line from left */}
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
//             className="w-20 h-[2px] bg-gold mb-10 origin-left"
//           />

//           {/* Main title — single line */}
//           <div className="overflow-hidden pr-4">
//             <h1 className="text-7xl md:text-8xl lg:text-[9rem] xl:text-[11rem] font-black text-foreground tracking-tight leading-[0.85] uppercase whitespace-nowrap " style={{ fontFamily: "'Century Gothic Paneuropean Bold', 'Century Gothic Bold', 'Century Gothic Paneuropean', 'Century Gothic', CenturyGothic, sans-serif", fontWeight: 700 }}>
//               {"D\u2019MARCOS".split("").map((char, i) => (
//                 <motion.span
//                   key={i}
//                   initial={{ y: "110%", opacity: 0, filter: "blur(12px)" }}
//                   animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
//                   transition={{ duration: 1, delay: 0.15 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
//                   className="inline-block"
//                 >
//                   {char}
//                 </motion.span>
//               ))}
//             </h1>
//           </div>

//           {/* Tagline */}
//           <motion.p
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
//             className="mt-6 text-sm md:text-base font-medium text-gold tracking-[0.4em] uppercase"
//           >
//             <span className="text-gold/100 font-bold">F</span>EW{" "}
//             <span className="text-gold/100 font-bold">&</span>{" "}
//             <span className="text-gold/100 font-bold">F</span>EARLESS
//           </motion.p>

//           {/* Subtitle */}
//           <motion.p
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 0.7, x: 0 }}
//             transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
//             className="mt-8 text-sm md:text-base text-foreground/70 max-w-lg leading-relaxed"
//             style={{fontFamily: "'Space Grotesk', sans-serif", fontSize:"18px"}}
//           >
//             Thoughtfully made everyday utility wear inspired by nature. Rooted in terrain. Built for real life.
//           </motion.p>

//           {/* CTA */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
//             className="mt-12 flex items-center gap-4 group cursor-pointer"
//           >
//             <span className="text-xs uppercase tracking-[0.3em] text-foreground/60 group-hover:text-gold transition-colors duration-300 font-normal" style={{fontFamily: "'Space Grotesk', sans-serif"}}>
//               Explore Collection
//             </span>
//             <motion.div
//               className="w-12 h-px bg-foreground/30 group-hover:bg-gold group-hover:w-20 transition-all duration-500"
//             />
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2.5, duration: 1 }}
//         className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
//       >
//         <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-medium">Scroll</span>
//         <div className="w-px h-16 bg-foreground/15 relative overflow-hidden">
//           <motion.div
//             className="w-full h-5 bg-gold/60"
//             animate={{ y: [0, 44, 0] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;
