import React from "react";
import { HEADER_OPTIONS, SKILLS } from "../../utils/Constants";

export const Skills = () => {
  return (
    <div className="skills" id={HEADER_OPTIONS[2].id}>
      <div className="skills-content">
        <ul>
          {SKILLS.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="skills-heading">{HEADER_OPTIONS[2].label}.</div>
    </div>
  );
};
