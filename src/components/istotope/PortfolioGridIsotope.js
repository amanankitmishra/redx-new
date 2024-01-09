import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const PortfolioGridIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-active", {
        itemSelector: ".item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");
  return (
    <section className="portfolio-fluid-area rel z-1 py-130 rpy-100">
      <div className="container">
        <div className="row align-items-end pb-40">
          <div className="col-lg-6 wow fadeInUp delay-0-2s">
            <div className="section-title mb-20">
              <span className="sub-title mb-20">Photo Gallery</span>
              <h2>Insite Photo Gallery</h2>
            </div>
          </div>
          <div className="col-lg-6 text-lg-right wow fadeInUp delay-0-4s">
            <ul className="portfolio-filter mb-20">
              <li
                data-filter="*"
                className={`c-pointer ${activeBtn("*")}`}
                onClick={handleFilterKeyChange("*")}
              >
                Show All
              </li>
              <li
                data-filter=".Agriculture"
                className={`c-pointer ${activeBtn("Agriculture")}`}
                onClick={handleFilterKeyChange("Agriculture")}
              >
                Agriculture
              </li>
              <li
                data-filter=".Agro"
                className={`c-pointer ${activeBtn("Agro")}`}
                onClick={handleFilterKeyChange("Agro")}
              >
                Agro
              </li>
              <li
                data-filter=".Industrial"
                className={`c-pointer ${activeBtn("Industrial")}`}
                onClick={handleFilterKeyChange("Industrial")}
              >
                Industrial
              </li>
              <li
                data-filter=".Plywood"
                className={`c-pointer ${activeBtn("Plywood")}`}
                onClick={handleFilterKeyChange("Plywood")}
              >
                PlyWood
              </li>

            </ul>
          </div>
        </div>
        <div className="row portfolio-active">
          <div className="col-lg-4 col-sm-6 item Agriculture">
            <div className="gallery-style-two wow fadeInUp delay-0-2s">
              <img src="assets/images/gellery/AgriblackPaper.jpg" alt="Portfolio" />
              <div className="gallery-over">
                <div className="content">
                  <span className="category">Foods</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 item Agro">
            <div className="gallery-style-two wow fadeInUp delay-0-6s">
              <img src="assets/images/gellery/TreeUrea.avif" alt="Portfolio" />
              <div className="gallery-over">
                <div className="content">
                  <span className="category">Foods</span>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 item fruits Agriculture">
            <div className="gallery-style-two wow fadeInUp delay-0-4s">
              <img src="assets/images/gellery/AgriCashewNuts.jpg" alt="Portfolio" />
              <div className="gallery-over">
                <div className="content">
                  <span className="category">Foods</span>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 item fruits Agro">
            <div className="gallery-style-two wow fadeInUp delay-0-4s">
              <img src="assets/images/gellery/nitrogen.jpg" alt="Portfolio" />
              <div className="gallery-over">
                <div className="content">
                  <span className="category">Foods</span>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 item fruits Agriculture">
            <div className="gallery-style-two wow fadeInUp delay-0-4s">
              <img src="assets/images/gellery/icumsa100.webp" alt="Portfolio" />
              <div className="gallery-over">
                <div className="content">
                  <span className="category">Foods</span>

                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 item  Agro">
            <div className="gallery-style-two wow fadeInUp delay-0-6s">
              <img src="assets/images/gellery/urea.jpg" alt="Portfolio" />
              <div className="gallery-over">
                <div className="content">
                  <span className="category">Foods</span>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 item Plywood">
            <div className="gallery-style-two wow fadeInUp delay-0-2s">
              <img src="assets/images/gellery/furnituregradeplywood.jpg" alt="Portfolio" />
              <div className="gallery-over">
                <div className="content">
                  <span className="category">Foods</span>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 item bread Agriculture">
            <div className="gallery-style-two wow fadeInUp delay-0-4s">
              <img src="assets/images/gellery/AgrihRise(1).jpg" alt="Portfolio" />
              <div className="gallery-over">
                <div className="content">
                  <span className="category">Foods</span>

                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 item Agriculture">
            <div className="gallery-style-two wow fadeInUp delay-0-2s">
              <img src="assets/images/gellery/blackPaper.webp" alt="Portfolio" />
              <div className="gallery-over">
                <div className="content">
                  <span className="category">Foods</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 item Industrial">
            <div className="gallery-style-two wow fadeInUp delay-0-2s">
              <img src="assets/images/gellery/pvcresin.jpg" alt="Portfolio" />
              <div className="gallery-over">
                <div className="content">
                  <span className="category">Foods</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 item Agriculture">
            <div className="gallery-style-two wow fadeInUp delay-0-4s">
              <img src="assets/images/gellery/portfolio8.jpg" alt="Portfolio" />
              <div className="gallery-over">
                <div className="content">
                  <span className="category">Foods</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 item fruits Agriculture">
            <div className="gallery-style-two wow fadeInUp delay-0-6s">
              <img src="assets/images/gellery/portfolio9.jpg" alt="Portfolio" />
              <div className="gallery-over">
                <div className="content">
                  <span className="category">Foods</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 item bread">
            <div className="gallery-style-two wow fadeInUp delay-0-2s">
              <img
                src="assets/images/gellery/portfolio10.jpg"
                alt="Portfolio"
              />
              <div className="gallery-over">
                <div className="content">
                  <span className="category">Foods</span>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 item milk fruits">
            <div className="gallery-style-two wow fadeInUp delay-0-4s">
              <img
                src="assets/images/gellery/portfolio11.jpg"
                alt="Portfolio"
              />

            </div>
          </div>
          <div className="col-lg-4 col-sm-6 item fruits">
            <div className="gallery-style-two wow fadeInUp delay-0-6s">
              <img
                src="assets/images/gellery/Rise.jpg"
                alt="Portfolio"
              />
              <div className="gallery-over">
                <div className="content">
                  <span className="category">Foods</span>
                  <h4>
                    <Link href="/portfolio-details">Organic Fruits</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
export default PortfolioGridIsotope;
