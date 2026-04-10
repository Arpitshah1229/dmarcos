import "./FinalStatement.css";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import heroRock from "@/assets/hero-rock.webp";

const FinalStatement = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <section ref={ref} className="final-statement">

      {/* ── Background ── */}
      <motion.div className="final-statement__bg" style={{ scale: bgScale }}>
        <img
          src={heroRock}
          alt="Rock terrain"
          className="final-statement__bg-img"
        />
        <div className="final-statement__bg-overlay" />
      </motion.div>

      {/* ── Pyramid content ── */}
      <div className="final-statement__content">
        <div className="final-statement__lines">

          {/* Line 1 — smallest */}
          <div className="final-statement__line-wrap">
            <motion.h2
              className="final-statement__line final-statement__line--1"
              initial={{ y: "120%", opacity: 0, rotateX: -45 }}
              animate={isInView ? { y: "0%", opacity: 1, rotateX: 0 } : {}}
              transition={{ duration: 1.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Built in <span className="final-statement__gold">India</span>.
            </motion.h2>
          </div>

          {/* Line 2 — medium */}
          <div className="final-statement__line-wrap">
            <motion.h2
              className="final-statement__line final-statement__line--2"
              initial={{ y: "120%", opacity: 0, rotateX: -45 }}
              animate={isInView ? { y: "0%", opacity: 1, rotateX: 0 } : {}}
              transition={{ duration: 1.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Rooted in the <span className="final-statement__gold">Wild</span>.
            </motion.h2>
          </div>

          {/* Line 3 — largest */}
          <div className="final-statement__line-wrap">
            <motion.h2
              className="final-statement__line final-statement__line--3"
              initial={{ y: "120%", opacity: 0, rotateX: -45 }}
              animate={isInView ? { y: "0%", opacity: 1, rotateX: 0 } : {}}
              transition={{ duration: 1.6, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Created for the <span className="final-statement__gold">World</span>.
            </motion.h2>
          </div>

        </div>
      </div>

      <div className="final-statement__vignette" />
    </section>
  );
};

export default FinalStatement;



















// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import { useRef } from "react";
// import heroRock from "@/assets/hero-rock.jpg";

// const FinalStatement = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-150px" });
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

//   return (
//     <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background — bright and uncropped */}
//       <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
//         <img
//           src={heroRock}
//           alt="Rock terrain"
//           className="h-full w-full object-contain sm:object-cover"
//           style={{ opacity: 1, filter: "brightness(1.4)" }}
//         />
//         <div className="absolute inset-0 bg-background/10" />
//       </motion.div>

//       {/* Content — pyramid style */}
//       <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
//         <div className="flex flex-col items-center gap-3 md:gap-4 mb-12">
//           {/* Line 1 — smallest */}
//           <div className="overflow-hidden">
//             <motion.h2
//               initial={{ y: "120%", opacity: 0, rotateX: -45 }}
//               animate={isInView ? { y: "0%", opacity: 1, rotateX: 0 } : {}}
//               transition={{ duration: 1.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
//               className="text-display text-2xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight uppercase leading-none"
//             >
//               Built in <span className="text-gold">India</span>.
//             </motion.h2>
//           </div>

//           {/* Line 2 — medium */}
//           <div className="overflow-hidden">
//             <motion.h2
//               initial={{ y: "120%", opacity: 0, rotateX: -45 }}
//               animate={isInView ? { y: "0%", opacity: 1, rotateX: 0 } : {}}
//               transition={{ duration: 1.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
//               className="text-display text-3xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight uppercase leading-none"
//             >
//               Rooted in the <span className="text-gold">Wild</span>.
//             </motion.h2>
//           </div>

//           {/* Line 3 — largest (pyramid base) */}
//           <div className="overflow-hidden">
//             <motion.h2
//               initial={{ y: "120%", opacity: 0, rotateX: -45 }}
//               animate={isInView ? { y: "0%", opacity: 1, rotateX: 0 } : {}}
//               transition={{ duration: 1.6, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
//               className="text-display text-4xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tight uppercase leading-none"
//             >
//               Created for the <span className="text-gold">World</span>.
//             </motion.h2>
//           </div>
//         </div>

//         {/* Tagline */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1.4, delay: 2.2 }}
//           className="flex flex-col items-center gap-4"
//         >
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ duration: 1.2, delay: 2.4 }}
//             className="w-20 h-[2px] bg-gold/60 origin-center"
//           />
//           <p className="text-sm tracking-[0.4em] uppercase text-gold font-medium">
//             Few & Fearless
//           </p>
//         </motion.div> */}
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background/40 to-transparent" />
//     </section>
//   );
// };

// export default FinalStatement;
