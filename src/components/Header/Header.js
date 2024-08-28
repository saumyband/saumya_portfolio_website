import React, { useEffect, useState } from "react";
import { HEADER_OPTIONS, MY_NAME } from "../../utils/Constants";
import "./Header.css";
import { scrollToDiv } from "../../utils/Utils";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled ? "header-scrolled" : ""}`}>
      <div className="header-left">
        <span onClick={() => scrollToDiv("home")}>Portfolio.</span>
      </div>
      <div className="header-right">
        {HEADER_OPTIONS.map((item, index) => (
          <span key={index} onClick={() => scrollToDiv(item.id)}>
            {item.label}
          </span>
        ))}
      </div>
    </header>
  );
}

export default Header;
