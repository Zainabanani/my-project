import React from "react";
import "../Styles/footer.css";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import copyright from "../assets/copy.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-a">
        <article className="futa">
          <div>
            <h1>Find & follow us</h1>
          </div>
          <div className="socials">
            <img src={twitter} alt={"twitter"} />
            <img src={facebook} alt={"facebook"} />
            <img src={instagram} alt={"instagram"} />
          </div>
          <div>
            <p>Tel: (233) 678-0202</p>
            <p>Fax: 0300000025</p>
            <p>Email: medkit@gmail.com</p>
          </div>
          <div className="copyright">
            <p>Copyright</p>
            <img src={copyright} alt={"copyright"} />
            <p>2023 All Rights Reserved</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Footer;
