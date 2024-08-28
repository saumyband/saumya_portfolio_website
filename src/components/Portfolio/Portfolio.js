import React from "react";
import "../../assets/styling/Pages.css";
import { AboutMe } from "../AboutMe/AboutMe";
import { Home } from "../Home/Home";
import { Skills } from "../Skills/Skills";
import { Contact } from "../Contact/Contact";

export const Portfolio = () => {
  return (
    <>
      <Home />
      <AboutMe />
      <Skills />
      <Contact />
    </>
  );
};
