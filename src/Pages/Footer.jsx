import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__copyright">
            <div className="row">
              <div className="col-lg-12">
                <p className="footer__copyright__text">
                  Copyright © {new Date().getFullYear()} All Rights Reserved |
                  Octa Smart
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
