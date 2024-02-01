import dynamic from "next/dynamic";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import { HomeSlider1 } from "../src/components/HomeSlider";
import Layout from "../src/layout/Layout";
import { productActive } from "../src/sliderProps";

import FeedbackTwoSlider from "../src/components/FeedbackTwoSlider";
const MunfimCountdown = dynamic(
  () => import("../src/components/MunfimCountdown"),
  {
    ssr: false,
  }
);
const Index = () => {
  return (
    <Layout header={1}>
      {/*End Hidden Sidebar */}
      {/* Slider Section Start */}
      <section className="slider-section bg-lighter">
        <div className="main-slider-active">
          <HomeSlider1 />
        </div>
        <img
          className="bg-leaf"
          src="assets/images/slider/slider-bg-leaf.png"
          alt="Shape"
        />
        <img
          className="bg-shape"
          src="assets/images/slider/slider-bg-shape.png"
          alt="Shape"
        />
      </section>
      {/* Slider Section End */}
      {/* Category Section Start */}
      <section className="category-section pt-130 rpt-100">
        <div className="container">
          <div className="row align-items-end pb-35">
            <div className="col-lg-7 wow fadeInUp delay-0-2s">
              <div className="section-title mb-20">
                <span className="sub-title mb-20">
                  Agriculture , Agro Chemicals , Industrial ,Plywood Product
                </span>
                <h2>Polymers</h2>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp delay-0-4s">
              <div className="text mb-20">
                <p>
                  On the other hand we denounce with righteou indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment so blinded by desire
                </p>
              </div>
            </div>
          </div>
          <div className="category-wrap">
            <div className="category-item wow fadeInUp delay-0-3s">
              <div className="icon">
                <img src="assets/images/category/Melamine-img1.jpg" alt="Icon" style={{ borderRadius: "50%" }} />
              </div>
              <h5>
               Melamine Powder
              </h5>
              <img src="assets/images/category/arrow.png" alt="Arrow" />
            </div>
            <div className="category-item wow fadeInUp delay-0-4s">
              <div className="icon">
                <img src="assets/images/category/pvc-icon1.webp" alt="Icon" style={{ borderRadius: "50%", height: "100px" }} />
              </div>
              <h5>
               PVC Resin H1000R  ( CHINA )
              </h5>
              <img src="assets/images/category/arrow.png" alt="Arrow" />
            </div>
            <div className="category-item wow fadeInUp delay-0-5s">
              <div className="icon">
                <img src="assets/images/category/pvc-h6.jpg" alt="Icon" style={{ borderRadius: "50%", height: "100px", width: '100%' }} />
              </div>
              <h5>
               PVC Resin H66
              </h5>
              <img src="assets/images/category/arrow.png" alt="Arrow" />
            </div>
            <div className="category-item wow fadeInUp delay-0-6s">
              <div className="icon">
                <img src="assets/images/category/LG-CHEM-LS100H-PVC-Resin.jpg" alt="Icon" style={{ borderRadius: "50%", height: "100px", width: '100%' }} />
              </div>
              <h5>
                PVC Resin LS100H (KOREA)
              </h5>
              <img src="assets/images/category/arrow.png" alt="Arrow" />
            </div>
            <div className="category-item wow fadeInUp delay-0-7s">
              <div className="icon">
                <img src="assets/images/category/hygain-hs-1000r-pvc-resin.png" alt="Icon" style={{ borderRadius: "50%", height: "100px", width: '100%' }} />
              </div>
              <h5>
               PVC Resin H1000R (CHINA)
                {/* Furniture Grade */}
              </h5>
              <img src="assets/images/category/arrow.png" alt="Arrow" />
            </div>
          
          </div>
        </div>
      </section>
      {/* Category Section End */}
      {/* About Section Start */}
      <section className="about-section pt-85 rpt-55 pb-130 rpb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-images wow fadeInLeft delay-0-2s">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img src="assets/images/about/abouts1.png" alt="About" />
                  </div>
                  <div className="col-6">
                    <img src="assets/images/about/ureaChemical.png" alt="About" />
                    <img src="assets/images/about/pvc-resin1.jpeg" alt="About" />
                  </div>
                </div>
                <div className="offer">
                  <img src="assets/images/shapes/organic.png" alt="Offer" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content rpt-65 wow fadeInRight delay-0-2s">
                <div className="section-title mb-35 ">
                  <span className="sub-title mb-20">About Redx</span>
                  <h2>Welcome To Redx</h2>
                </div>
                <Tab.Container defaultActiveKey={"agriculture"} >
                  <Nav className="nav justify-content-between">
                    <div className="d-flex flex-wrap">
                      <li className="nav-item">
                        <Link href="/product">
                          <h4 style={{ cursor: "pointer" }} className="nav-link" >Agriculture Product</h4>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/product">
                          <h4 style={{ cursor: "pointer" }} className="nav-link" >Agro Chemical</h4>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/product">
                          <h4 style={{ cursor: "pointer" }} className="nav-link" >Industrial Product</h4>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/product">
                          <h4 className="nav-link" style={{ cursor: "pointer" }} >Plywood Product</h4>
                        </Link>
                      </li>
                    </div>
                  </Nav>
                  <Tab.Content className="tab-content pt-25">
                    <Tab.Pane className="tab-pane fade" eventKey="agriculture">
                      <p>
                        On the other hand we denounce with righteous indignation
                        and dislike men who are beguiled and demoralized by the
                        charms of pleasure of the moment so blinded by desire,
                        that they cannot foresee the pain
                      </p>

                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="vegetables">
                      <p>
                        Charms of pleasure of the moment so blinded by desire,
                        that they cannot foresee the pain On the other hand we
                        denounce with righteous indignation and dislike men who
                        are beguiled and demoralized by the 
                      </p>
                      <div className="author-wrap">
                        <img
                          src="assets/images/about/author.jpg"
                          alt="Authro"
                        />
                        <div className="title">
                          <h4>Russell J. Knoll</h4>
                          <span>CEO &amp; Founder</span>
                        </div>
                        <img
                          src="assets/images/about/signature.png"
                          alt="Signature"
                        />
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
      {/* Offer Banners Start */}
      <section className="offer-banners-area ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item hover color-two wow fadeInUp delay-0-2s">
                <div className="value ms-20 pe-20">

                  <h4>Value Chain</h4>
                  <p>Our seamless collaboration across each business stage ensures the exceptional delivery of products and services.</p>
                  <Link href="/value-chain">
                    <a className="theme-btn style-two">
                      Details <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
                {/* <div className="image">
                  <img
                    src="assets/images/offers/offer-banner1.png"
                    alt="Offer Banner"
                  />
                </div> */}
                <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg1.png"
                  alt="Offer BG"
                />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item hover wow fadeInUp delay-0-4s">
                <div >
                  <h4>Sustainability</h4>
                  <p>Environmental responsibility is ingrained in our operations, minimizing our carbon footprint for a healthier planet.</p>
                  <Link href="/sustainability">
                    <a className="theme-btn style-two">
                      Details <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
                {/* <div className="image">
                  <img
                    src="assets/images/offers/offer-banner2.png"
                    alt="Offer Banner"
                  />
                </div> */}
                <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg2.png"
                  alt="Offer BG"
                />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item hover color-three wow fadeInUp delay-0-6s">
                <div>
                  <h4>Our Business</h4>
                  <p>A commitment to excellence, a diverse product range, and a deep focus on well-being – we go beyond transactions creating lasting impacts.</p>
                  <Link href="/our-business">
                    <a className="theme-btn style-two">
                      Details <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
                {/* <div className="image">
                  <img
                    src="assets/images/offers/offer-banner3.png"
                    alt="Offer Banner"
                  />
                </div> */}
                <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg3.png"
                  alt="Offer BG"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Offer Banners End */}
      {/* Product Section Start */}
      <section className="product-section pt-100 rpt-70 pb-130 rpb-100">
        <div className="container-fluid">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">

            </span>
            <h2>Products</h2>
          </div>
          <Slider {...productActive} className="product-active">

            <div className="product-item wow fadeInUp delay-0-4s">
              <div >
                <img src="assets/images/gellery/RawCashews.webp" alt="Product" style={{ height: "300px",  width: "100%"  }} />
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-5s">
              <div>
                <img src="assets/images/gellery/urea1.png" alt="Product" style={{ height: "300px",  width: "100%"  }} />
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-5s">
              <div>
                <img src="assets/images/gellery/furnituregradeplywood.jpg" alt="Product" style={{ height: "300px",  width: "100%"  }} />
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-5s">
              <div>
                <img src="assets/images/gellery/Rise1.png" alt="Product" style={{ height: "300px",  width: "100%" ,  width: "100%"  }} />
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-2s">
              <div >
                <img src="assets/images/gellery/Rise.png" alt="Product" style={{ height: "300px", width: "100%" }} />
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-2s" >
              <div>
                <img src="assets/images/gellery/Blackpaper.png" alt="Product" style={{ height: "300px", width: "100%" }} />
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-5s">
              <div>
                <img src="assets/images/gellery/portfolio11.jpg" alt="Product" style={{ height: "300px",  width: "100%"  }} />
              </div>
            </div>

          </Slider>
        </div>
      </section>
      {/* Product Section End */}
      {/* Video Area Start */}
      {/* <div className="video-area">
        <div className="container">
          <div
            className="video-inner wow fadeInUp delay-0-2s"
            style={{ backgroundImage: "url(assets/images/video/video-bg.jpg)" }}
          >
            <i className="flaticon-leaf-1" />
            <span className="video-text">Watch Videos</span>
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div> */}
      {/* Video Area End */}
      {/* Counters Start */}
      <section className="special-offer bg-lighter pt-10 pb-80 ">
        <div className="special-offer-content text-center py-130 rpy-100 wow fadeInUp delay-0-2s">
          <div className="section-title mb-30 mr-5" >
            {/* <span className="sub-title mb-20">35% Off for Fruits</span> */}
            <h2>Our Business in Numbers</h2>
          </div>
          <p>
            We pride ourselves on our extensive product range, spanning across 21 categories that include agricultural commodities, processed Agri products, Agri Inputs, Industrial Chemicals, and FMCG food products.
          </p>
          <MunfimCountdown />
          {/* <div className="count-down-btns mt-10">
            <Link href="/shop-grid">
              <a className="theme-btn">
                Shop Now <i className="fas fa-angle-double-right" />
              </a>
            </Link>
            <Link href="/about">
              <a className="theme-btn style-two">
                use code <i className="fas fa-angle-double-right" />
              </a>
            </Link>
          </div> */}
        </div>
        <img
          className="offer-bg"
          src="assets/images/offers/special-offer-bg.png"
          alt="Offer BG"
        />
        <img
          className="munakoiso"
          src="assets/images/shapes/munakoiso.png"
          alt="Munakoiso"
        />
        <img
          className="litchi"
          src="assets/images/shapes/litchi.png"
          alt="Litchi"
        />
        {/* <img
          className="special-offer-left"
          src="assets/images/offers/9"
          alt="Offer"
        /> */}
        <img
          className="special-offer-right"
          src="assets/images/offers/tractor.png"
          alt="Offer"
        />
      </section>
      {/* Counters End */}
      {/* Call To Action Area Start */}
      <section className="cta-area">
        <div className="container">
          <div
            className="cta-inner overlay text-white wow fadeInUp delay-0-2s"
            style={{
              backgroundImage: "url(assets/images/background/cta-bg.jpg)",
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="section-title mt-20 mb-15">
                  <span className="sub-title mb-15">Need Any Supports</span>
                  <h3>Get Our Quality Foods</h3>
                </div>
              </div>
              <div className="col-lg-4 text-lg-right">
                <Link href="/contact">
                  <a className="theme-btn   my-15">
                    Get In Touch <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call To Action Area End */}
      {/* Gallery Area Start */}
      {/* <section className="gallery-area pt-130 rpt-100">
        <PhotoGallery />
      </section> */}
      {/* Gallery Area End */}
      {/* Feedback Section Start */}
      <section className="feedback-section pt-100 rpt-70 pb-130 rpb-100">
        <div className="container">
          <div className="section-title text-center mb-60">
            {/* <span className="sub-title mb-20">Customer Reviews</span> */}
            <h2>Our Testimonials</h2>
          </div>
        </div>
        <FeedbackTwoSlider />
      </section>
      {/* Feedback Section End */}
      {/* News Section Start */}
      <section className="news-section rpt-100 pb-100 rpb-40">
        <div className="container">
          <div className="section-title text-center mb-60">
            {/* <span className="sub-title mb-20">Read Article Tips</span>
            <h2>Latest News &amp; Blog</h2> */}
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/news/news1.png" alt="News" />
                  {/* <span className="date">
                    <b>25</b> July
                  </span> */}
                </div>
                <div className="content">
                  <span className="sub-title">Industrial Product</span>
                  {/* <h4>
                    Unicode UTF8 Character Sets They Sltimate Guide Systems
                  </h4> */}
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/news/news2.png" alt="News" />
                  {/* <span className="date">
                    <b>25</b> July
                  </span> */}
                </div>
                <div className="content">
                  <span className="sub-title">Agricultural Product</span>
                  {/* <h4>
                    Quality Foods Requirments For Every Human Body’s
                  </h4> */}
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/news/plywood1.png" alt="News" />
                  {/* <span className="date">
                    <b>25</b> July
                  </span> */}
                </div>
                <div className="content">
                  <span className="sub-title">Plywood Product</span>
                  {/* <h4>
                    Choose Awesome Vegetables For Your Daily Life Routine
                  </h4> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="news-shapes">
          <img
            className="onion"
            src="assets/images/shapes/onion.png"
            alt="Onion"
          />
          <img
            className="two-leaf"
            src="assets/images/slider/two-lear.png"
            alt="Leaf"
          />
          <img
            className="half-leaf"
            src="assets/images/slider/half-leaf.png"
            alt="Leaf"
          />
          <img
            className="leaf-two"
            src="assets/images/shapes/leaf-three.png"
            alt="Leaf"
          />
          <img
            className="leaf-three"
            src="assets/images/shapes/leaf-four.png"
            alt="Leaf"
          />
        </div>
      </section>
      {/* News Section End */}
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
export default Index;
