import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import colorPalette from "@/assets/color-palette.jpg";

const colors = [
  { name: "Forest", variable: "bg-forest", description: "Depth & grounding" },
  { name: "Olive", variable: "bg-olive", description: "Nature & resilience" },
  { name: "Earth", variable: "bg-earth", description: "Warmth & stability" },
  { name: "Sand", variable: "bg-sand", description: "Light & openness" },
  { name: "Sky", variable: "bg-sky-brand", description: "Calm & horizon" },
];

const ColorSystem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={ref} className="py-32 section-padding relative overflow-hidden">
      {/* Background image */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img src={colorPalette} alt="Color palette inspiration" className="h-[120%] w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-background/85" />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-utility text-gold/70 text-xs mb-4">Palette</p>
          <h2 className="text-display text-4xl md:text-6xl font-bold text-foreground">
            Inspired by Sky, Land & Water
          </h2>
          <p className="text-editorial text-foreground/40 text-lg mt-4">
            A calm, repeatable color system designed around nature
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-3 justify-center items-stretch max-w-5xl mx-auto">
          {colors.map((color, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="flex-1 group cursor-pointer"
            >
              <div className={`${color.variable} h-40 md:h-56 transition-all duration-700 group-hover:h-72 relative`}>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
              </div>
              <div className="mt-4 space-y-1">
                <p className="text-utility text-[10px] text-gold/50">{color.name}</p>
                <p className="text-xs text-foreground/40 font-light">{color.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorSystem;
