import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface RollingCounterProps {
  text: string;
  delay?: number;
}

const RollingCounter = ({ text, delay = 0 }: RollingCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const chars = text.split("");

  return (
    <span ref={ref} className="rolling-counter" aria-label={text}>
      {chars.map((char, i) => (
        <span key={i} className="rolling-counter__col">
          <motion.span
            className="rolling-counter__char"
            initial={{ y: "100%", opacity: 0 }}
            animate={hasAnimated ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {char}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default RollingCounter;


// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// interface RollingCounterProps {
//   text: string;
//   className?: string;
//   delay?: number;
// }

// const RollingDigit = ({ char, index, delay }: { char: string; index: number; delay: number }) => {
//   const isDigit = /\d/.test(char);

//   if (!isDigit) {
//     return (
//       <motion.span
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: delay + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
//         className="inline-block"
//       >
//         {char}
//       </motion.span>
//     );
//   }

//   const digit = parseInt(char);
//   // Create array of digits to roll through (0-9 then land on target)
//   const digits = Array.from({ length: 10 }, (_, i) => i);

//   return (
//     <span className="inline-block relative overflow-hidden" style={{ height: "1.1em", width: "0.65em" }}>
//       <motion.span
//         className="inline-flex flex-col items-center"
//         initial={{ y: "0%" }}
//         animate={{ y: `${-digit * 100}%` }}
//         transition={{
//           duration: 1.8 + index * 0.2,
//           delay: delay + index * 0.15,
//           ease: [0.25, 0.1, 0.25, 1],
//         }}
//         style={{ position: "absolute", top: 0, left: 0, right: 0 }}
//       >
//         {digits.map((d) => (
//           <span key={d} className="h-[1em] leading-[1em] flex items-center justify-center">
//             {d}
//           </span>
//         ))}
//       </motion.span>
//     </span>
//   );
// };

// const RollingCounter = ({ text, className = "", delay = 0 }: RollingCounterProps) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <span ref={ref} className={`inline-flex ${className}`}>
//       {isInView &&
//         text.split("").map((char, i) => (
//           <RollingDigit key={i} char={char} index={i} delay={delay} />
//         ))}
//     </span>
//   );
// };

// export default RollingCounter;
