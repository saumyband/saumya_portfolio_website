import React from "react";
import { HEADER_OPTIONS } from "../../utils/Constants";

export const AboutMe = () => {
  const aboutMe = [
    "I'm Saumya, a Full Stack Developer focused on creating efficient products by leveraging my skills extensively to develop & deliver the dynamic product.",
    "I'm a creative problem-solver and a collaborative team player who adapts seamlessly to new challenges.",
    "Choose me for your project to benefit from my passion for crafting efficient, creative solutions and my dedication to driving your success.",
  ];

  return (
    <div className="about-me" id={HEADER_OPTIONS[1].id}>
      <div className="about-heading">{HEADER_OPTIONS[1].label}.</div>
      <div className="about-text">
        {aboutMe.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};
