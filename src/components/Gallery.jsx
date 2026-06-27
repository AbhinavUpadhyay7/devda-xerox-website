import "./../styles/gallery.css";

import v1 from "../images/v1.mp4";
import v2 from "../images/v2.mp4";
import v3 from "../images/v3.mp4";
import v4 from "../images/v4.mp4";
import v5 from "../images/v5.mp4";
import v6 from "../images/v6.mp4";
import v7 from "../images/v7.mp4";
import v8 from "../images/v8.mp4";
import v9 from "../images/v9.mp4";
import v10 from "../images/v10.mp4";

const videos = [
  {
    title: "Digital Printing",
    description:
      "High-quality digital printing for documents, projects and commercial work.",
    video: v1,
  },
  {
    title: "Color Xerox",
    description:
      "Premium color xerox with sharp colors and excellent quality.",
    video: v2,
  },
  {
    title: "Black & White Prints",
    description:
      "High-quality black & white printing for documents, reports, and forms.",
    video: v9,
  },
  {
    title: "Black Book Printing",
    description:
      "Professional black book printing for engineering and college projects.",
    video: v5,
  },
  {
    title: "Sticker Printing",
    description:
      "Product labels, custom stickers and branding solutions.",
    video: v6,
  },
  {
    title: "Visiting Cards",
    description:
      "Premium business visiting card printing.",
    video: v4,
  },
  {
    title: "Trophy Sticker Printing",
    description:
      "High-quality custom trophy stickers for awards, events, and branding.",
    video: v7,
  },
  {
    title: "Custom Medals",
    description:
      "Premium-quality medals for sports events, competitions, schools, and corporate awards.",
    video: v8,
  },
  {
    title: "Lamination & Binding",
    description:
      "All size lamination and spiral binding services.",
    video: v3,
  },
  {
    title: "Rubber Stamp Making",
    description:
      "Custom rubber stamps for offices, businesses, schools, and personal use.",
    video: v10,
  },
];

function Gallery() {
  return (
    <section className="gallery">

      <div className="container">

        <h2 className="title">
          Our Gallery
        </h2>

        <p className="subtitle">
          Explore our printing services through real videos from our shop.
        </p>

        <div className="video-list">

          {videos.map((item, index) => (

            <div
              className="video-card"
              key={index}
            >

              <div className="video-info">

                <span>
                  Service {index + 1}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

              <div className="video-player">

                <video
                  controls
                  playsInline
                  preload="metadata"
                  controlsList="nodownload"
                >

                  <source
                    src={item.video}
                    type="video/mp4"
                  />

                  Your browser does not support the video tag.

                </video>

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="gallery-cta">

          <h3>
            Need Professional Printing Services?
          </h3>

          <p>
            Visit Devda Xerox for premium quality printing,
            fast service and affordable prices.
          </p>

          <div className="gallery-buttons">

            <a
              href="tel:9892661010"
              className="call-owner"
            >
              Call Owner
            </a>

            <a
              href="tel:8433177003"
              className="call-shop"
            >
              Call Shop
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Gallery;