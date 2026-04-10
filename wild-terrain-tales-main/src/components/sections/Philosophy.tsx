import "./Philosophy.css";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import groupSafari from "@/assets/product-build2.webp";
import founder1 from "@/assets/founder-1.png";
import founder2 from "@/assets/founder-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Philosophy = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY     = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);

  return (
    <section ref={ref} className="philosophy">

      {/* ── Parallax background ── */}
      <motion.div className="philosophy__bg" style={{ y: bgY, scale: bgScale }}>
        <img
          src={groupSafari}
          alt="Group safari lifestyle"
          className="philosophy__bg-img"
        />
        <div className="philosophy__bg-overlay" />
      </motion.div>

      {/* ── Content ── */}
      <div className="philosophy__content">
        <div className="philosophy__inner">
          <div className="philosophy__text">

            {/* "Why Us" heading */}
            <motion.div
              className="philosophy__heading-row"
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="philosophy__why">Why</p>
              <h2 className="philosophy__us">Us</h2>
            </motion.div>

            {/* Body copy + founders */}
            <motion.div
              className="philosophy__body"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 0.85, x: 0 } : {}}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="philosophy__para">
                D'MARCOS is built by a founding team that combines operational discipline with in house creative
                depth. I grew up immersed in business for over two decades and have previously built and scaled a
                revenue generating venture. I understand margins, supply chains, capital efficiency, and long term
                decision making fundamentals that define success in apparel.
              </p>
              <p className="philosophy__para">
                My co-founder and sister brings formal design education and over eight years of professional creative
                experience. She leads product, visual identity, and brand storytelling with clarity and cohesion.
              </p>
              <p className="philosophy__para">
                Together, we unite structured execution with cohesive brand building under one roof. We may not
                claim legacy experience in the industry, but we bring alignment, discipline, and the commitment to
                build this patiently and at scale.
              </p>

              {/* Founder photos */}
              <motion.div
                className="philosophy__founders"
                initial={{ opacity: 0, x: 80 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Founder 1 */}
                <div className="philosophy__founder">
                  <div className="philosophy__avatar">
                    <motion.img
                      src={founder1}
                      loading="lazy"
                      decoding="async"
                      alt="Co-founder"
                      className="philosophy__avatar-img"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <a
                    href="https://www.linkedin.com/in/mini-choudhary-9494a0a3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="philosophy__linkedin"
                  >
                   {/* <FontAwesomeIcon icon={byPrefixAndName.fab['linkedin']} /> Mini Choudhary */}
                   <FontAwesomeIcon icon={faLinkedin} /> Mini Choudhary
                  </a>
                </div>

                {/* Founder 2 */}
                <div className="philosophy__founder">
                  <div className="philosophy__avatar">
                    <motion.img
                      src={founder2}
                      loading="lazy"
                      decoding="async"
                      alt="Co-founder"
                      className="philosophy__avatar-img"
                      style={{ objectPosition: "center 20%" }}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <a
                    href="https://www.linkedin.com/in/sanskarchoudhary1999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="philosophy__linkedin"
                  >
                    <FontAwesomeIcon icon={faLinkedin} /> Sanskar Choudhary
                  </a>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;



// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import { useRef } from "react";
// import groupSafari from "@/assets/product-build2.webp";
// import founder1 from "@/assets/founder-1.png";
// import founder2 from "@/assets/founder-2.png";

// const Philosophy = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-150px" });
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
//   const bgScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);

//   return (
//     <section ref={ref} className="relative min-h-screen overflow-hidden">
//       {/* Background image */}
//       <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
//         <img
//           src={groupSafari}
//           alt="Group safari lifestyle"
//           className="h-[130%] w-full object-cover opacity-50"
//           style={{ filter: "brightness(1.3)" }}
//         />
//         <div className="absolute inset-0 bg-background/40" />
//       </motion.div>

//       <div className="relative z-10 flex items-center min-h-screen section-padding py-32">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-start">
//           {/* Left — Content */}
//           <div className="space-y-10">
//             {/* Our Vision */}
//             {/* <motion.div
//               initial={{ opacity: 0, x: -60 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
//             >
//               <p className="text-utility text-gold text-xs mb-3">Our</p>
//               <h2 className="text-display text-4xl md:text-5xl font-black text-foreground uppercase mb-6">
//                 Vision
//               </h2>
//             </motion.div>

//             <motion.p
//               initial={{ opacity: 0, x: -40 }}
//               animate={isInView ? { opacity: 0.85, x: 0 } : {}}
//               transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//               className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-3xl"
//             >
//               Is to bring the best from India for India and for the world.
//               D'MARCOS is born from a deep reverence for the wild forests, terrain, and the quiet strength of
//               nature. We translate that raw, grounded energy into durable, purposeful apparel for the modern
//               explorer. Every garment is built around earthy palettes, timeless silhouettes, and functionality that
//               goes beyond trends.
//             </motion.p> */}

//             {/* Why Us */}
//             <motion.div
//               initial={{ opacity: 0, x: -60 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
//               className="flex items-end gap-1"
//             >
//               <p className=" text-gold text-7xl mb-4 leading-none">Why</p>
//               <h2 className="text-display text-4xl md:text-9xl font-black text-foreground uppercase mb-0 leading-none"
//               style={{fontSize: "9em"}}>
//                 Us
//               </h2>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               animate={isInView ? { opacity: 0.85, x: 0 } : {}}
//               transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
//               className="space-y-4 max-w-3xl text-white leading-relaxed"
//               style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px" }}
//             >
//               <p className=" text-white/80 leading-relaxed">
//                 D'MARCOS is built by a founding team that combines operational discipline with in house creative
//                 depth. I grew up immersed in business for over two decades and have previously built and scaled a
//                 revenue generating venture. I understand margins, supply chains, capital efficiency, and long term
//                 decision making fundamentals that define success in apparel.
//               </p>
//               <p className=" text-white/80 leading-relaxed">
//                 My co-founder and sister brings formal design education and over eight years of professional creative
//                 experience. She leads product, visual identity, and brand storytelling with clarity and cohesion.
//               </p>
//               <p className=" text-white/80 leading-relaxed">
//                 Together, we unite structured execution with cohesive brand building under one roof. We may not
//                 claim legacy experience in the industry, but we bring alignment, discipline, and the commitment to
//                 build this patiently and at scale.
//               </p>

//               {/* Right — Founder Photos */}
//               <motion.div
//                 initial={{ opacity: 0, x: 80 }}
//                 animate={isInView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
//                 className="flex justify-center items-center gap-14 pt-6"
//               >
//                 {/* Founder 1 */}
//                 <div className="text-center">
//                   <div className="w-32 h-32 md:w-40 md:h-40 mb-2 rounded-full overflow-hidden border border-yellow-400/70">
//                     <motion.img
//                       src={founder1}
//                       loading="lazy"
//                       alt="Co-founder"
//                       className="w-full h-full object-cover"
//                       style={{ filter: "brightness(0.95) contrast(1.05)" }}
//                       whileHover={{ scale: 1.08 }}
//                       transition={{ duration: 0.4 }}
//                     />
//                   </div>

//                   <a
//                     href="https://www.linkedin.com/in/mini-choudhary-9494a0a3"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-lg text-yellow-400/80 hover:text-foreground/70 transition-colors duration-300"
//                   >
//                     LinkedIn
//                   </a>
//                 </div>

//                 {/* Founder 2 */}
//                 <div className="text-center">
//                   <div className="w-32 h-32 md:w-40 md:h-40 mb-2 rounded-full overflow-hidden border border-yellow-400/70">
//                     <motion.img
//                       src={founder2}
//                       loading="lazy"
//                       alt="Co-founder"
//                       className="w-full h-full object-cover object-[center_20%]"
//                       style={{ filter: "brightness(0.95) contrast(1.05)" }}
//                       whileHover={{ scale: 1.08 }}
//                       transition={{ duration: 0.4 }}
//                     />
//                   </div>

//                   <a
//                     href="https://www.linkedin.com/in/sanskarchoudhary1999"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-lg text-yellow-400/80 hover:text-foreground/70 transition-colors duration-300"
//                   >
//                     LinkedIn
//                   </a>
//                 </div>
//               </motion.div>





//             </motion.div>

//             {/* Closing line */}
//             {/* <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 1.4, delay: 1, ease: [0.16, 1, 0.3, 1] }}
//               className="text-base md:text-lg text-foreground/90 leading-relaxed pt-4"
//             >
//               Built in <span className="text-gold font-bold">India</span>.
//               Rooted in the <span className="text-gold font-bold">wild</span>.
//               Created for the <span className="text-gold font-bold">world</span>.
//             </motion.p> */}
//           </div>


//         </div>
//       </div>
//     </section>
//   );
// };

// export default Philosophy;
