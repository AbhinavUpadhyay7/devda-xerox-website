import "./../styles/contact.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUserTie,
  FaStore,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="container">

        <h2 className="title">Contact Us</h2>

        <p className="subtitle">
          We'd love to serve you. Visit our shop or call us anytime during
          working hours.
        </p>

        <div className="contact-container">

          {/* Left Side */}

          <div className="contact-info">

            <div className="contact-card">

              <FaMapMarkerAlt className="contact-icon" />

              <div>

                <h3>Shop Address</h3>

                <p>
                  Shop No. 2, Sakai Devi Apt,
                  Virar East Railway Station Road,
                  Opp. Railway Station,
                  Virar East,
                  Vasai-Virar,
                  Maharashtra - 401305
                </p>

              </div>

            </div>

            <div className="contact-card">

              <FaUserTie className="contact-icon" />

              <div>

                <h3>Owner Contact</h3>

                <a href="tel:9892661010">
                  📞 9892661010
                </a>

              </div>

            </div>

            <div className="contact-card">

              <FaStore className="contact-icon" />

              <div>

                <h3>Shop Contact</h3>

                <a href="tel:8433177003">
                  ☎️ 8433177003,7718819090
                </a>

              </div>

            </div>

            <div className="contact-card">

              <FaClock className="contact-icon" />

              <div>

                <h3>Working Hours</h3>

                <p>Monday - Sunday</p>

                <strong>8:30 AM - 9:30 PM</strong>

              </div>

            </div>

            <div className="contact-buttons">

              <a
                href="tel:9892661010"
                className="owner-btn"
              >
                Call Owner
              </a>

              <a
                href="tel:7718819090"
                className="shop-btn"
              >
                Call Shop
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="map">

            <iframe
              title="Devda Xerox"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.021921733779!2d72.81016097467425!3d19.4546216399783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9845a3d0133%3A0xe4db2217d148cc86!2sDevda%20Xerox!5e0!3m2!1sen!2sin!4v1782535990465!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;