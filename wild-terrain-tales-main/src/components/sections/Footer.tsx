import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative border-t border-foreground/10">
      {/* Main footer */}
      <div className="section-padding py-20 md:py-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Brand column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-5"
            >
              <h3
                className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-[0.1em] mb-6"
                style={{ fontFamily: "'Century Gothic Bold', 'Century Gothic', CenturyGothic, sans-serif", fontWeight: 700 }}
              >
                D’MARCOS
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed max-w-sm mb-8">
                India's first true Utility-Lifestyle brand. Premium everyday wear inspired by nature, rooted in terrain, built for real life.
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="w-16 h-[2px] bg-gold/40 origin-left"
              />
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="md:col-span-2"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6 font-medium">Navigate</p>
              <ul className="space-y-3">
                {["Collection", "Story", "Lookbook", "Wardrobe"].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 + i * 0.08 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-sm text-foreground/60 hover:text-gold transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="md:col-span-2"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6 font-medium">Connect</p>
              <ul className="space-y-3">
                {[
                  { name: "Instagram", Link: "https://www.instagram.com/dmarcos.in?igsh=dG83dWF0dGJ4anc0", external: true },
                  { name: "LinkedIn", Link: "https://www.linkedin.com/company/dmarcos",external: true },
                  { name: "Contact", Link: "https://mail.google.com/mail/?view=cm&fs=1&to=hello@dmarcos.in&su=Inquiry%20from%20Website&body=Hi%20D'MARCOS%20team,", external: true }].map((item, i) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.5 + i * 0.08 }}
                    >
                      <a
                        href={item.Link}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="text-sm text-foreground/60 hover:text-gold transition-colors duration-300"
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="md:col-span-3"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6 font-medium">Stay Informed</p>
              <p className="text-sm text-foreground/50 mb-4 leading-relaxed">
                Join the few. Get early access to collections and stories.
              </p>
              <div className="flex border-b border-foreground/20 pb-2 group focus-within:border-gold transition-colors duration-300">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-transparent text-sm text-foreground/80 placeholder:text-foreground/30 flex-1 outline-none"
                />
                <button className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 hover:text-gold transition-colors duration-300 font-medium">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="section-padding py-6 border-t border-foreground/5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.4 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium"
          >
            © 2026 D'MARCOS. All rights reserved.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.3 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium"
          >
            Few & Fearless
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
