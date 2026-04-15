import { useEffect } from "react";
import Lenis from "lenis";
import { motionValue } from "framer-motion";


export const lenisScrollY = motionValue(0);

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      touchMultiplier: 1.2,
      infinite: false,
      syncTouch: false,
    });

    (window as any).__lenis = lenis;

    
    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      lenisScrollY.set(scroll);
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;










// import { useEffect } from "react";
// import Lenis from "lenis";

// const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.4,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       touchMultiplier: 1.5,
//     });

//     function raf(time: number) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     return () => lenis.destroy();
//   }, []);

//   return <>{children}</>;
// };

// export default SmoothScroll;



// import { useEffect } from "react";
// import Lenis from "lenis";

// const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.1,
//       easing: (t) => 1 - Math.pow(1 - t, 4),
//       smoothWheel: true,
//       touchMultiplier: 1.2,
//       infinite: false,
//       // Prevent Lenis from fighting Framer's useScroll
//       syncTouch: false,
//     });

//     // Expose lenis globally so Framer's useScroll can sync if needed
//     (window as any).__lenis = lenis;


//     // Dispatch native scroll event after every Lenis update
//     // so Framer Motion's useScroll() can track it
//     lenis.on("scroll", () => {
//       window.dispatchEvent(new Event("scroll", { bubbles: false }));
//     });



//     let rafId: number;
//     function raf(time: number) {
//       lenis.raf(time);
//       rafId = requestAnimationFrame(raf);
//     }
//     rafId = requestAnimationFrame(raf);

//     return () => {
//       cancelAnimationFrame(rafId);
//       lenis.destroy();
//       delete (window as any).__lenis;
//     };
//   }, []);

//   return <>{children}</>;
// };

// export default SmoothScroll;





// import { useEffect } from "react";
// import Lenis from "lenis";

// const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.0, // 🔥 faster & smoother
//       easing: (t) => 1 - Math.pow(1 - t, 3), // smoother easing
//       smoothWheel: true,
//       // smoothTouch: false, // 🔥 IMPORTANT (fixes mobile lag)
//       touchMultiplier: 1, // reduce jank
//     });

//     let rafId: number;

//     function raf(time: number) {
//       lenis.raf(time);
//       rafId = requestAnimationFrame(raf);
//     }

//     rafId = requestAnimationFrame(raf);

//     return () => {
//       cancelAnimationFrame(rafId); // 🔥 cleanup properly
//       lenis.destroy();
//     };
//   }, []);

//   return <>{children}</>;
// };

// export default SmoothScroll;