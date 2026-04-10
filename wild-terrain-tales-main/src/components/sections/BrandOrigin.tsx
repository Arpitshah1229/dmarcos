
import "./BrandOrigin.css";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import brandOrigin from "@/assets/brand-origin-new.webp";
import RollingCounter from "@/components/RollingCounter";

const BrandOrigin = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY        = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const imgScale    = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const textParallax = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={ref} id="story" className="brand-origin">
      <div className="brand-origin__grid container mx-auto">

        {/* ── Text column ── */}
        <motion.div className="brand-origin__text" style={{ y: textParallax }}>

          {/* Gold rule */}
          <motion.div
            className="brand-origin__rule"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* "our" */}
          <motion.p
            className="brand-origin__our"
            initial={{ opacity: 0, x: -60, filter: "blur(8px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            our
          </motion.p>

          {/* Title */}
          <div className="brand-origin__title-wrap">
            <motion.h2
              className="brand-origin__title"
              initial={{ y: "100%", opacity: 0 }}
              animate={isInView ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Solution
            </motion.h2>
          </div>

          {/* Divider */}
          <motion.div
            className="brand-origin__divider"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 1 }}
          />

          {/* Paragraph 1 */}
          <motion.p
            className="brand-origin__para"
            initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <span className="brand-origin__strong">Everyday utility-lifestyle apparel</span>{" "}
            built for Indian climate, movement, and real daily use.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            className="brand-origin__para brand-origin__para--sm"
            initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
            animate={isInView ? { opacity: 0.9, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.2, delay: 1.0 }}
          >
            <span className="brand-origin__strong">Designed around a calm, repeatable color system</span>{" "}
            inspired by{" "}
            <span className="brand-origin__sky">Sky</span>,{" "}
            <span className="brand-origin__land">Land</span>, and{" "}
            <span className="brand-origin__water">Water</span>.
            A category that does not yet exist at scale in India.
          </motion.p>

          {/* Paragraph 3 */}
          <motion.p
            className="brand-origin__para brand-origin__para--sm"
            initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
            animate={isInView ? { opacity: 0.85, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.2, delay: 1.2 }}
          >
            <span className="brand-origin__strong">A system-led wardrobe, not trend-led fashion.</span>{" "}
            Timeless silhouettes and grounded palettes replace seasonal drops and loud fashion cycles.
          </motion.p>

          {/* Paragraph 4 */}
          <motion.p
            className="brand-origin__para brand-origin__para--sm"
            initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
            animate={isInView ? { opacity: 0.8, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.2, delay: 1.4 }}
          >
            <span className="brand-origin__strong">Globally proven concept, locally absent.</span>{" "}
            Utility-lifestyle brands exist internationally, but India lacks a{" "}
            <span className="brand-origin__strong">scaled, homegrown equivalent</span>{" "}
            designed for its climate, culture, and consumers.
          </motion.p>

          {/* Stats row */}
          <motion.div
            className="brand-origin__stats"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <div>
              <p className="brand-origin__stat-value">
                <RollingCounter text={"2026"} delay={1.5} />
              </p>
              <p className="brand-origin__stat-label">Established</p>
            </div>
            <div>
              <p className="brand-origin__stat-value">
                <RollingCounter text="India" delay={2.0} />
              </p>
              <p className="brand-origin__stat-label">Origin</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Image column ── */}
        <motion.div
          className="brand-origin__img-wrap"
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="brand-origin__img-ratio">
            <motion.img
              src={brandOrigin}
              loading="lazy"
              decoding="async"
              alt="D'MARCOS terrain lifestyle"
              className="brand-origin__img"
              style={{ y: imgY, scale: imgScale }}
            />
          </div>
          <motion.div
            className="brand-origin__wipe"
            initial={{ scaleX: 1 }}
            animate={isInView ? { scaleX: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default BrandOrigin;














// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import { useRef } from "react";
// import brandOrigin from "@/assets/brand-origin-new.webp";
// import RollingCounter from "@/components/RollingCounter";

// const BrandOrigin = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-200px" });
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const imgY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
//   const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
//   const textParallax = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

//   const title = "Solution";

//   return (
//     <section ref={ref} id="story" className="min-h-screen flex items-center section-padding py-32">
//       <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
//         {/* Text — slides from LEFT with staggered children */}
//         <motion.div
//           className="space-y-8"
//           style={{ y: textParallax }}
//         >
//           <motion.div
//             initial={{ width: 0 }}
//             animate={isInView ? { width: 80 } : {}}
//             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//             className="h-[2px] bg-gold overflow-hidden origin-center "
//           />

//           <motion.p
//             initial={{ opacity: 0, x: -60, filter: "blur(8px)" }}
//             animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
//             transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//             className="text-gold tracking-[0.2em] text-center"
//             style={{
//               fontSize: "6.5rem",
//               marginBottom: "-2.9rem",
//               marginTop: "0.5rem",
//               letterSpacing: "0em",
//             }}
//           >
//             our
//           </motion.p>

//           {/* Character-by-character title reveal */}
//           <div className="overflow-hidden">
//             <motion.h2
//               initial={{ y: "100%", opacity: 0 }}
//               animate={isInView ? { y: "0%", opacity: 1 } : {}}
//               transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
//               className="text-display font-black uppercase text-foreground"
//               style={{
//                 fontSize: "clamp(5rem, 8vw, 7.5rem)",
//                 lineHeight: "0.9",
//                 marginTop: "-0.5rem",
//               }}
//             >
//               {title}
//             </motion.h2>
//           </div>

//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ duration: 1.2, delay: 1 }}
//             className="h-[2px] w-16 bg-gold/40 origin-center"
//           />



//           {/* Paragraph 1 */}
//           <motion.p
//             initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
//             animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
//             transition={{ duration: 1.2, delay: 0.8 }}
//             className="text-white/75 max-w-xl mx-auto mb-4"
//             style={{
//               fontFamily: "'Space Grotesk', sans-serif",
//               fontSize: "1.25rem",
//               lineHeight: "1.7",
//             }}
//           >
//             <span className="font-bold text-white">
//               Everyday utility-lifestyle apparel
//             </span>{" "}
//             built for Indian climate, movement, and real daily use.
//           </motion.p>

//           {/* Paragraph 2 */}
//           <motion.p
//             initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
//             animate={isInView ? { opacity: 0.9, x: 0, filter: "blur(0px)" } : {}}
//             transition={{ duration: 1.2, delay: 1.0 }}
//             className="text-white/75 max-w-xl mx-auto mb-4"
//             style={{
//               fontFamily: "'Space Grotesk', sans-serif",
//               fontSize: "1.15rem",
//               lineHeight: "1.8",
//             }}
//           >
//             <span className="font-bold text-white">
//               Designed around a calm, repeatable color system
//             </span>{" "}
//             inspired by{" "}
//             <span className="text-[#7992A8]/100 font-bold">Sky</span>,{" "}
//             <span className="text-[#826F63]/100 font-bold">Land</span>, and{" "}
//             <span className="text-[#3D4D65]/100 font-bold">Water</span>.
//             A category that does not yet exist at scale in India.
//           </motion.p>

//           {/* Paragraph 3 */}
//           <motion.p
//             initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
//             animate={isInView ? { opacity: 0.85, x: 0, filter: "blur(0px)" } : {}}
//             transition={{ duration: 1.2, delay: 1.2 }}
//             className="text-white/75 max-w-xl mx-auto mb-4"
//             style={{
//               fontFamily: "'Space Grotesk', sans-serif",
//               fontSize: "1.15rem",
//               lineHeight: "1.8",
//             }}
//           >
//             <span className="font-bold text-white">
//               A system-led wardrobe, not trend-led fashion.
//             </span>{" "}
//             Timeless silhouettes and grounded palettes replace seasonal drops and loud fashion cycles.
//           </motion.p>

//           {/* Paragraph 4 */}
//           <motion.p
//             initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
//             animate={isInView ? { opacity: 0.8, x: 0, filter: "blur(0px)" } : {}}
//             transition={{ duration: 1.2, delay: 1.4 }}
//             className="text-white/75 max-w-xl mx-auto"
//             style={{
//               fontFamily: "'Space Grotesk', sans-serif",
//               fontSize: "1.15rem",
//               lineHeight: "1.8",
//             }}
//           >
//             <span className="font-bold text-white">
//               Globally proven concept, locally absent.
//             </span>{" "}
//             Utility-lifestyle brands exist internationally, but India lacks a{" "}
//             <span className="font-bold text-white">
//               scaled, homegrown equivalent
//             </span>{" "}
//             designed for its climate, culture, and consumers.
//           </motion.p>

//           {/* Animated stat counters — rolling odometer */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 1, delay: 1.4 }}
//             className="flex gap-12 pt-4"
//           >
//             <div>
//               <p className="text-display text-3xl font-black text-gold">
//                 <RollingCounter text="2026" delay={1.5} />
//               </p>
//               <p className="text-[10px] uppercase tracking-[0.2em] text-white mt-1">Established</p>
//             </div>
//             <div>
//               <p className="text-display text-3xl font-black text-gold">
//                 <RollingCounter text="India" delay={2.0} />
//               </p>
//               <p className="text-[10px] uppercase tracking-[0.2em] text-white mt-2">Origin</p>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Image — slides from RIGHT with parallax + reveal mask */}
//         <motion.div
//           initial={{ opacity: 0, x: 100, scale: 0.9 }}
//           animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
//           transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
//           className="relative overflow-hidden"
//         >
//           <div className="aspect-[3/4] overflow-hidden">
//             <motion.img
//               src={brandOrigin}
//               loading="lazy"
//               alt="D'MARCOS terrain lifestyle"
//               className="h-[120%] w-full object-cover"
//               style={{ y: imgY, scale: imgScale }}
//             />
//           </div>
//           {/* Animated overlay that wipes away */}
//           <motion.div
//             initial={{ scaleX: 1 }}
//             animate={isInView ? { scaleX: 0 } : {}}
//             transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
//             className="absolute inset-0 bg-background origin-right"
//           />
//           <div className="absolute bottom-6 right-6">
//             {/* <motion.p
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : {}}
//               transition={{ duration: 0.8, delay: 1.8 }}
//               className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-medium"
//             >
//               Est. 2026
//             </motion.p> */}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BrandOrigin;
