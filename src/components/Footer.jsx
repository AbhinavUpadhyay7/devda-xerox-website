import "./../styles/footer.css";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaUserTie,
  FaStore,
  FaPrint,
  FaImage,
  FaBook,
  FaIdCard,
  FaArrowRight
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {

  return (

<footer className="footer">

{/* TOP CTA */}

<div className="footer-cta">

<div className="container footer-cta-content">

<div>

<h2>

Need Professional Printing Services?

</h2>

<p>

We provide fast, reliable and premium quality printing
solutions for students, offices and businesses.

</p>

</div>

<div className="cta-buttons">

<a

href="tel:9892661010"

className="cta-owner"

>

<FaUserTie />

Call Owner

</a>

<a

href="tel:7718819090"

className="cta-shop"

>

<FaStore />

Call Shop

</a>

</div>

</div>

</div>

{/* MAIN FOOTER */}

<div className="container footer-grid">

{/* ABOUT */}

<div className="footer-column">

<h2 className="footer-logo">

DEVDA <span>XEROX</span>

</h2>

<p className="footer-tagline">

Print with Quality,
Leave an Impression.

</p>

<p className="footer-about">

Devda Xerox is your trusted printing partner
near Virar East Railway Station.

We provide Xerox, Digital Printing,
Photo Printing,
Black Book Printing,
Sticker Printing,
Flex Printing,
Rubber Stamps,
Lamination
and much more under one roof.

</p>

</div>

{/* QUICK LINKS */}

<div className="footer-column">

<h3>

Quick Links

</h3>

<ul>

<li>

<Link to="/">

Home

</Link>

</li>

<li>

<Link to="/services">

Services

</Link>

</li>

<li>

<Link to="/gallery">

Gallery

</Link>

</li>

<li>

<Link to="/about">

About

</Link>

</li>

<li>

<Link to="/contact">

Contact

</Link>

</li>

</ul>

</div>
        {/* OUR SERVICES */}

        <div className="footer-column">

          <h3>Our Services</h3>

          <ul className="service-list">

            <li><FaPrint /> Xerox & Printout</li>

            <li><FaPrint /> Digital Printing</li>

            <li><FaImage /> Photo Printing</li>

            <li><FaBook /> Black Book Printing</li>

            <li><FaIdCard /> Visiting Cards</li>

            <li><FaPrint /> Sticker & Label Printing</li>

            <li><FaPrint /> Flex / Banner Printing</li>

            <li><FaPrint /> Lamination & Binding</li>

          </ul>

        </div>

        {/* CONTACT */}

        <div className="footer-column">

          <h3>Contact Us</h3>

          <div className="footer-contact">

            <p>

              <FaMapMarkerAlt />

              <span>
                Shop No. 2, Sakai Devi Apt,<br />
                Opp. Virar East Railway Station,<br />
                Virar East, Maharashtra - 401305
              </span>

            </p>

            <p>

              <FaUserTie />

              <a href="tel:9892661010">
                Owner : 9892661010
              </a>

            </p>

            <p>

              <FaStore />

              <a href="tel:7718819090">
                Shop : 7718819090
              </a>

            </p>

            <p>

              <FaClock />

              <span>
                8:30 AM - 9:30 PM
              </span>

            </p>

          </div>

          <a
            href="https://maps.google.com/?q=Shop+No+2+Sakai+Devi+Apt+Virar+East+Railway+Station+Road+Virar+East+401305"
            target="_blank"
            rel="noreferrer"
            className="direction-btn"
          >

            <FaArrowRight />

            Get Directions

          </a>

        </div>

      </div>

      {/* FOOTER BOTTOM */}

      <div className="footer-bottom">

        <div className="container footer-bottom-content">

          <p>

            © {new Date().getFullYear()} <strong>Devda Xerox</strong>.
            All Rights Reserved.

          </p>

          <p>

            Designed & Developed by
            <strong> Abhinav Upadhyay</strong> ❤️

          </p>

        </div>

      </div>

    </footer>

  );

}

export default Footer;