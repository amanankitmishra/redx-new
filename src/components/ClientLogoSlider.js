import Link from "next/link";
import { Fragment } from "react";
import Slider from "react-slick";
import { clientLogo } from "../sliderProps";
import { Image } from "react-bootstrap";
const ClientLogoSlider = () => {
  return (
    <Fragment>
      <Slider {...clientLogo} className="client-logo-wrap">
        <div className="client-logo-item">
          <Link href="/contact">
            <a>
              <Image
                src="assets/images/client-logo/client-logo1.png"
                alt="Client Logo"
              />
            </a>
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            <a>
              <Image
                src="assets/images/client-logo/client-logo2.png"
                alt="Client Logo"
              />
            </a>
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            <a>
              <Image
                src="assets/images/client-logo/client-logo3.png"
                alt="Client Logo"
              />
            </a>
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            <a>
              <Image
                src="assets/images/client-logo/client-logo4.png"
                alt="Client Logo"
              />
            </a>
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            <a>
              <Image
                src="assets/images/client-logo/client-logo5.png"
                alt="Client Logo"
              />
            </a>
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            <a>
              <Image
                src="assets/images/client-logo/client-logo6.png"
                alt="Client Logo"
              />
            </a>
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            <a>
              <Image
                src="assets/images/client-logo/client-logo1.png"
                alt="Client Logo"
              />
            </a>
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            <a>
              <Image
                src="assets/images/client-logo/client-logo2.png"
                alt="Client Logo"
              />
            </a>
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            <a>
              <Image
                src="assets/images/client-logo/client-logo3.png"
                alt="Client Logo"
              />
            </a>
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            <a>
              <Image
                src="assets/images/client-logo/client-logo4.png"
                alt="Client Logo"
              />
            </a>
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            <a>
              <Image
                src="assets/images/client-logo/client-logo5.png"
                alt="Client Logo"
              />
            </a>
          </Link>
        </div>
        <div className="client-logo-item">
          <Link href="/contact">
            <a>
              <Image
                src="assets/images/client-logo/client-logo6.png"
                alt="Client Logo"
              />
            </a>
          </Link>
        </div>
      </Slider>
    </Fragment>
  );
};
export default ClientLogoSlider;
