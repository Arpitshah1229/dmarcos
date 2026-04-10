import "./ProductBuild.css";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import solutionModel  from "@/assets/brand-origin.jpg";
import detailWorkwear from "@/assets/product-build2.webp";
import detailVest     from "@/assets/product-build3.webp";
import detailPants    from "@/assets/product-build4.webp";

const stages = [
  { label: "REAL WORLD UTILITY",  sublabel: "Designed for movement, terrain, and everyday Indian conditions.", image: solutionModel },
  { label: "CRAFTED PRECISION",   sublabel: "Clean construction, reinforced stitching, and functional detailing.", image: detailWorkwear },
  { label: "BUILT IN ACTION",     sublabel: "Engineered for movement, work, and real-world use.", image: detailVest },
  { label: "ENDURING BUILD",      sublabel: "Made to handle wear, weather, and time.", image: detailPants },
];

const titleWords = "From Earth to Garment".split(" ");

const ProductBuild = () => {
  const ref      = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section ref={ref} id="collection" className="product-build">
      <div className="container mx-auto">

        {/* Header */}
        <motion.div className="product-build__header">
          <motion.p
            className="product-build__eyebrow"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
          <h2 className="product-build__title">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                className={i >= 2 ? "muted" : ""}
                initial={{ y: "100%", opacity: 0 }}
                animate={isInView ? { y: "0%", opacity: i >= 2 ? 0.5 : 1 } : {}}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="product-build__grid">
          {stages.map((stage, i) => (
            <StageCard key={i} stage={stage} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

const StageCard = ({ stage, index }: { stage: typeof stages[0]; index: number }) => {
  const cardRef      = useRef<HTMLDivElement>(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-150px" });
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);

  return (
    <motion.div
      ref={cardRef}
      className="product-build__card"
      initial={{ opacity: 0, x: 100, filter: "blur(6px)" }}
      animate={isCardInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1.4, delay: 0.2 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className="product-build__img-ratio">
        <motion.img
          src={stage.image}
          loading="lazy"
          decoding="async"
          alt={stage.label}
          className="product-build__img"
          style={{ scale: imgScale }}
        />
        {/* Wipe reveal */}
        <motion.div
          className="product-build__wipe"
          initial={{ scaleX: 1 }}
          animate={isCardInView ? { scaleX: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="product-build__hover-overlay" />
      </div>

      <div className="product-build__meta">
        <motion.p
          className="product-build__index"
          initial={{ opacity: 0 }}
          animate={isCardInView ? { opacity: 0.6 } : {}}
          transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
        >
          0{index + 1}
        </motion.p>
        <motion.h3
          className="product-build__card-title"
          initial={{ opacity: 0, y: 15 }}
          animate={isCardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7 + index * 0.2 }}
        >
          {stage.label}
        </motion.h3>
        <motion.p
          className="product-build__card-sub"
          initial={{ opacity: 0, y: 10 }}
          animate={isCardInView ? { opacity: 0.7, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
        >
          {stage.sublabel}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ProductBuild;




// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import { useRef } from "react";
// import solutionModel from "@/assets/brand-origin.jpg";
// import detailWorkwear from "@/assets/product-build2.webp";
// import detailVest from "@/assets/product-build3.webp";
// import detailPants from "@/assets/product-build4.webp";

// const stages = [
//   { label: "REAL WORLD UTILITY", sublabel: "Designed for movement, terrain, and everyday Indian conditions.", image: solutionModel },
//   { label: "CRAFTED PRECISION", sublabel: "Clean construction, reinforced stitching, and functional detailing.", image: detailWorkwear },
//   { label: "BUILT IN ACTION", sublabel: "Engineered for movement, work, and real-world use.", image: detailVest },
//   { label: "ENDURING BUILD", sublabel: "Made to handle wear, weather, and time.", image: detailPants },
// ];

// const titleWords = "From Earth to Garment".split(" ");

// const ProductBuild = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-200px" });

//   return (
//     <section ref={ref} id="collection" className="py-32 section-padding">
//       <div className="container mx-auto">
//         <motion.div className="mb-20">
//           <motion.p
//             initial={{ opacity: 0, x: -40 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//             className="text-utility text-gold text-xs mb-4"
//           >
//             {/* Our Solution */}
//           </motion.p>
//           <h2 className="text-display text-5xl md:text-7xl font-black text-foreground uppercase leading-[0.9] overflow-hidden">
//             {titleWords.map((word, i) => (
//               <motion.span
//                 key={i}
//                 initial={{ y: "100%", opacity: 0 }}
//                 animate={isInView ? { y: "0%", opacity: i >= 2 ? 0.5 : 1 } : {}}
//                 transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
//                 className={`inline-block mr-[0.25em] ${i >= 2 ? "text-foreground/50" : ""}`}
//               >
//                 {word}
//               </motion.span>
//             ))}
//           </h2>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {stages.map((stage, i) => (
//             <StageCard key={i} stage={stage} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const StageCard = ({ stage, index }: { stage: typeof stages[0]; index: number }) => {
//   const cardRef = useRef(null);
//   const isCardInView = useInView(cardRef, { once: true, margin: "-150px" });
//   const { scrollYProgress } = useScroll({
//     target: cardRef,
//     offset: ["start end", "end start"],
//   });
//   const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);

//   return (
//     <motion.div
//       ref={cardRef}
//       initial={{ opacity: 0, x: 100, filter: "blur(6px)" }}
//       animate={isCardInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
//       transition={{ duration: 1.4, delay: 0.2 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
//       whileHover={{ y: -8, transition: { duration: 0.3 } }}
//       className="group relative cursor-pointer"
//     >
//       <div className="aspect-[3/4] overflow-hidden mb-6 relative">
//         <motion.img
//           src={stage.image}
//           loading="lazy"
//           alt={stage.label}
//           className="h-full w-full object-cover"
//           style={{ scale: imgScale }}
//         />
//         {/* Wipe reveal overlay */}
//         <motion.div
//           initial={{ scaleX: 1 }}
//           animate={isCardInView ? { scaleX: 0 } : {}}
//           transition={{ duration: 1.2, delay: 0.3 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
//           className="absolute inset-0 bg-background origin-right"
//         />
//         <div className="absolute inset-0 bg-background/10 group-hover:bg-background/0 transition-colors duration-500" />
//       </div>
//       <div className="space-y-2">
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={isCardInView ? { opacity: 0.6 } : {}}
//           transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
//           className="text-[20px] uppercase tracking-[0.2em] text-gold/40 font-medium"
//         >
//           0{index + 1}
//         </motion.p>
//         <motion.h3
//           initial={{ opacity: 0, y: 15 }}
//           animate={isCardInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1, delay: 0.7 + index * 0.2 }}
//           className="text-display text-xl font-black text-foreground uppercase"
//         >
//           {stage.label}
//         </motion.h3>
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={isCardInView ? { opacity: 0.7, y: 0 } : {}}
//           transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
//           className="text-medium text-white/80 leading-relaxed"  style={{fontFamily: "'Space Grotesk', sans-serif"}}
//         >
//           {stage.sublabel}
//         </motion.p>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductBuild;
