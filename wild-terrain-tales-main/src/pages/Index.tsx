// import "../index.css"
import { useState, useCallback } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";

import BrandVideo from "@/components/sections/BrandVideo";

import BrandOrigin from "@/components/sections/BrandOrigin";
import Philosophy from "@/components/sections/Philosophy";
import ProductBuild from "@/components/sections/ProductBuild";
import Lookbook from "@/components/sections/Lookbook";
import UtilityLifestyle from "@/components/sections/UtilityLifestyle";
import WardrobeSystem from "@/components/sections/WardrobeSystem";
import FinalStatement from "@/components/sections/FinalStatement";
import Footer from "@/components/sections/Footer";


const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <Preloader onComplete={handleComplete} />
      {loaded && (
        <SmoothScroll>
          {/* <main className="bg-background"> */}
          <main style={{ width: "100%", overflowX: "hidden", backgroundColor: "#0a0a0a" }}>
            <Navbar />
            <Hero />
            <BrandVideo />
            <BrandOrigin />

            
            <ProductBuild />
            <Lookbook />
            <UtilityLifestyle />
            <WardrobeSystem />

            <Philosophy />
            <FinalStatement />
            <Footer />
          </main>
        </SmoothScroll>
      )}
    </>
  );
};

export default Index;
