import Link from "next/link";
import { Fragment, useState } from "react";
import { sidebarToggle } from "../utils";
import { Blog, Contact, Home, PagesDasktop, Portfolio, Shop } from "./Menus";
import MobileMenu from "./MobileMenu";

const Header = ({ header }) => {
  switch (header) {
    case 1:
      return <Header1 />;
    // case 2:
    //   return <Header2 />;
    // case 3:
    //   return <Header3 />;

    default:
      return <DefaultHeader />;
  }
};
export default Header;

const SearchBtn = () => {
  const [toggle, setToggle] = useState(false);

  return (
    // <Fragment>
    //   <button className="far fa-search" onClick={() => setToggle(!toggle)} />
    //   <form
    //     onSubmit={(e) => e.preventDefault()}
    //     action="#"
    //     className={`${toggle ? "" : "hide"}`}
    //   >
    //     <input
    //       type="text"
    //       placeholder="Search"
    //       className="searchbox"
    //       required=""
    //     />
    //     <button type="submit" className="searchbutton far fa-search" />
    //   </form>
    // </Fragment>
    <>
    </>
  );
};
const DaskTopMenu = () => (
  <ul className="navigation clearfix d-none  d-lg-flex">
    <li className="dropdown">
      {/* <a href="#">Home</a> */}
      <Link href="/">Home</Link>

      {/* <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div> */}
    </li>

    {/* <li className="dropdown"> */}
    <li>
      <Link href="/about">About us</Link>
      {/* <ul>
        <PagesDasktop />
      </ul> */}
      {/* <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div> */}
    </li>
    <li>
      <Link href="/product">Product</Link>
      {/* <ul>
        <Portfolio />
      </ul> */}

    </li>
    <li>
      <Link href="/gallery">Gallery</Link>


    </li>

    {/* <li className="dropdown">
      <a href="#">blog</a>
      <ul>
        <Blog />
      </ul>
      <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div>
    </li> */}
    {/* <li className="dropdown">
      <a href="#">shop</a>
      <ul>
        <Shop />
      </ul>
      <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div>
    </li> */}
    <Contact />
  </ul>
);

const Nav = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="main-menu navbar-expand-lg mobile-nav">
      <div className="navbar-header">
        <div className="mobile-logo my-15 h-25 w-25" >
          <Link href="/">
            <a>
              <img src="assets/images/logos/logo.png" alt="Logo" className="img " title="Logo" style={{ height: '50px', width: '50px' }} />
              <img
                src="assets/images/logos/logo-white.png"
                alt="Logo"
                title="Logo"
              />
            </a>
          </Link>
        </div>
        {/* Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          onClick={() => setNav(!nav)}
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div className={`navbar-collapse collapse clearfix ${nav ? "show" : ""}`}>
        <DaskTopMenu />
        <MobileMenu />
      </div>
    </nav>
  );
};

const DefaultHeader = () => (
  <header className="main-header">
    <div className="header-top-wrap bg-dark text-white py-10">
      <div className="container-fluid">
        <div className="header-top">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="top-left">
                <ul>
                  <li>
                    <i className="far fa-envelope" /> <b>Email Us :</b>{" "}
                    <a href="mailto:support@gmail.com">support@gmail.com</a>
                  </li>
                  <li>
                    <i className="far fa-clock" /> <b>Working Hours :</b> Monday
                    - Friday, 08 am - 05 pm
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="top-right text-lg-right">
                <ul>
                  <li>
                    <i className="far fa-phone" /> <b>Call :</b>{" "}
                    <a href="callto:+012(345)67899">+012 (345) 678 99</a>
                  </li>
                  <li>
                    <div className="social-style-one">
                      <Link href="/404">
                        <a >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </Link>
                      <Link href="/404">
                        <a >
                          <i className="fab fa-twitter" />
                        </a>
                      </Link>
                      <Link href="/404">
                        <a>
                          <i className="fab fa-youtube" />
                        </a>
                      </Link>
                      <Link href="/404">
                        <a>
                          <i className="fab fa-instagram" />
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Header-Upper*/}
    <div className="header-upper">
      <div className="container-fluid px-5 clearfix">
        <div className="header-inner d-flex align-items-center ">
          <div className="logo-outer">
            <div className="logo ml-10 ">
              <Link href="/">
                <a>
                  <img
                    className="img"
                    src="assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                    style={{ height: "60px", width: "60px" }}
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav-outer clearfix">
            {/* Main Menu */}
            <Nav />
            {/* Main Menu End*/}
          </div>
          {/* Menu Button */}
          <div className="menu-icons">
            {/* Nav Search */}
            {/* <div className="nav-search py-15">
              <SearchBtn />
            </div> */}
            {/* <button className="cart">
              <i className="far fa-shopping-basket" />
              <span>5</span>
            </button>
            <button className="user">
              <i className="far fa-user-circle" />
            </button> */}
            {/* <Link href="/contact">
              <a className="theme-btn">
                Consultations <i className="fas fa-angle-double-right" />
              </a>
            </Link> */}
            {/* menu sidbar */}
            <div className="menu-sidebar" onClick={() => sidebarToggle()}>
              <button>
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*End Header Upper*/}
  </header>
);
const Header1 = () => (
  <header className="main-header menu-absolute">
    <div className="header-top-wrap bg-dark text-white py-10">
      <div className="container-fluid">
        <div className="header-top">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="top-left">
                <ul>
                  <li>
                    <i className="far fa-envelope" /> <b>Email Us :</b>{" "}
                    <a href="mailto:support@gmail.com">Black@redx.com</a>
                  </li>
                  <li>
                    <i className="far fa-clock" /> <b>Working Hours :</b> Monday
                    - Friday, 08 am - 05 pm
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="top-right text-lg-right">
                <ul>
                  <li>
                    <i className="far fa-phone" /> <b>Call :</b>{" "}
                    <a href="callto:+012(345)67899">+012 (345) 678 99</a>
                  </li>
                  <li>
                    <div className="social-style-one">
                      <Link href="/404">
                        <a>
                          <i className="fab fa-facebook-f" />
                        </a>
                      </Link>
                      <Link href="/404">
                        <a >
                          <i className="fab fa-twitter" />
                        </a>
                      </Link>
                      <Link href="/404">
                        <a>
                          <i className="fab fa-youtube" />
                        </a>
                      </Link>
                      <Link href="/404">
                        <a>
                          <i className="fab fa-instagram" />
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Header-Upper*/}
    <div className="header-upper">
      <div className="container-fluid px-5 clearfix">
        <div className="header-inner d-flex align-items-center">
          <div className="logo-outer">
            <div className="logo transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out' ">
              <Link href="/">
                <a>
                  <img
                    src="assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                    style={{ height: "60px", width: "60px" }}

                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav-outer clearfix">
            {/* Main Menu */}
            <Nav />
            {/* Main Menu End*/}
          </div>
          {/* Menu Button */}
          <div className="menu-icons">
            {/* Nav Search */}
            <div className="nav-search py-15">
              <SearchBtn />
            </div>
            {/* <button className="cart">
              <i className="far fa-shopping-basket" />
              <span>5</span>
            </button> */}
            {/* <button className="user">
              <i className="far fa-user-circle" />
            </button>
            <Link href="/contact">
              <a className="theme-btn">
                Consultations <i className="fas fa-angle-double-right" />
              </a>
            </Link> */}
            {/* menu sidbar */}
            <div className="menu-sidebar" onClick={() => sidebarToggle()}>
              <button>
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*End Header Upper*/}
  </header>
);
