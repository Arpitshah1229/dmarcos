import "./UtilityLifestyle.css";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import lifestyleOlive1 from "@/assets/lifestyle-olive-1.webp";
import lifestyleOlive2 from "@/assets/lifestyle-olive-2.webp";
import lifestyleOlive3 from "@/assets/lifestyle-olive-3.webp";
import lifestyleOlive4 from "@/assets/lifestyle-olive-4.webp";

const contexts = [
  { label: "Safari",  image: lifestyleOlive1 },
  { label: "Field",   image: lifestyleOlive2 },
  { label: "Lodge",   image: lifestyleOlive3 },
  { label: "Terrain", image: lifestyleOlive4 },
];

const UtilityLifestyle = () => {
  const ref      = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section ref={ref} className="utility-lifestyle">
      <div className="utility-lifestyle__bg" />

      <div className="utility-lifestyle__inner">

        {/* Header */}
        <motion.div
          className="utility-lifestyle__header"
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            className="utility-lifestyle__tagline"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            One Outfit. Every Terrain.
          </motion.p>

          <h2 className="utility-lifestyle__title">
            {"Designed for repeat wear.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%", opacity: 0 }}
                animate={isInView ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p
            className="utility-lifestyle__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.7, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Built for real life.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="utility-lifestyle__grid">
          {contexts.map((ctx, i) => (
            <LifestyleCard key={i} ctx={ctx} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

const LifestyleCard = ({ ctx, index }: { ctx: typeof contexts[0]; index: number }) => {
  const cardRef      = useRef<HTMLDivElement>(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-150px" });
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <motion.div
      ref={cardRef}
      className="utility-lifestyle__card"
      initial={{ opacity: 0, x: 80, filter: "blur(6px)" }}
      animate={isCardInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1.4, delay: 0.2 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="utility-lifestyle__img-ratio">
        <motion.img
          src={ctx.image}
          loading="lazy"
          decoding="async"
          alt={`D'MARCOS in ${ctx.label}`}
          className="utility-lifestyle__img"
          style={{ y: imgY }}
        />
        {/* Wipe reveal */}
        <motion.div
          className="utility-lifestyle__wipe"
          initial={{ scaleX: 1 }}
          animate={isCardInView ? { scaleX: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="utility-lifestyle__tint" />
      </div>

      <motion.p
        className="utility-lifestyle__label"
        initial={{ opacity: 0, y: 15 }}
        animate={isCardInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 + index * 0.15 }}
      >
        {ctx.label}
      </motion.p>
    </motion.div>
  );
};

export default UtilityLifestyle;





// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import { useRef } from "react";
// import lifestyleOlive1 from "@/assets/lifestyle-olive-1.webp";
// import lifestyleOlive2 from "@/assets/lifestyle-olive-2.webp";
// import lifestyleOlive3 from "@/assets/lifestyle-olive-3.webp";
// import lifestyleOlive4 from "@/assets/lifestyle-olive-4.webp";

// const contexts = [
//   { label: "Safari", image: lifestyleOlive1 },
//   { label: "Field", image: lifestyleOlive2 },
//   { label: "Lodge", image: lifestyleOlive3 },
//   { label: "Terrain", image: lifestyleOlive4 },
// ];

// const UtilityLifestyle = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-200px" });

//   return (
//     <section ref={ref} className="py-32 section-padding relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b from-[hsl(140_20%_6%)] via-background to-background" />

//       <div className="container mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           animate={isInView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
//           className="text-center mb-6"
//         >
//           <motion.p
//             initial={{ opacity: 0, y: -20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="text-utility text-gold text-lg mb-4 font-medium"
//           >
//             One Outfit. Every Terrain.
//           </motion.p>
//           <h2 className="text-display text-5xl md:text-7xl font-black text-foreground uppercase overflow-hidden">
//             {"Designed for repeat wear.".split(" ").map((word, i) => (
//               <motion.span
//                 key={i}
//                 initial={{ y: "100%", opacity: 0 }}
//                 animate={isInView ? { y: "0%", opacity: 1 } : {}}
//                 transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
//                 className="inline-block mr-[0.25em]"
//               >
//                 {word}
//               </motion.span>
//             ))}
//           </h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 0.7, y: 0 } : {}}
//             transition={{ duration: 1, delay: 0.8 }}
//             className="text-xl md:text-2xl text-foreground/60 mt-4 font-light"
//           >
//             Built for real life.
//           </motion.p>
//         </motion.div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
//           {contexts.map((ctx, i) => (
//             <LifestyleCard key={i} ctx={ctx} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const LifestyleCard = ({ ctx, index }: { ctx: typeof contexts[0]; index: number }) => {
//   const cardRef = useRef(null);
//   const isCardInView = useInView(cardRef, { once: true, margin: "-150px" });
//   const { scrollYProgress } = useScroll({
//     target: cardRef,
//     offset: ["start end", "end start"],
//   });
//   const imgY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

//   return (
//     <motion.div
//       ref={cardRef}
//       initial={{ opacity: 0, x: 80, filter: "blur(6px)" }}
//       animate={isCardInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
//       transition={{
//         duration: 1.4,
//         delay: 0.2 + index * 0.15,
//         ease: [0.16, 1, 0.3, 1],
//       }}
//       whileHover={{ y: -10, transition: { duration: 0.3 } }}
//       className="group cursor-pointer"
//     >
//       <div className="aspect-[3/4] overflow-hidden mb-4 relative">
//         <motion.img
//           src={ctx.image}
//           loading="lazy"
//           alt={`D'MARCOS in ${ctx.label}`}
//           className="h-[120%] w-full object-cover transition-transform duration-700 group-hover:scale-105"
//           style={{ y: imgY }}
//         />
//         <motion.div
//           initial={{ scaleX: 1 }}
//           animate={isCardInView ? { scaleX: 0 } : {}}
//           transition={{ duration: 1.2, delay: 0.3 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
//           className="absolute inset-0 bg-background origin-left"
//         />
//         <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500" />
//       </div>
//       <motion.p
//         initial={{ opacity: 0, y: 15 }}
//         animate={isCardInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.8, delay: 0.6 + index * 0.15 }}
//         className="text-sm uppercase tracking-[0.2em] text-center text-white/70 group-hover:text-gold transition-colors duration-300 font-bold" style={{fontFamily: "'Space Grotesk', sans-serif"}}
//       >
//         {ctx.label}
//       </motion.p>
//     </motion.div>
//   );
// };

// export default UtilityLifestyle;
