import "./Lookbook.css";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import lookbookDetail1  from "@/assets/lookbook-detail-1.webp";
import lookbookDetail2  from "@/assets/lookbook-detail-2.webp";
import lookbookDetail3  from "@/assets/lookbook-detail-3.webp";
import lookbookDetail4  from "@/assets/lookbook-detail-4.webp";
import lookbookDetail5  from "@/assets/lookbook-detail-5.webp";
import lookbookDetail6  from "@/assets/lookbook-detail-6.webp";
import lookbookDetail7  from "@/assets/lookbook-detail-7.webp";
import lookbookDetail8  from "@/assets/lookbook-detail-8.webp";
import lookbookDetail9  from "@/assets/lookbook-detail-9.webp";
import lookbookDetail10 from "@/assets/lookbook-detail-10.webp";
import lookbookDetail11 from "@/assets/lookbook-detail-11.webp";
import lookbookDetail12 from "@/assets/lookbook-detail-12.webp";

const images = [
  { src: lookbookDetail1,  alt: "Safari utility style" },
  { src: lookbookDetail2,  alt: "Terrain lookbook" },
  { src: lookbookDetail3,  alt: "Outdoor editorial" },
  { src: lookbookDetail4,  alt: "Safari elegance" },
  { src: lookbookDetail5,  alt: "Field style" },
  { src: lookbookDetail6,  alt: "Safari utility style" },
  { src: lookbookDetail7,  alt: "Terrain lookbook" },
  { src: lookbookDetail8,  alt: "Outdoor editorial" },
  { src: lookbookDetail9,  alt: "Field style" },
  { src: lookbookDetail10, alt: "Safari utility style" },
  { src: lookbookDetail11, alt: "Terrain lookbook" },
  { src: lookbookDetail12, alt: "Outdoor editorial" },
];

const CARD_COUNT = images.length; // 12

/**
 * CAROUSEL MATH:
 * Card width is set in CSS as a vw value (e.g. 30vw on desktop).
 * We read it from the DOM at runtime so it's always accurate
 * regardless of responsive breakpoint.
 *
 * Total strip width = cardWidth * 12 + gap * 11 + padding * 2
 * We need to translate by: -(totalStripWidth - viewportWidth)
 * This ensures the last card ends exactly at the right edge.
 */
const Lookbook = () => {
  const ref      = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const heroRef  = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const heroScale = useTransform(heroScroll, [0, 0.5], [1.15, 1]);

  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: stickyScroll } = useScroll({
    target: stickyContainerRef,
    offset: ["start start", "end end"],
  });

  // Calculate the exact pixel translation needed
  const [translateEnd, setTranslateEnd] = useState("-260vw");

  useEffect(() => {
    const calculateEnd = () => {
      if (!stripRef.current) return;
      const stripWidth  = stripRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const travelDistance = stripWidth - viewportWidth;
      // Negative because we move LEFT
      setTranslateEnd(`-${travelDistance}px`);
    };

    calculateEnd();

    // Recalculate on resize (e.g. orientation change)
    window.addEventListener("resize", calculateEnd);
    return () => window.removeEventListener("resize", calculateEnd);
  }, []);

  const carouselX = useTransform(stickyScroll, [0, 1], ["0px", translateEnd],{ clamp: false });

  return (
    <section ref={ref} className="lookbook" id="lookbook">

      {/* ── Hero video ── */}
      <div ref={heroRef} className="lookbook__hero">
        <motion.div className="lookbook__hero-scale" style={{ scale: heroScale }}>
          <video
            src="/videos/NewLookBookEdit(1).mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="lookbook__video"
          />
        </motion.div>

        <div className="lookbook__hero-overlay" />

        <div className="lookbook__title-block">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="lookbook__word-row">
              <h2 className="lookbook__word">
                {"LOOK".split("").map((char, i) => (
                  <motion.span key={`l-${i}`}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={isInView ? { y: "0%", opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  >{char}</motion.span>
                ))}
              </h2>
              <h2 className="lookbook__word">
                {"BOOK".split("").map((char, i) => (
                  <motion.span key={`b-${i}`}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={isInView ? { y: "0%", opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  >{char}</motion.span>
                ))}
              </h2>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="lookbook__divider"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* ── Sticky carousel ── */}
      <div ref={stickyContainerRef} className="lookbook__sticky-container">
        <div className="lookbook__sticky-viewport">
          <motion.div
            ref={stripRef}
            className="lookbook__strip"
            style={{ x: carouselX }}
          >
            {images.map((img, i) => (
              <motion.div
                key={i}
                className="lookbook__card"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.04 + i * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <img
                  src={img.src}
                  loading={i < 4 ? "eager" : "lazy"}
                  decoding="async"
                  alt={img.alt}
                  className="lookbook__card-img"
                  width="400"
                  height="533"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Lookbook;





// import "./Lookbook.css";
// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import { useRef } from "react";

// import lookbookDetail1  from "@/assets/lookbook-detail-1.webp";
// import lookbookDetail2  from "@/assets/lookbook-detail-2.webp";
// import lookbookDetail3  from "@/assets/lookbook-detail-3.webp";
// import lookbookDetail4  from "@/assets/lookbook-detail-4.webp";
// import lookbookDetail5  from "@/assets/lookbook-detail-5.webp";
// import lookbookDetail6  from "@/assets/lookbook-detail-6.webp";
// import lookbookDetail7  from "@/assets/lookbook-detail-7.webp";
// import lookbookDetail8  from "@/assets/lookbook-detail-8.webp";
// import lookbookDetail9  from "@/assets/lookbook-detail-9.webp";
// import lookbookDetail10 from "@/assets/lookbook-detail-10.webp";
// import lookbookDetail11 from "@/assets/lookbook-detail-11.webp";
// import lookbookDetail12 from "@/assets/lookbook-detail-12.webp";

// const images = [
//   { src: lookbookDetail1,  alt: "Safari utility style" },
//   { src: lookbookDetail2,  alt: "Terrain lookbook" },
//   { src: lookbookDetail3,  alt: "Outdoor editorial" },
//   { src: lookbookDetail4,  alt: "Safari elegance" },
//   { src: lookbookDetail5,  alt: "Field style" },
//   { src: lookbookDetail6,  alt: "Safari utility style" },
//   { src: lookbookDetail7,  alt: "Terrain lookbook" },
//   { src: lookbookDetail8,  alt: "Outdoor editorial" },
//   { src: lookbookDetail9,  alt: "Field style" },
//   { src: lookbookDetail10, alt: "Safari utility style" },
//   { src: lookbookDetail11, alt: "Terrain lookbook" },
//   { src: lookbookDetail12, alt: "Outdoor editorial" },
// ];

// // How far to scroll the strip:
// // 12 cards × 30vw each = 360vw total strip width
// // Viewport = 100vw, so we need to translate by -(360vw - 100vw) = -260vw
// // We use a percentage of the STRIP width, so: -260/360 = ~-72%
// // Expressed as percentage of strip: "-72%" moves last card into view
// // Tuned to "-78%" to account for gap and padding
// // const CAROUSEL_END = "-78%";


 
// /*
//   CAROUSEL TRANSLATION FORMULA:
//   - 12 cards, each 30vw wide on desktop
//   - Total strip width = 12 × 30vw + 11 × 1rem gap + 4rem padding
//   - We need to move: (total_strip_width - 100vw) to the left
//   - As a % of the strip itself: (12×30 - 100) / (12×30) = 260/360 ≈ 72%
//   - We use pixel-based translation via vw units for accuracy:
//     translate from 0 to -(12 × cardWidth - 100vw - padding)
//   - On mobile (78vw cards): 12×78 - 100 = 836vw to translate
//   - We express as % of CONTAINER (100vw), so use vw strings directly
// */
// const getCarouselEnd = () => {
//   // This runs on the client — use window.innerWidth to pick the right value
//   // But since useTransform is static, we use CSS-aware vw strings
//   // The formula: translate enough to show all 12 cards
//   // For 30vw cards: need to move 11 cards × 30vw = 330vw, minus start offset
//   // Expressed as negative vw: "calc(-330vw + some padding)"
//   // Framer accepts strings with units directly
//   return "calc(-330vw + 100vw - 4rem)";
// };







// const Lookbook = () => {
//   const ref       = useRef<HTMLElement>(null);
//   const isInView  = useInView(ref, { once: true, margin: "-100px" });
//   const heroRef   = useRef<HTMLDivElement>(null);

//   const { scrollYProgress: heroScroll } = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"],
//   });
//   const heroScale = useTransform(heroScroll, [0, 0.5], [1.15, 1]);

//   /* Sticky horizontal scroll */
//   const stickyContainerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress: stickyScroll } = useScroll({
//     target: stickyContainerRef,
//     offset: ["start start", "end end"],
//   });
//   // const carouselX = useTransform(stickyScroll, [0, 1], ["0%", "-75%"]);
//   // Translate the strip from 0 to CAROUSEL_END as user scrolls through 300vh
//   const carouselX = useTransform(stickyScroll, [0, 1], ["0%","calc(-260vw - 4rem)" ]);
//   return (
//     <section ref={ref} className="lookbook" id="lookbook">

//       {/* ── Hero video panel ── */}
//       <div ref={heroRef} className="lookbook__hero">
//         <motion.div className="lookbook__hero-scale" style={{ scale: heroScale }}>
//           <video
//             src="/videos/NewLookBookEdit(1).mp4"
//             autoPlay
//             loop
//             muted
//             playsInline
//             preload="none"
//             className="lookbook__video"
//           />
//         </motion.div>

//         <div className="lookbook__hero-overlay" />

//         {/* LOOK / BOOK giant type */}
//         <div className="lookbook__title-block">
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//           >
//             <div className="lookbook__word-row">
//               {/* LOOK */}
//               <h2 className="lookbook__word">
//                 {"LOOK".split("").map((char, i) => (
//                   <motion.span
//                     key={`l-${i}`}
//                     initial={{ y: "100%", opacity: 0 }}
//                     animate={isInView ? { y: "0%", opacity: 1 } : {}}
//                     transition={{ duration: 0.8, delay: 0.1 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
//                   >
//                     {char}
//                   </motion.span>
//                 ))}
//               </h2>
//               {/* BOOK */}
//               <h2 className="lookbook__word">
//                 {"BOOK".split("").map((char, i) => (
//                   <motion.span
//                     key={`b-${i}`}
//                     initial={{ y: "100%", opacity: 0 }}
//                     animate={isInView ? { y: "0%", opacity: 1 } : {}}
//                     transition={{ duration: 0.8, delay: 0.3 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
//                   >
//                     {char}
//                   </motion.span>
//                 ))}
//               </h2>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom divider */}
//         <motion.div
//           className="lookbook__divider"
//           initial={{ scaleX: 0 }}
//           animate={isInView ? { scaleX: 1 } : {}}
//           transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
//         />
//       </div>

//       {/* ── Sticky horizontal carousel ── */}
//       <div ref={stickyContainerRef} className="lookbook__sticky-container">
//         <div className="lookbook__sticky-viewport">
//           <motion.div className="lookbook__strip" style={{ x: carouselX }}>
//             {images.map((img, i) => (
//               <motion.div
//                 key={i}
//                 className="lookbook__card"
//                 initial={{ opacity: 0, scale: 0.92 }}
//                 animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{
//                   duration: 1,
//                   delay: 0.05 + i * 0.04, /* tighter stagger — less delay on later cards */
//                   ease: [0.16, 1, 0.3, 1],
//                 }}
//                 whileHover={{ scale: 1.02 , transition: { duration: 0.3 } }}
//               >
//                 <img
//                   src={img.src}
//                   // loading="lazy"
//                   loading={i < 3 ? "eager" : "lazy"}
//                   decoding="async"
//                   alt={img.alt}
//                   className="lookbook__card-img"
//                   /* Give browser a size hint so it can allocate space before decode */
//                   width="400"
//                   height="533"
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default Lookbook;

















// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import { useRef } from "react";

// import lookbookDetail1 from "@/assets/lookbook-detail-1.webp";
// import lookbookDetail2 from "@/assets/lookbook-detail-2.webp";
// import lookbookDetail3 from "@/assets/lookbook-detail-3.webp";
// import lookbookDetail4 from "@/assets/lookbook-detail-4.webp";
// import lookbookDetail5 from "@/assets/lookbook-detail-5.webp";
// import lookbookDetail6 from "@/assets/lookbook-detail-6.webp";
// import lookbookDetail7 from "@/assets/lookbook-detail-7.webp";
// import lookbookDetail8 from "@/assets/lookbook-detail-8.webp";
// import lookbookDetail9 from "@/assets/lookbook-detail-9.webp";
// import lookbookDetail10 from "@/assets/lookbook-detail-10.webp";
// import lookbookDetail11 from "@/assets/lookbook-detail-11.webp";
// import lookbookDetail12 from "@/assets/lookbook-detail-12.webp";


// const images = [
//   { src: lookbookDetail1, alt: "Safari utility style" },
//   { src: lookbookDetail2, alt: "Terrain lookbook" },
//   { src: lookbookDetail3, alt: "Outdoor editorial" },
//   { src: lookbookDetail4, alt: "Safari elegance" },
//   { src: lookbookDetail5, alt: "Field style" },
//   { src: lookbookDetail6, alt: "Safari utility style" },
//   { src: lookbookDetail7, alt: "Terrain lookbook" },
//   { src: lookbookDetail8, alt: "Outdoor editorial" },
//   { src: lookbookDetail9, alt: "Field style" },
//   { src: lookbookDetail10, alt: "Safari utility style" },
//   { src: lookbookDetail11, alt: "Terrain lookbook" },
//   { src: lookbookDetail12, alt: "Outdoor editorial" },
// ];

// const Lookbook = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-200px" });
//   const heroRef = useRef(null);
//   const { scrollYProgress: heroScroll } = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"],
//   });

//   const heroScale = useTransform(heroScroll, [0, 0.5], [1.15, 1]);

//   // Sticky horizontal scroll — pin the carousel while scrolling vertically
//   const stickyContainerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress: stickyScroll } = useScroll({
//     target: stickyContainerRef,
//     offset: ["start start", "end end"],
//   });
//   // Move from 0% to -75% so all images scroll through
//   const carouselX = useTransform(stickyScroll, [0, 1], ["0%", "-75%"]);

//   return (
//     <section ref={ref} id="lookbook" className="py-0">
//       {/* Hero lookbook image — full viewport with LOOK/BOOK bottom-left like reference */}
//       <div ref={heroRef} className="relative h-screen overflow-hidden">
//         <motion.div style={{ scale: heroScale }} className="h-full w-full">
//           <video
//             src="/videos/NewLookBookEdit(1).mp4"
//             autoPlay
//             loop
//             muted
//             playsInline
//             preload="none"
//             className="h-full w-full object-cover"
//           />
//         </motion.div>
//         <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/50" />

//         {/* LOOK BOOK — positioned higher, touching the hat line */}
//         <div className="absolute bottom-[10%] md:bottom-[5%] left-6 md:left-8 lg:left-15">
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//           >
//             <div className="flex flex-col" style={{ lineHeight: 0.88 }}>
//               <h2
//                 className="text-white uppercase tracking-tight text-[22vw] md:text-[18vw] lg:text-[15vw]"
//                 style={{ fontFamily: "'Century Gothic Bold', 'Century Gothic', CenturyGothic, sans-serif", fontWeight: 700 }}
//               >
//                 {"LOOK".split("").map((char, i) => (
//                   <motion.span
//                     key={`l-${i}`}
//                     initial={{ y: "100%", opacity: 0 }}
//                     animate={isInView ? { y: "0%", opacity: 1 } : {}}
//                     transition={{ duration: 0.8, delay: 0.1 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
//                     className="inline-block"
//                   >
//                     {char}
//                   </motion.span>
//                 ))}
//               </h2>
//               <h2
//                 className="text-white uppercase tracking-tight text-[22vw] md:text-[18vw] lg:text-[15vw]"
//                 style={{ fontFamily: "'Century Gothic Bold', 'Century Gothic', CenturyGothic, sans-serif", fontWeight: 700 }}
//               >
//                 {"BOOK".split("").map((char, i) => (
//                   <motion.span
//                     key={`b-${i}`}
//                     initial={{ y: "100%", opacity: 0 }}
//                     animate={isInView ? { y: "0%", opacity: 1 } : {}}
//                     transition={{ duration: 0.8, delay: 0.3 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
//                     className="inline-block"
//                   >
//                     {char}
//                   </motion.span>
//                 ))}
//               </h2>
//             </div>
//           </motion.div>
//         </div>

//         {/* Right side editorial text — matching reference */}
//         {/* <div className="absolute right-6 md:right-12 lg:right-20 bottom-8 md:bottom-12 max-w-xs text-right">
//           <motion.p
//             initial={{ opacity: 0, x: 60 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="text-white/90 text-sm md:text-base leading-relaxed mb-6"
//           >
//             Rooted in earth, shaped by intention. This collection moves through tones of olive, beige, and forest colors borrowed from landscapes that endure without asking for attention.
//           </motion.p>
//           <motion.p
//             initial={{ opacity: 0, x: 60 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1, delay: 0.7 }}
//             className="text-white/90 text-sm md:text-base leading-relaxed mb-6"
//           >
//             Silhouettes are relaxed yet deliberate, designed to breathe, layer, and move with the body. Textures feel lived-in, familiar, and quietly strong like fabric shaped by time rather than trend.
//           </motion.p>
//           <motion.p
//             initial={{ opacity: 0, x: 60 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1, delay: 0.9 }}
//             className="text-white/90 text-sm md:text-base leading-relaxed"
//           >
//             This is everyday wear grounded in nature made for those who prefer presence over performance, and strength without spectacle.
//           </motion.p>
//         </div> */}

//         {/* Bottom divider line */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           animate={isInView ? { scaleX: 1 } : {}}
//           transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
//           className="absolute bottom-0 left-0 right-0 h-px bg-white/30 origin-left"
//         />
//       </div>

//       {/* Sticky horizontal scroll carousel — tall container creates scroll room */}
//       {/* <div ref={stickyContainerRef} className="relative" style={{ height: "300vh" }}>
//         <div className="sticky top-0 h-screen overflow-hidden flex items-center">
//           <motion.div
//             className="flex gap-3 px-2"
//             style={{ x: carouselX }}
//           >
//             {images.map((img, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.85 }}
//                 animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ duration: 1, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
//                 whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
//                 className="flex-shrink-0 w-[45vw] md:w-[30vw] h-[70vh] overflow-hidden group cursor-pointer"
//               >
//                 <img
//                   src={img.src}
//                   alt={img.alt}
//                   className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div> */}


     



//       <div ref={stickyContainerRef} className="relative" style={{ height: "300vh" }}>
//         <div className="sticky top-0 h-screen overflow-hidden flex items-center">

//           <motion.div
//             className="flex gap-4 px-4"
//             style={{ x: carouselX }}
//           >
//             {images.map((img, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.92 }}
//                 animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{
//                   duration: 1,
//                   delay: 0.1 + i * 0.08,
//                   ease: [0.16, 1, 0.3, 1],
//                 }}
//                 whileHover={{ scale: 1.02 }}
//                 className="flex-shrink-0 w-[45vw] md:w-[30vw] h-[70vh] overflow-hidden rounded-xl bg-neutral-900/40 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
//               >

//                 {/* Image */}
//                 <img
//                   src={img.src}
//                   loading="lazy"
//                   alt={img.alt}
//                   className="h-full w-full object-cover transition-transform duration-700 ease-out"
//                 />

//               </motion.div>
//             ))}
//           </motion.div>

//         </div>
//       </div>





//     </section>
//   );
// };

// export default Lookbook;
