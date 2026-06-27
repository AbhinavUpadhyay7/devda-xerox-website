import "./../styles/floating.css";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaStore,
  FaArrowUp,
} from "react-icons/fa";

function FloatingButtons() {
  return (
    <div className="floating-container">

      {/* WhatsApp */}

      <a
        href="https://wa.me/917718819090"
        target="_blank"
        rel="noreferrer"
        className="floating-btn whatsapp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Call Owner */}

      <a
        href="tel:7718819090"
        className="floating-btn owner"
        title="Call Owner"
      >
        <FaPhoneAlt />
      </a>

      {/* Call Shop */}

      <a
        href="tel:8433177003"
        className="floating-btn shop"
        title="Call Shop"
      >
        <FaStore />
      </a>

      {/* Back To Top */}

      <button
        className="floating-btn top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <FaArrowUp />
      </button>

    </div>
  );
}

export default FloatingButtons;