import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/animation_map.json";

const HeroSection = () => {
  return (
    <section className="hero">

      <div className="hero_banner">
        <div className="hero-paragraph">
          <h1>World Infographic Map</h1>
          <p>
            Explore the world and celebrate diversity with us. Learn about
            different countries through their flags, names, capitals,
            populations, continents, and currencies. Together, let's embrace our
            shared global family's vibrant tapestry.
          </p>
        </div>

        <Lottie className="map" animationData={animationData} />
      </div>
    </section>
  );
};

export default HeroSection;
