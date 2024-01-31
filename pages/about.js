import Link from "next/link";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import FeedbackTwoSlider from "../src/components/FeedbackTwoSlider";
import PageBanner from "../src/components/PageBanner";
import ExperienceTeam from "../src/components/slider/ExperienceTeam";
import PhotoGallery from "../src/components/slider/PhotoGallery";
import Layout from "../src/layout/Layout";
const About = () => {
  return (
    <Layout>
      {/* Page Banner start */}
      <PageBanner pageName={"about us"} img="assets/images/banner/aboutimg.png" />
      {/* Page Banner End */}
      {/* About Section Start */}
      <section className="about-page-section rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-three-content rmb-35 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-20">
                  <span className="sub-title mb-20">About Redx</span>
                  <h2>Welcome to Redx</h2>
                </div>
                <p>
                  We pride ourselves on our extensive product range, spanning across 21 categories that include agricultural commodities, processed Agri products, Agri Inputs, Industrial Chemicals, and FMCG food products. This comprehensive approach allows us to cater to a wide array of needs, providing our customers with high-quality solutions.
                  At REDX, we prioritize a global footprint, enabling us to leverage robust sourcing networks. This, in turn, ensures that we consistently deliver top-notch products that align with the unique requirements of our customers. Our commitment extends beyond mere business operations – we actively engage with our stakeholders to foster sustainability throughout our value chain, with a keen focus on minimizing our carbon footprint.
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-lg-right">
              <div className="about-video wow fadeInRight delay-0-2s">
                <img
                  className="image"
                  src="assets/images/about/nuts.jpg"
                  alt="About"

                />
                <img
                  className="bg-shape"
                  src="assets/images/about/about-bg-shape.png"
                  alt="Shape"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/images/shapes/about-page.png"
          alt="Shape"
          className="shape"
        />
      </section>
      {/* About Section End */}
      {/* Features Section Start */}


      <section className="feature-section pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6" >
              <div className="feature-item wow hover fadeInUp delay-0-2s" >
                <div className="content" >
                  <span className="number">01</span>
                  <div className="image">
                    <img
                      src="assets/images/about/target.png"
                      alt="Feature"
                      style={{ height: "140px", width: "150px", marginTop: '25px' }}
                    />
                  </div>
                  <div style={{ marginTop: "-90px" }}>
                    <h4>Our Mission</h4>
                    <p>
                      RedX is committed to transforming industries and cultivating sustainability by providing high-quality, sustainable solutions in agriculture, industry, agro-chemicals, and plywood. Our mission focuses on enhancing productivity through technological innovation while maintaining environmental responsibility, fostering global growth, and contributing to a resilient and prosperous future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item color-two hover wow fadeInUp delay-0-4s">
                <div className="content">
                  <span className="number">02</span>
                  <div className="image">
                    <img
                      src="assets/images/about/money.png"
                      alt="Feature"
                      style={{ height: "150px", width: "150px", marginTop: '35px' }}
                    />
                  </div>
                  <div style={{ marginTop: "-65px" }}>
                    <h4>Our Values</h4>
                    <p>
                      RedX envisions a sustainable future, leading innovation in agriculture, industry, agro-chemicals, and plywood, guided by excellence, integrity, and environmental stewardship. Our commitment to community empowerment drives us to be a global leader, harmonizing technology and nature for a thriving, interconnected world.
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item color-three hover  wow fadeInUp delay-0-6s">
                <div className="content">
                  <span className="number">03</span>
                  <div className="image">
                    <img
                      src="assets/images/about/values(1).png"
                      alt="Feature"
                      style={{ height: "150px", width: "150px", marginTop: '42px' }}
                    />
                  </div>
                  <div style={{ marginTop: "-65px" }}>
                    <h4>Our Vision</h4>
                    <p>
                      RedX is dedicated to excellence, guided by values such as integrity, innovation, sustainability, and customer-centricity. Our commitment to diversity, collaboration, and resilience shapes a dynamic team, driving quality, ethical business practices, and a positive global impact in agriculture, industry, agro-chemicals, and plywood solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section End */}
      <section className="about-section-two rel z-1 mb-100" style={{ backgroundColor: '#ffe0b2' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-two-image not-rounded wow fadeInUp delay-0-2s">
                <img
                  className="image"
                  src="assets/images/about/about-left.jpg"
                  alt="About"
                />

              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two-content pt-60 wow fadeInUp delay-0-4s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-20">What We Do</span>
                  <h2>What We Do</h2>
                  <div>
                    <p style={{ fontSize: "20px ", paddingTop: "5px" }}>Environmental responsibility is ingrained in our operations, minimizing our carbon footprint lorem Our seamless collaboration across each business stage ensures the exceptional delivery of products and services Environmental responsibility is ingrained in our operations, minimizing our carbon footprint lorem Our seamless collaboration across each business stage ensures the exceptional delivery of products and services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shapes">
          <img src="assets/images/shapes/about-shape1.png" alt="Shape" />
          <img src="assets/images/shapes/about-shape2.png" alt="Shape" />
        </div>
      </section>
      {/* Team Area Start */}

      <section className="team-area pt-50 rpt-20 pb-95 rpb-65">
        <div className="container">
          <ExperienceTeam />
        </div>
      </section>
      {/* Team Area End */}
      {/* About Section Start */}
      {/* About Section End */}
      {/* Feedback Section Start */}
      {/* Feedback Section End */}
      {/* Client Logo Section Start */}
      <div className="client-logo-section text-center bg-light-green py-60">
        <div className="container">
          <ClientLogoSlider />
        </div>
        <div className="client-logo-shapes">
          <img
            className="shape-one"
            src="assets/images/shapes/cl-shape1.png"
            alt="Shape"
          />
          <img
            className="shape-two"
            src="assets/images/shapes/cl-shape2.png"
            alt="Shape"
          />
          <img
            className="shape-three"
            src="assets/images/shapes/cl-shape3.png"
            alt="Shape"
          />
          <img
            className="shape-four"
            src="assets/images/shapes/cl-shape4.png"
            alt="Shape"
          />
          <img
            className="shape-five"
            src="assets/images/shapes/cl-shape5.png"
            alt="Shape"
          />
          <img
            className="shape-six"
            src="assets/images/shapes/cl-shape6.png"
            alt="Shape"
          />
        </div>
      </div>
    </Layout >
  );
};
export default About;
