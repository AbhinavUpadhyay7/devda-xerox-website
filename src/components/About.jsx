import "./../styles/about.css";
import shop from "../images/shop.jpg";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaUserTie,
  FaStore,
  FaCheckCircle,
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <div className="container about-container">

        <div className="about-image">
          <img src={shop} alt="Devda Xerox" />
        </div>

        <div className="about-content">

          <h2 className="title">About Devda Xerox</h2>

          <p className="about-text">
            <strong>Devda Xerox</strong> is one of the most trusted printing &
            Xerox centers in Virar East. We provide high-quality Xerox,
            Digital Printing, Photo Printing, Lamination, Spiral Binding,
            Rubber Stamps, Flex Printing, Sticker Printing and many more
            printing solutions under one roof.
          </p>

          <p className="about-text">
            We focus on quality, affordable pricing, quick delivery and
            customer satisfaction. Whether you need one page or bulk
            printing, we are always ready to help.
          </p>

          <div className="highlights">

            <div className="highlight">
              <FaCheckCircle />
              <span>Color & B/W Xerox</span>
            </div>

            <div className="highlight">
              <FaCheckCircle />
              <span>Digital Printing</span>
            </div>

            <div className="highlight">
              <FaCheckCircle />
              <span>Photo Printing</span>
            </div>

            <div className="highlight">
              <FaCheckCircle />
              <span>Flex / Banner Printing</span>
            </div>

            <div className="highlight">
              <FaCheckCircle />
              <span>Rubber Stamps</span>
            </div>

            <div className="highlight">
              <FaCheckCircle />
              <span>Black Book Printing</span>
            </div>

          </div>

          <div className="about-details">

            <div className="detail">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4>Shop Address</h4>

                <p>
                  Shop No. 2, Sakai Devi Apt,
                  Virar East Railway Station Road,
                  Opp. Railway Station,
                  Virar East,
                  Maharashtra - 401305
                </p>
              </div>
            </div>

            <div className="detail">
              <FaUserTie className="icon" />
              <div>
                <h4>Owner Contact</h4>

                <a href="tel:7718819090">
                  7718819090
                </a>
              </div>
            </div>

            <div className="detail">
              <FaStore className="icon" />
              <div>
                <h4>Shop Contact</h4>

                <a href="tel:8433177003">
                  8433177003
                </a>
              </div>
            </div>

            <div className="detail">
              <FaClock className="icon" />
              <div>
                <h4>Working Hours</h4>

                <p>Daily : 8:30 AM - 9:30 PM</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;