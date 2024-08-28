import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { MY_NAME } from "../../utils/Constants";

export const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Software Engineer", "Full Stack Developer", "Coder"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="start-container" id="home">
      <div className="container-overlay" />
      <div className="sc-left">
        <span className="left-name-title">
          Hello, This is&nbsp;
          <span>{MY_NAME}</span>
          <span>.</span>
        </span>
        <span className="left-name-description">
          I'm a <span className="auto-input" ref={typedRef} />
        </span>
      </div>
    </div>
  );
};
