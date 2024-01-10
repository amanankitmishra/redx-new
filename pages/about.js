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
      <PageBanner pageName={"about us"} />
      {/* Page Banner End */}
      {/* About Section Start */}
      <section className="about-page-section rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-three-content rmb-35 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-20">
                  <span className="sub-title mb-20">About Redx</span>
                  <h2>Welcome to Our Redx</h2>
                </div>
                <p>
                  We pride ourselves on our extensive product range, spanning across 21 categories that include agricultural commodities, processed Agri products, Agri Inputs, Industrial Chemicals, and FMCG food products. This comprehensive approach allows us to cater to a wide array of needs, providing our customers with high-quality solutions.
                  At REDX, we prioritize a global footprint, enabling us to leverage robust sourcing networks. This, in turn, ensures that we consistently deliver top-notch products that align with the unique requirements of our customers. Our commitment extends beyond mere business operations – we actively engage with our stakeholders to foster sustainability throughout our value chain, with a keen focus on minimizing our carbon footprint.
                </p>
                {/* <div className="row mt-30">
                  <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-wheat-sack" />
                      </div>
                      <h4>
                        <Link href="/service-details">
                          Agriculture &amp; Foods
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-fruits" />
                      </div>
                      <h4>
                        <Link href="/service-details">
                          Vegetables &amp; Fruits
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-eggs-1" />
                      </div>
                      <h4>
                        <Link href="/service-details">Farming products</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-social-care" />
                      </div>
                      <h4>
                        <Link href="/service-details">
                          Crisp Bread &amp; Cake’s
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6 text-lg-right">
              <div className="about-video wow fadeInRight delay-0-2s">
                <img
                  className="image"
                  src="assets/images/about/abouts.jpg"
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

      <section className="feature-section rel z-1" >
        <div style={{ background: '#f8f8f8', padding: '5%' }}>
          <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="col-xl-4 col-md-6">
              <div style={{ background: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', overflow: 'hidden', }}>
                <div className="p-20">
                  <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h4>Our Mission</h4>
                  </div>
                  <p>
                    RedX is dedicated to revolutionizing the agricultural, industrial, agro-chemical, and plywood sectors. Our mission is to provide high-quality, sustainable solutions that enhance productivity, ensuring a balance between technological innovation and environmental responsibility. Committed to customer satisfaction, we strive to be a trusted partner in growth for businesses worldwide. By fostering innovation, ethical practices, and community development, we aim to contribute to a resilient and prosperous global landscape. RedX — Transforming industries, cultivating sustainability, and building a future for generations to come.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div style={{ background: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', overflow: 'hidden', }}>
                <div className="p-20">
                  <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h4>Our Vision</h4>
                  </div>
                  <p>
                    RedX envisions a sustainable future, pioneering innovation in agriculture, industry, agro-chemicals, and plywood. Guided by excellence, integrity, and environmental stewardship, we strive to redefine industry standards. Committed to empowering communities, our goal is to be a global leader, harmonizing technology and nature. Through cutting-edge solutions, we aim to optimize productivity, promote eco-friendly practices, and contribute to a thriving, interconnected world.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div style={{ background: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', overflow: 'hidden', }}>
                <div className="p-20">
                  <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h4>Our Values</h4>
                  </div>
                  <p>
                    At RedX, our values form the bedrock of our commitment to excellence. Integrity guides every interaction, ensuring transparency and trust. Innovation is our constant pursuit, driving advancements in agricultural, industrial, agro-chemical, and plywood solutions. Sustainability is ingrained in our ethos, promoting environmentally responsible practices. Customer-centricity defines our approach, delivering products that exceed expectations. Collaboration and inclusivity foster a diverse, dynamic, and inspired team. RedX values resilience, embracing challenges as opportunities for growth. Together, these principles underscore our dedication to quality, ethical business practices, and positive global impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
      {/* Features Section End */}
      {/* Team Area Start */}
      <section className="team-area pt-50 rpt-20 pb-95 rpb-65">
        <div className="container">
          <ExperienceTeam />
        </div>
      </section>
      {/* Team Area End */}
      {/* About Section Start */}
      <section className="about-section-two rel z-1" style={{ backgroundColor: '#ffe0b2' }}>
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

                {/* <div className="about-features mt-60">
                  <div className="row">
                    <div className="col-xl-4 col-md-6">
                      <div className="about-feature-item wow fadeInUp delay-0-5s">
                        <span className="number">1</span>
                        <div className="icon">
                          <i className="flaticon-offer" />
                        </div>
                        <h4>
                          What We Do
                        </h4>
                        <p>Sit amet consectetur adipis cing elit sed eiusmoe</p>
                        <img src="assets/images/about/arrow.png" alt="Arrow" />
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="about-feature-item wow fadeInUp delay-0-6s">
                        <span className="number">2</span>
                        <div className="icon">
                          <i className="flaticon-return-box" />
                        </div>
                        <h4>
                          <Link href="/service-details">
                            Best Return Policy
                          </Link>
                        </h4>
                        <p>Sit amet consectetur adipis cing elit sed eiusmoe</p>
                        <img src="assets/images/about/arrow.png" alt="Arrow" />
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="about-feature-item wow fadeInUp delay-0-7s">
                        <span className="number">3</span>
                        <div className="icon">
                          <i className="flaticon-24-hours" />
                        </div>
                        <h4>
                          <Link href="/service-details">Online Support</Link>
                        </h4>
                        <p>Sit amet consectetur adipis cing elit sed eiusmoe</p>
                        <img src="assets/images/about/arrow.png" alt="Arrow" />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="about-shapes">
          <img src="assets/images/shapes/about-shape1.png" alt="Shape" />
          <img src="assets/images/shapes/about-shape2.png" alt="Shape" />
        </div>
      </section>
      {/* About Section End */}
      {/* Feedback Section Start */}
      <section className="feedback-section pt-100 rpt-70 pb-130 rpb-100">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">Customer Reviews</span>
            <h2>Valuable Customer’s Feedback</h2>
          </div>
        </div>
        <FeedbackTwoSlider />
      </section>
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
    </Layout>
  );
};
export default About;
