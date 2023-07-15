import React from "react";
import "../Styles/footer.css";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import copyright from "../assets/copy.png";
import logo from "../assets/logo.png";

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
      <div className="footer-b">
        <article className="fita">
          <div className="side-a">
            <img src={logo} alt={"logo"} />

            <div>
              <p>
                Access to medical services with Certified Medical <br />{" "}
                Consultants on Medkit.
              </p>
              <p>Contact@medkit.com</p>
              <p>(233) 678-0202</p>
            </div>
            <div className="socials">
              <img src={twitter} alt={"twitter"} />
              <img src={facebook} alt={"facebook"} />
              <img src={instagram} alt={"instagram"} />
            </div>
          </div>

          <div className="side-b">
            <div className="info">
              <h5>Information</h5>
              <div>
                <p>Blog</p>
                <p>Special Offers</p>
                <p>F.A.Q</p>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
              </div>
            </div>

            <div className="links">
              <div>
                <h5>Quick Links</h5>
              </div>
              <div>
                <p>Our Doctors</p>
                <p>Book an Appointment</p>
                <p>Free Consultation</p>
              </div>
            </div>

            <div className="company">
              <div>
                <h5>Company</h5>
              </div>
              <div>
                <p>About Us</p>
                <p>Help Center</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Footer;
