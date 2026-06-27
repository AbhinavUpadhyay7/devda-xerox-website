import "./../styles/price.css";

const prices = [
  {
    service: "B/W Xerox",
    size: "A4",
    price: "₹2 / Page",
  },
  {
    service: "Color Xerox",
    size: "A4",
    price: "₹10 / Page",
  },
  {
    service: "B/W Printout",
    size: "A4",
    price: "₹3 / Page",
  },
  {
    service: "Color Printout",
    size: "A4",
    price: "₹15 / Page",
  },
  {
    service: "Lamination",
    size: "A4",
    price: "₹30",
  },
  {
    service: "Spiral Binding",
    size: "Up to 100 Pages",
    price: "₹50",
  },
];

function PriceList() {
  return (
    <section className="price-section" id="price">

      <div className="container">

        <h2 className="title">Price List</h2>

        <p className="subtitle">
          Affordable pricing with high quality printing services.
        </p>

        <div className="price-grid">

          {prices.map((item, index) => (

            <div className="price-card" key={index}>

              <h3>{item.service}</h3>

              <span>{item.size}</span>

              <h2>{item.price}</h2>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default PriceList;