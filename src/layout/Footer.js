import dynamic from "next/dynamic";
import Link from "next/link";

const Counter = dynamic(() => import("../components/Counter"), {
  ssr: false,
});

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <DefaultFooter />;
    case 3:
    // return <Footer3 />;

    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const ScrollTopBtn = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      style={{ display: "inline-block" }}
      className="scroll-top scroll-to-target"
      data-target="html"
      onClick={() => scrollTop()}
    >
      <span className="fas fa-angle-double-up" />
    </button>
  );
};

const DefaultFooter = () => (
  <footer className="main-footer bg-dark text-white">
    <div className="container pt-40">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 order-md-2">
          <div className="footer-widget about-widget text-center">
            <div className="footer-logo mb-10">
              <Link href="/">
                <a>
                  <img src="assets/images/logos/logoFooter.png" alt="Logo" style={{ height: "60px", width: '60px' }} />
                </a>
              </Link>
            </div>
            <p>
              We pride ourselves on our extensive product range, spanning across 21 categories that include agricultural commodities, processed Agri products, Agri Inputs, Industrial Chemicals, and FMCG food products.
            </p>
            <div className="social-style-two pt-10">
              <Link href="/404">
                <a>
                  <i className="fab fa-facebook-f" />
                </a>
              </Link>
              <Link href="/404">
                <a>
                  <i className="fab fa-twitter" />
                </a>
              </Link>
              <Link href="/404">
                <a>
                  <i className="fab fa-linkedin-in" />
                </a>
              </Link>
              <Link href="/404">
                <a>
                  <i className="fab fa-youtube" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 order-md-1">
          <div className="footer-widget menu-widget" style={{ marginLeft: '50' }} >
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>

              <li>
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </li>

              <li>
                <Link href="/product">
                  <a>Our Product</a>
                </Link>
              </li>

              <li>
                <Link href="/gallery">
                  <a>Gallary</a>
                </Link>
              </li>


              <li>
                <Link href="/contact">
                  <a>Contact Us</a>
                </Link>
              </li>

            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 order-md-3">
          <div className="footer-widget contact-widget">
            <h4 className="footer-title">Contact Details</h4>

            <ul>
              <li>
                <i className="fal fa-map-marker-alt" />
                12 woodlands square, #12-74 woods square tower 1 Singapore-737715
              </li>
              <li>
                <i className="far fa-phone" />
                <a href="calto:+012(345)67899">+65-65149885</a>
              </li>
              <li>
                <i className="far fa-phone" />
                <a href="calto:+012(345)67899">+65-65179892</a>
              </li>
              <li>
                <i className="far fa-envelope" />
                <a href="mailto:support@gmail.com">info@redx.com.sg
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-area pt-25 ">
        <p>Copyright © 2024 Redx. All Rights Reserved.</p>
        <ScrollTopBtn />
      </div>
    </div>
    <div className="footer-shapes">
      <img
        className="footer-bg"
        src="assets/images/background/footer-bg-shape.png"
        alt="Shape"
      />
      <img
        className="shape-one"
        src="assets/images/shapes/footer1.png"
        alt="Shape"
      />
      <img
        className="shape-two"
        src="assets/images/shapes/footer2.png"
        alt="Shape"
      />
      <img
        className="shape-three"
        src="assets/images/shapes/footer3.png"
        alt="Shape"
      />
      <img
        className="shape-four"
        src="assets/images/shapes/footer4.png"
        alt="Shape"
      />
    </div>
  </footer>
);
