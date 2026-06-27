import "./../styles/hero.css";
import shop from "../images/shop.jpg";
import { FaPhoneAlt, FaStore, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="container hero-container">

        {/* LEFT */}

        <div className="hero-content">

          <span className="hero-location">
            <FaMapMarkerAlt />
            Opp. Virar East Railway Station
          </span>

          <h1>
            DEVDA <span>XEROX</span>
          </h1>

          <h2>
            Print with Quality,
            <br />
            Leave an Impression
          </h2>

          <p>
            Your trusted destination for Xerox, Digital Printing,
            Black Book Printing, Photo Printing, Sticker Printing,
            Flex Printing, Lamination, Rubber Stamps and much more.
          </p>

          <div className="hero-buttons">

            <a
              href="tel:9892661010"
              className="owner-btn"
            >
              <FaPhoneAlt />
              Call Owner
            </a>

            <a
              href="tel:8433177003"
              className="shop-btn"
            >
              <FaStore />
              Call Shop
            </a>

          </div>

          <Link
            to="/services"
            className="explore-btn"
          >
            Explore Our Services
          </Link>

        </div>

        {/* RIGHT */}

        <div className="hero-image">

          <img
            src={shop}
            alt="Devda Xerox"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;