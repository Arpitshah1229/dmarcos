
import "./WardrobeSystem.css";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import wardrobeGroup from "@/assets/wardrobe-group.webp";

const WardrobeSystem = () => {
  const ref      = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const lineVariant: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section ref={ref} id="wardrobe" className="wardrobe">
      <div className="container mx-auto">
        <div className="wardrobe__grid">

          {/* ── Left — Image ── */}
          <motion.div
            className="wardrobe__img-wrap"
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.img
              src={wardrobeGroup}
              loading="lazy"
              decoding="async"
              alt="D'MARCOS wardrobe collection"
              className="wardrobe__img"
              style={{ y: imgY }}
            />
            <motion.div
              className="wardrobe__img-wipe"
              initial={{ scaleX: 1 }}
              animate={isInView ? { scaleX: 0 } : {}}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="wardrobe__img-gradient" />
          </motion.div>

          {/* ── Right — Content ── */}
          <div className="wardrobe__content">

            {/* Heading block */}
            <motion.div
              className="wardrobe__heading-block"
              initial={{ opacity: 0, x: 80 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.p
                className="wardrobe__building-for"
                initial={{ opacity: 0, y: -10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                we are building for
              </motion.p>
              <motion.h2
                className="wardrobe__who"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
              >
                WHO ?
              </motion.h2>
            </motion.div>

            {/* Body blocks */}
            <div className="wardrobe__blocks">

              {/* Divider + Clarity line */}
              <hr className="wardrobe__divider" />
              <motion.p
                className="wardrobe__clarity"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 0.7, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.7 }}
              >
                Clarity is defined as much by what we refuse to be as by what we choose to build.
              </motion.p>

              {/* What We Are Not */}
              <motion.h3
                className="wardrobe__not-heading"
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1 }}
              >
                What We Are Not
              </motion.h3>

              {[
                "Not fast fashion",
                "Not trend-led",
                "Not occasion-specific",
                "Not logo-heavy or loud",
              ].map((line, i) => (
                <motion.p
                  key={i}
                  className="wardrobe__strike-item"
                  custom={i}
                  variants={lineVariant}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <motion.span
                    className="wardrobe__strike-wrap"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    <span style={{ position: "relative", zIndex: 1 }}>{line}</span>
                    <motion.span
                      className="wardrobe__strike-line"
                      variants={{
                        rest: { scaleX: 0 },
                        hover: { scaleX: 1 },
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </motion.span>
                </motion.p>
              ))}

              {/* Design for */}
              <motion.p
                className="wardrobe__design-for"
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
              >
                We design for{" "}
                <span className="wardrobe__white">repeat wear</span>,{" "}
                <span className="wardrobe__white">long life</span>, and{" "}
                <span className="wardrobe__white">everyday relevance</span>.
              </motion.p>

              {/* Target Customer */}
              <motion.h3
                className="wardrobe__target-heading"
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Our Target Customer
              </motion.h3>

              {[
                <>Urban men and women (early 20s – mid 60s) in <span className="wardrobe__target-item">Tier-1 and Tier-2 cities</span></>,
                <>Consumers who prioritize <span className="wardrobe__target-item">product quality, durability, and repeat usability</span></>,
                <>Customers who prefer <span className="wardrobe__target-item">timeless design and function</span> over trend-driven fashion</>,
              ].map((line, i) => (
                <motion.p
                  key={i}
                  className="wardrobe__target-item"
                  custom={i}
                  variants={lineVariant}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {line}
                </motion.p>
              ))}

              <hr className="wardrobe__divider" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WardrobeSystem;




// import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
// import { useRef, useState } from "react";
// import wardrobeGroup from "@/assets/wardrobe-group.webp";




// const WardrobeSystem = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-200px" });
//   const [expanded, setExpanded] = useState<number | null>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const imgY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);


//   const lineVariant: Variants = {
//     hidden: { opacity: 0, x: 40 },
//     visible: (i) => ({
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.8,
//         delay: i * 0.15,
//         ease: [0.16, 1, 0.3, 1],
//       },
//     }),
//   };

//   return (
//     <section ref={ref} id="wardrobe" className="py-32 section-padding">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//           {/* Left — Image with wipe reveal */}
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
//             className="relative aspect-[3/4] overflow-hidden"    //sticky
//           >
//             <motion.img
//               src={wardrobeGroup}
//               loading="lazy"
//               alt="D'MARCOS wardrobe collection"
//               className="h-[120%] w-full object-cover"
//               style={{ y: imgY }}
//             />
//             <motion.div
//               initial={{ scaleX: 1 }}
//               animate={isInView ? { scaleX: 0 } : {}}
//               transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
//               className="absolute inset-0 bg-background origin-right"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
//             <div className="absolute bottom-8 left-8">
//               {/* <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 1, delay: 0.8 }}
//                 className="text-display text-3xl md:text-4xl font-black text-foreground uppercase"
//               >
//                 Scalability
//               </motion.p>
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={isInView ? { opacity: 0.6 } : {}}
//                 transition={{ duration: 1, delay: 1 }}
//                 className="text-foreground/60 mt-1 text-sm"
//               >
//                 Product Roadmap
//               </motion.p> */}
//             </div>
//           </motion.div>

//           {/* Right — Accordion slides from RIGHT */}
//           <div>
//             <motion.div
//               initial={{ opacity: 0, x: 80 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
//               className="mb-12"
//             >
//               <motion.p
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//                 className=" text-gold text-6xl mb-0 leading-none"
//               // style={{ fontSize: "3.9em" }}
//               >
//                 we are building for
//               </motion.p>
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 1, delay: 0.6 }}
//                 className="text-display text-9xl md:text-9xl font-black text-foreground uppercase leading-[0.85] mt-[-10px] ml-3"
//                 style={{
//                   fontFamily: "'Century Gothic Paneuropean Bold', 'Century Gothic Bold', 'Century Gothic Paneuropean', 'Century Gothic', CenturyGothic, sans-serif",
//                   fontWeight: 700,
//                   fontSize: "11rem",
//                   // letterSpacing: "-0.03em"
//                 }}
//               >
//                 WHO ?
//               </motion.h2>
//               {/* <motion.p
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={isInView ? { opacity: 0.7, y: 0 } : {}}
//                 transition={{ duration: 1, delay: 0.7 }}
//                 className="text-lg/3 text-white mt-4 leading-relaxed"
//               >
//                 Clarity is defined as much by what we refuse to be as by what we choose to build.
//               </motion.p> */}
//             </motion.div>

//             {/* <div className="space-y-0">
//               {categories.map((cat, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: 60 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
//                   className="border-t border-foreground/10"
//                 >
//                   <button
//                     onClick={() => setExpanded(expanded === i ? null : i)}
//                     className="w-full py-6 flex items-center justify-between text-left group"
//                   >
//                     <div className="flex items-center gap-6">
//                       <span className="text-[10px] uppercase tracking-[0.2em] text-gold/90 font-medium">0{i + 1}</span>
//                       <h3 className="text-display text-xl md:text-2xl font-black text-foreground uppercase group-hover:text-gold transition-colors duration-300">
//                         {cat.name}
//                       </h3>
//                     </div>
//                     <div className="flex items-center gap-4">
//                       <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 hidden md:block font-medium">{cat.count}</span>
//                       <motion.span
//                         animate={{ rotate: expanded === i ? 45 : 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="text-xl text-foreground/40 font-light"
//                       >
//                         +
//                       </motion.span>
//                     </div>
//                   </button>
//                   <motion.div
//                     initial={false}
//                     animate={{ height: expanded === i ? "auto" : 0, opacity: expanded === i ? 1 : 0 }}
//                     transition={{ duration: 0.4, ease: "easeInOut" }}
//                     className="overflow-hidden"
//                   >
//                     <p className="pb-6 pl-14 md:pl-16 text-sm text-foreground/60 max-w-md leading-relaxed">
//                       {cat.description}
//                     </p>
//                   </motion.div>
//                 </motion.div>
//               ))}
//               <div className="border-t border-foreground/10" />
//             </div> */}

//             <div className="space-y-6">

//               {/* Block 1 */}
//               <div className="border-t border-foreground/30 ">
//                 <motion.p
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={isInView ? { opacity: 0.7, y: 0 } : {}}
//                   transition={{ duration: 1, delay: 0.7 }}
//                   className="text-lg text-white/95 mt-2 leading-relaxed" style={{ fontSize: "21px" , fontFamily: "'Space Grotesk', sans-serif"}}
//                 >
//                   Clarity is defined as much by what we refuse to be as by what we choose to build.
//                 </motion.p>
//                 <motion.h3
//                   initial={{ opacity: 0, x: 40 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 1 }}
//                   className="text-display text-3xl md:text-3xl font-black mb-3 pt-4"
//                 >
//                   {/* What D’MARCOS Is Not */}
//                   What We Are Not -
//                 </motion.h3>

//                 {[
//                   "Not fast fashion",
//                   "Not trend-led",
//                   "Not occasion-specific",
//                   "Not logo-heavy or loud",
//                 ].map((line, i) => (
//                   <motion.p
//                     key={i}
//                     custom={i}
//                     variants={lineVariant}
//                     initial="hidden"
//                     animate={isInView ? "visible" : "hidden"}
//                     // className="text-sm text-foreground/70 leading-relaxed mb-1"
//                     className="text-xl text-foreground/85 leading-relaxed mb-2"
//                   >
//                     <motion.span
//                       className="relative inline-block cursor-pointer"
//                       initial="rest"
//                       whileHover="hover"
//                       animate="rest"
//                     >
//                       {/* Text */}
//                       <span className="relative z-10">{line}</span>

//                       {/* Strike line */}
//                       <motion.span
//                         variants={{
//                           rest: { scaleX: 0 },
//                           hover: { scaleX: 1 },
//                         }}
//                         transition={{ duration: 0.4, ease: "easeOut" }}
//                         className="absolute left-0 top-1/2 h-[1px] w-full bg-gold origin-left"
//                       />
//                     </motion.span>
//                   </motion.p>
//                 ))}
//               </div>

//               {/* Block 2 */}
//               {/* <div className="border-t border-foreground/10 pt-10"> */}
//               <motion.p
//                 initial={{ opacity: 0, x: 40 }}
//                 animate={isInView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ duration: 1, delay: 0.6 }}
//                 className="text-base md:text-lg text-white/90  leading-normal"
//                 style={{fontSize: "25px",fontFamily: "'Space Grotesk', sans-serif"}}
//               >
//                 We design for{" "}
//                 <span className="text-gold font-bold">repeat wear</span>,{" "}
//                 <span className="text-gold font-bold">long life</span>, and{" "}
//                 <span className="text-gold font-bold">everyday relevance</span>.
//               </motion.p>
//               {/* </div> */}

//               {/* Block 3 */}
//               {/* <div className="border-t border-foreground/10 pt-10"> */}
//                 <motion.h3
//                   initial={{ opacity: 0, x: 40 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 1, delay: 0.8 }}
//                   className="text-display text-xl md:text-3xl font-black mb-6"
//                 >
//                   Our Target Customer
//                 </motion.h3>

//                 {[
//                   <>Urban men and women (early20s – mid60s) in <span className="text-gold font-bold">Tier-1 and Tier-2 cities</span></>,
//                   <>Consumers who prioritize <span className="text-gold font-bold">product quality, durability, and repeat usability</span></>,
//                   <>Customers who prefer <span className="text-gold font-bold">timeless design and function</span> over trend-driven fashion</>,
//                 ].map((line, i) => (
//                   <motion.p
//                     key={i}
//                     custom={i}
//                     variants={lineVariant}
//                     initial="hidden"
//                     animate={isInView ? "visible" : "hidden"}
//                     className=" text-white/80 leading-relaxed mb-2"
//                     style={{fontSize: "17px",fontFamily: "'Space Grotesk', sans-serif",lineHeight: "1" }}
//                   >
//                     {line}
//                   </motion.p>
//                 ))}
//               {/* </div> */}

//               <div className="border-t border-foreground/30" />
//             </div>




//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WardrobeSystem;
