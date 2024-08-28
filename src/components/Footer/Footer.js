import React from "react";
import "./Footer.css";
import {
  BEST_RESOLUTION,
  BROWSERS_NAME,
  HEADER_OPTIONS,
  MY_NAME,
  SOCIAL_URLs,
  TECHNOLOGIES_USED,
} from "../../utils/Constants";
import { SocialIcon } from "react-social-icons";
import { scrollToDiv } from "../../utils/Utils";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-about">
            <span>About this website</span>
            <span>
              This webpage is developed by pure use of {TECHNOLOGIES_USED}.
              <br />
              Best viewed in {BROWSERS_NAME} browsers with resolution of{" "}
              {BEST_RESOLUTION}
            </span>
          </div>
          <div className="quick-links">
            <span>Quick Links</span>
            <span>
              <ul>
                {HEADER_OPTIONS.map((option, index) => (
                  <li key={index} onClick={() => scrollToDiv(option.id)}>
                    {option.label}
                  </li>
                ))}
              </ul>
            </span>
          </div>
          <div className="social-icons">
            <span>Follow on: </span>
            <span className="social-icons-set">
              {SOCIAL_URLs.map((url, index) => (
                <SocialIcon
                  key={index}
                  url={url.link}
                  title={url.title}
                  target="_blank"
                  className="social-icon"
                />
              ))}
            </span>
          </div>
        </div>
        <div className="footer-copyright">
          ©&nbsp;2024 {MY_NAME}. All rights reserved.
        </div>
      </footer>
    </>
  );
};
