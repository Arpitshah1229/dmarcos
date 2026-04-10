import "./BrandVideo.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BrandVideo = () => {
  const ref      = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="brand-video">
      <motion.div
        className="brand-video__wrap"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <video
          src="/videos/final video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="brand-video__video"
        />
        <div className="brand-video__overlay" />
        <div className="brand-video__label" />
      </motion.div>
    </section>
  );
};

export default BrandVideo;




// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// const BrandVideo = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <section ref={ref} className="min-h-screen flex items-center justify-center bg-black">
      
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={isInView ? { opacity: 1, scale: 1 } : {}}
//         transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//         className="w-full h-screen relative overflow-hidden"
//       >
        
//         {/* Video */}
//         <video
//           src="/videos/final video.mp4 "
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="none"
//           className="w-full h-full object-cover"
          
//         />

//         {/* Subtle overlay (important for premium feel) */}
//         <div className="absolute inset-0 bg-black/20" />

//         {/* Optional minimal text */}
//         <div className="absolute bottom-10 left-10">
//           {/* <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">
//             D’MARCOS
//           </p> */}
//         </div>

//       </motion.div>
//     </section>
//   );
// };

// export default BrandVideo;