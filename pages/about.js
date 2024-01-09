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
                  <span className="sub-title mb-20">About Company</span>
                  <h2>Organic &amp; Helathy Foods Provider Farming</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo enim voluptatem
                </p>
                <div className="row mt-30">
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
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-lg-right">
              <div className="about-video wow fadeInRight delay-0-2s">
                <img
                  className="image"
                  src="assets/images/about/about-page.jpg"
                  alt="About"
                />
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a>
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
      <section className="feature-section rel z-1" style={{ padding: "0px 100px 100px 100px" }}>
        <div className="container-flud">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="p-20 text-left">
                  <span className="number">01</span>
                  <div>
                  </div>
                  <h4>Our Mission</h4>
                  <p>
                    RedX is dedicated to revolutionizing the agricultural, industrial, agro-chemical, and plywood sectors. Our mission is to provide high-quality, sustainable solutions that enhance productivity, ensuring a balance between technological innovation and environmental responsibility. Committed to customer satisfaction, we strive to be a trusted partner in growth for businesses worldwide. By fostering innovation, ethical practices, and community development, we aim to contribute to a resilient and prosperous global landscape. RedX — Transforming industries, cultivating sustainability, and building a future for generations to come.
                  </p>
                </div>
                {/* <Link href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link> */}
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item color-two wow fadeInUp delay-0-4s">
                <div className="p-20 text-left">
                  <span className="number">02</span>
                  {/* <div className="image">
                    <img
                      src="assets/images/features/feature2.png"
                      alt="Feature"
                    />
                  </div> */}
                  <h4>Our Vision</h4>
                  <p>
                    RedX envisions a sustainable future, pioneering innovation in agriculture, industry, agro-chemicals, and plywood. Guided by excellence, integrity, and environmental stewardship, we strive to redefine industry standards. Committed to empowering communities, our goal is to be a global leader, harmonizing technology and nature. Through cutting-edge solutions, we aim to optimize productivity, promote eco-friendly practices, and contribute to a thriving, interconnected world.
                  </p>
                </div>
                {/* <Link href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link> */}
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item color-three wow fadeInUp delay-0-6s">
                <div className="p-20 text-left">
                  <span className="number">03</span>
                  {/* <div className="image">
                    <img
                      src="assets/images/features/feature3.png"
                      alt="Feature"
                    />
                  </div> */}
                  <h4>Our Values</h4>
                  <p>
                    At RedX, our values form the bedrock of our commitment to excellence. Integrity guides every interaction, ensuring transparency and trust. Innovation is our constant pursuit, driving advancements in agricultural, industrial, agro-chemical, and plywood solutions. Sustainability is ingrained in our ethos, promoting environmentally responsible practices. Customer-centricity defines our approach, delivering products that exceed expectations. Collaboration and inclusivity foster a diverse, dynamic, and inspired team. RedX values resilience, embracing challenges as opportunities for growth. Together, these principles underscore our dedication to quality, ethical business practices, and positive global impact.
                  </p>
                </div>
                {/* <Link href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link> */}
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
      <section className="about-section-two rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-two-image not-rounded wow fadeInUp delay-0-2s">
                <img
                  className="image"
                  src="assets/images/about/about-page-left.jpg"
                  alt="About"
                />
                <img
                  className="about-over"
                  src="assets/images/about/about-left-over.png"
                  alt="About"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two-content pt-60 wow fadeInUp delay-0-4s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-20">Why Choose Us</span>
                  <h2>Special Care For Our Every Food &amp; Vegetable Lover</h2>
                </div>
                <div className="about-features mt-60">
                  <div className="row">
                    <div className="col-xl-4 col-md-6">
                      <div className="about-feature-item wow fadeInUp delay-0-5s">
                        <span className="number">1</span>
                        <div className="icon">
                          <i className="flaticon-offer" />
                        </div>
                        <h4>
                          <Link href="/service-details">Discount Options</Link>
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
