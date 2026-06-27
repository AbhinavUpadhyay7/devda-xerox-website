import "./../styles/services.css";

import {
  FaCopy,
  FaPrint,
  FaImage,
  FaCamera,
  FaBook,
  FaIdCard,
  FaStamp,
  FaFileAlt,
  FaTags,
  FaPalette,
  FaLayerGroup,
  FaFilePdf
} from "react-icons/fa";

const serviceCategories = [
  {
    title: "Xerox & Printing",
    services: [
      { icon: <FaCopy />, name: "Black & White Xerox" },
      { icon: <FaPalette />, name: "Color Xerox" },
      { icon: <FaPrint />, name: "Black & White Print" },
      { icon: <FaPrint />, name: "Color Print" },
      { icon: <FaBook />, name: "Black Book Printing" },
      { icon: <FaFilePdf />, name: "Document Scanning" }
    ]
  },

  {
    title: "Digital Printing",
    services: [
      { icon: <FaPrint />, name: "Digital Printing" },
      { icon: <FaTags />, name: "Product Label Printing" },
      { icon: <FaTags />, name: "Sticker Printing" },
      { icon: <FaStamp />, name: "Trophy Sticker Printing" },
      { icon: <FaIdCard />, name: "Visiting Cards" },
      { icon: <FaFileAlt />, name: "Brochures" },
      { icon: <FaFileAlt />, name: "Catalogues" },
      { icon: <FaFileAlt />, name: "Pamphlets" }
    ]
  },

  {
    title: "Photo & Frame",
    services: [
      { icon: <FaCamera />, name: "Passport Photo" },
      { icon: <FaImage />, name: "Photo Printing" },
      { icon: <FaImage />, name: "Digital Lab Photo Print (Up to 3x10 ft)" },
      { icon: <FaImage />, name: "Photo Frames" }
    ]
  },

  {
    title: "Binding & Lamination",
    services: [
      { icon: <FaBook />, name: "Spiral Binding" },
      { icon: <FaLayerGroup />, name: "Lamination (All Sizes)" },
      { icon: <FaLayerGroup />, name: "Lamination Removal" }
    ]
  },

  {
    title: "Business Printing",
    services: [
      { icon: <FaStamp />, name: "Urgent Rubber Stamps" },
      { icon: <FaPrint />, name: "Flex / Banner Printing" },
      { icon: <FaPrint />, name: "Vinyl Printing" }
    ]
  }
];

function Services() {

  return (

    <section className="services">

      <div className="container">

        <h2 className="title">
          Our Services
        </h2>

        <p className="subtitle">
          One Stop Solution for Xerox, Printing & Digital Services
        </p>

        {serviceCategories.map((category, index) => (

          <div key={index} className="category">

            <h3 className="category-title">
              {category.title}
            </h3>

            <div className="service-grid">

              {category.services.map((item, i) => (

                <div className="service-card" key={i}>

                  <div className="service-icon">
                    {item.icon}
                  </div>

                  <h4>{item.name}</h4>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Services;