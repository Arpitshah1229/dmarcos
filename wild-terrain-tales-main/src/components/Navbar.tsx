import "./Navbar.css";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 200);
  });

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar__inner">
        {/* Left links */}
        <div className="navbar__links">
          <a href="#collection" className="navbar__link">Collection</a>
          <a href="#story" className="navbar__link">Story</a>
        </div>

        {/* Center brand */}
        <motion.a
          href="#"
          className="navbar__brand"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="navbar__brand-text">D’MARCOS</span>
        </motion.a>

        {/* Right links */}
        <div className="navbar__links navbar__links--right">
          <a href="#lookbook" className="navbar__link">Lookbook</a>
          <a href="#wardrobe" className="navbar__link">Wardrobe</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;




// import { motion, useScroll, useMotionValueEvent } from "framer-motion";
// import { useState } from "react";

// const Navbar = () => {
//   const [hidden, setHidden] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const { scrollY } = useScroll();

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const previous = scrollY.getPrevious() ?? 0;
//     setHidden(latest > previous && latest > 200);
//     setScrolled(latest > 50);
//   });

//   return (
//     <motion.nav
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
//       transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
//       className="fixed top-0 left-0 right-0 z-50 bg-transparent"
//     >
//       <div className="flex items-center justify-between section-padding py-5 md:py-6">
//         {/* Left links */}
//         <div className="flex items-center gap-6 md:gap-10 flex-1">
//           <a href="#collection" className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-foreground hover:text-gold transition-colors duration-300 font-medium"
//             style={{ fontFamily: "'Century Gothic Bold', 'Century Gothic', CenturyGothic, sans-serif", fontWeight: 700 }}>
//             Collection
//           </a>
//           <a href="#story" className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-foreground hover:text-gold transition-colors duration-300 font-medium"
//             style={{ fontFamily: "'Century Gothic Bold', 'Century Gothic', CenturyGothic, sans-serif", fontWeight: 700 }}>
//             Story
//           </a>
//         </div>

//         {/* Center brand name — large */}
//         <motion.a
//           href="#"
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.97 }}
//           className="text-center"
//         >
//           <span
//             className="text-2xl md:text-3xl font-black tracking-[0.15em] text-foreground uppercase"
//             style={{ fontFamily: "'Century Gothic Bold', 'Century Gothic', CenturyGothic, sans-serif", fontWeight: 700 }}
//           >
//             D’MARCOS
//           </span>
//         </motion.a>

//         {/* Right links */}
//         <div className="flex items-center gap-6 md:gap-10 flex-1 justify-end">
//           <a href="#lookbook" className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-foreground hover:text-gold transition-colors duration-300 font-medium"
//             style={{ fontFamily: "'Century Gothic Bold', 'Century Gothic', CenturyGothic, sans-serif", fontWeight: 700 }}>
//             Lookbook
//           </a>
//           <a href="#wardrobe" className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-foreground hover:text-gold transition-colors duration-300 font-medium"
//             style={{ fontFamily: "'Century Gothic Bold', 'Century Gothic', CenturyGothic, sans-serif", fontWeight: 700 }}>
//             Wardrobe
//           </a>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;
