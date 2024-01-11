import { useState } from "react";
import { Blog, Contact, Home, PagesMobile, Portfolio, Shop } from "./Menus";
import Link from "next/link";

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
    setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <ul className="navigation clearfix d-block d-lg-none mobile-header">
      <li className="dropdown">
        <Link href="/">
          <a >Home</a>
        </Link>
        <ul style={activeLi("home")}>
          <Home />
        </ul>

      </li>
      <li >
        <Link href="/about">
          <a >About Us</a>
        </Link>

      </li>
      <li >
        <Link href="/product">
          <a >Product</a>
        </Link>

      </li>
      <li >
        <Link href="/gallery">
          <a >Gallery</a>
        </Link>

      </li>
      <li >
        <Link href="/contact">
          <a >Contact Us</a>
        </Link>
      </li>

    </ul>
  );
};
export default MobileMenu;
