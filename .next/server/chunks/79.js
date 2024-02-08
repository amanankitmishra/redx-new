"use strict";
exports.id = 79;
exports.ids = [79];
exports.modules = {

/***/ 7079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-nice-select"
var external_react_nice_select_ = __webpack_require__(9051);
var external_react_nice_select_default = /*#__PURE__*/__webpack_require__.n(external_react_nice_select_);
;// CONCATENATED MODULE: ./src/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const src_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/ImageView.js



const ImgViews = ({ close , src  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const { 0: img , 1: setImg  } = (0,external_react_.useState)(false);
    const { 0: imgValue , 1: setImgValue  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("assets/images")) {
                    if (a.getAttribute("download") === null) {
                        a.addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: img && /*#__PURE__*/ jsx_runtime_.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const components_ImageView = (ImageView);

;// CONCATENATED MODULE: ./src/components/VideoPopup.js



const VideoPopup_ = ({ close , videoID  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>close(),
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                        src: "https://www.youtube.com/embed/nfP5N9Yc72A?autoplay=1",
                                        title: "YouTube video player",
                                        frameBorder: "0",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const VideoPopup = ()=>{
    const { 0: video , 1: setVideo  } = (0,external_react_.useState)(false);
    const { 0: videoValue , 1: setVideoValue  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("https://www.youtube.com")) {
                    a.addEventListener("click", (e)=>{
                        e.preventDefault();
                        setVideoValue(a.href);
                        setVideo(true);
                    });
                }
            });
        }, 1000);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: video && /*#__PURE__*/ jsx_runtime_.jsx(VideoPopup_, {
            close: ()=>setVideo(false),
            videoID: videoValue
        })
    });
};
/* harmony default export */ const components_VideoPopup = (VideoPopup);

// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(0);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/layout/Footer.js



const Counter = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\src\\layout\\Footer.js -> " + "../components/Counter"
        ]
    },
    ssr: false
});
const Footer = ({ footer  })=>{
    switch(footer){
        case 1:
            return /*#__PURE__*/ jsx_runtime_.jsx(DefaultFooter, {});
        case 3:
        // return <Footer3 />;
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(DefaultFooter, {});
    }
};
/* harmony default export */ const layout_Footer = (Footer);
const ScrollTopBtn = ()=>{
    const scrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        style: {
            display: "inline-block"
        },
        className: "scroll-top scroll-to-target",
        "data-target": "html",
        onClick: ()=>scrollTop(),
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "fas fa-angle-double-up"
        })
    });
};
const DefaultFooter = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "main-footer bg-dark text-white",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container pt-40",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row justify-content-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4 col-md-6 order-md-2",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-widget about-widget text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "footer-logo mb-10",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/logos/logoFooter.png",
                                                        alt: "Logo",
                                                        style: {
                                                            height: "60px",
                                                            width: "60px"
                                                        }
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "We pride ourselves on our extensive product range, spanning across 21 categories that include agricultural commodities, processed Agri products, Agri Inputs, Industrial Chemicals, and FMCG food products."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "social-style-two pt-10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/404",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-facebook-f"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/404",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/404",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-linkedin-in"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/404",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-youtube"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4 col-md-6 order-md-1",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-widget menu-widget",
                                    style: {
                                        marginLeft: "50"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "footer-title",
                                            children: "Quick Links"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Home"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/about",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "About Us"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/product",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Our Product"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/gallery",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Gallary"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/contact",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Contact Us"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4 col-md-6 order-md-3",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-widget contact-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "footer-title",
                                            children: "Contact Details"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fal fa-map-marker-alt"
                                                        }),
                                                        "Delhi sec 2 B12"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "far fa-phone"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "calto:+012(345)67899",
                                                            children: "+012 (345) 678 99"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "far fa-envelope"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "mailto:support@gmail.com",
                                                            children: "Black@redx.com"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "far fa-envelope"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "mailto:support@gmail.com",
                                                            children: "Black@redx.com"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "copyright-area pt-25 ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Copyright \xa9 2024 Redx. All Rights Reserved."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ScrollTopBtn, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "footer-shapes",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "footer-bg",
                        src: "assets/images/background/footer-bg-shape.png",
                        alt: "Shape"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "shape-one",
                        src: "assets/images/shapes/footer1.png",
                        alt: "Shape"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "shape-two",
                        src: "assets/images/shapes/footer2.png",
                        alt: "Shape"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "shape-three",
                        src: "assets/images/shapes/footer3.png",
                        alt: "Shape"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "shape-four",
                        src: "assets/images/shapes/footer4.png",
                        alt: "Shape"
                    })
                ]
            })
        ]
    });

;// CONCATENATED MODULE: ./src/layout/Menus.js



const Home = ()=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {});
const PagesDasktop = ()=>/*#__PURE__*/ _jsx(Fragment, {
        children: /*#__PURE__*/ _jsx("li", {
            children: /*#__PURE__*/ _jsx(Link, {
                href: "/404",
                children: "404 error"
            })
        })
    });
const PagesMobile = ()=>/*#__PURE__*/ _jsxs(Fragment, {
        children: [
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/about",
                    children: "About us"
                })
            }),
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/services",
                    children: "all services"
                })
            }),
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/service-details",
                    children: "service details"
                })
            }),
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/faqs",
                    children: "faqs"
                })
            }),
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/farmers",
                    children: "Farmers"
                })
            }),
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/404",
                    children: "404 error"
                })
            })
        ]
    });
const Portfolio = ()=>/*#__PURE__*/ _jsx(Fragment, {});
const Blog = ()=>/*#__PURE__*/ _jsxs(Fragment, {
        children: [
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/blog-grid",
                    children: "blog Grid"
                })
            }),
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/blog-standard",
                    children: "blog Standard"
                })
            }),
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/blog-details",
                    children: "blog details"
                })
            })
        ]
    });
const Shop = ()=>/*#__PURE__*/ _jsxs(Fragment, {
        children: [
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/shop-grid",
                    children: "shop Grid"
                })
            }),
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/shop-left-sidebar",
                    children: "shop left sidebar"
                })
            }),
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/shop-right-sidebar",
                    children: "shop right sidebar"
                })
            }),
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/product-details",
                    children: "Product details"
                })
            }),
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/cart",
                    children: "cart page"
                })
            }),
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/checkout",
                    children: "checkout"
                })
            }),
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/wishlist",
                    children: "wishlist"
                })
            })
        ]
    });
const Contact = ()=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/contact",
                children: "Contact"
            })
        })
    });

;// CONCATENATED MODULE: ./src/layout/MobileMenu.js




const MobileMenu = ()=>{
    const { 0: activeMenu , 1: setActiveMenu  } = (0,external_react_.useState)("");
    const activeMenuSet = (value)=>setActiveMenu(activeMenu === value ? "" : value), activeLi = (value)=>value === activeMenu ? {
            display: "block"
        } : {
            display: "none"
        };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "navigation clearfix d-block d-lg-none mobile-header",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        style: activeLi("home"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Home, {})
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/about",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "About Us"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/product",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Product"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/gallery",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Gallery"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/contact",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Contact Us"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const layout_MobileMenu = (MobileMenu);

;// CONCATENATED MODULE: ./src/layout/Header.js






const Header = ({ header  })=>{
    switch(header){
        case 1:
            return /*#__PURE__*/ jsx_runtime_.jsx(Header1, {});
        // case 2:
        //   return <Header2 />;
        // case 3:
        //   return <Header3 />;
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(DefaultHeader, {});
    }
};
/* harmony default export */ const layout_Header = (Header);
const SearchBtn = ()=>{
    const { 0: toggle , 1: setToggle  } = (0,external_react_.useState)(false);
    return(// <Fragment>
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
    /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}));
};
const DaskTopMenu = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "navigation clearfix d-none d-lg-flex",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "dropdown",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/about",
                    children: "About us"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/product",
                    children: "Product"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/gallery",
                    children: "Gallery"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Contact, {})
        ]
    });
const Nav = ()=>{
    const { 0: nav , 1: setNav  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "main-menu navbar-expand-lg mobile-nav",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "logo-outer",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "logo transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out' ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "img",
                                src: "assets/images/logos/logo.png",
                                alt: "Logo",
                                title: "Logo",
                                style: {
                                    height: "60px",
                                    width: "60px"
                                }
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `navbar-collapse collapse clearfix ${nav ? "show" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(DaskTopMenu, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {})
                ]
            })
        ]
    });
};
const DefaultHeader = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "main-header",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-top-wrap bg-dark text-white py-10",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header-top",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-7 col-lg-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "top-left",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "far fa-envelope"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                            children: "Email Us :"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "mailto:support@gmail.com",
                                                            children: "support@gmail.com"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "far fa-clock"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                            children: "Working Hours :"
                                                        }),
                                                        " Monday - Friday, 08 am - 05 pm"
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-5 col-lg-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "top-right text-lg-right",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "far fa-phone"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                            children: "Call :"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "callto:+012(345)67899",
                                                            children: "+012 (345) 678 99"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "social-style-one",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/404",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-facebook-f"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/404",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-twitter"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/404",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-youtube"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/404",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-instagram"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-upper",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid px-5 clearfix",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "header-inner d-flex align-items-center ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-outer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo ml-10 transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out' ",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "img",
                                                src: "assets/images/logos/logo.png",
                                                alt: "Logo",
                                                title: "Logo",
                                                style: {
                                                    height: "60px",
                                                    width: "60px"
                                                }
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "nav-outer clearfix",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Nav, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "menu-icons",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "menu-sidebar",
                                    onClick: ()=>(0,utils/* sidebarToggle */.LR)(),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "far fa-ellipsis-h"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "far fa-ellipsis-h"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "far fa-ellipsis-h"
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
const Header1 = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "main-header menu-absolute",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-top-wrap bg-dark text-white py-10",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header-top",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-7 col-lg-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "top-left",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "far fa-envelope"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                            children: "Email Us :"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "mailto:support@gmail.com",
                                                            children: "Black@redx.com"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "far fa-clock"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                            children: "Working Hours :"
                                                        }),
                                                        " Monday - Friday, 08 am - 05 pm"
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-5 col-lg-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "top-right text-lg-right",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "far fa-phone"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                            children: "Call :"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "callto:+012(345)67899",
                                                            children: "+012 (345) 678 99"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "social-style-one",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/404",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-facebook-f"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/404",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-twitter"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/404",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-youtube"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/404",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-instagram"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-upper",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid px-5 clearfix",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "header-inner d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-outer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out' ",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "img",
                                                src: "assets/images/logos/logo.png",
                                                alt: "Logo",
                                                title: "Logo",
                                                style: {
                                                    height: "60px",
                                                    width: "60px"
                                                }
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "nav-outer clearfix",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Nav, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "menu-icons",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "nav-search py-15",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SearchBtn, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "menu-sidebar",
                                        onClick: ()=>(0,utils/* sidebarToggle */.LR)(),
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-ellipsis-h"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-ellipsis-h"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-ellipsis-h"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });

;// CONCATENATED MODULE: ./src/layout/SideBar.js




const SideBar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "form-back-drop",
                onClick: ()=>(0,utils/* sidebarToggle */.LR)()
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "hidden-bar",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "inner-box text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "cross-icon",
                            onClick: ()=>(0,utils/* sidebarToggle */.LR)(),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "fa fa-times"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "title",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "Enquiry"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "appointment-form",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                onSubmit: (e)=>e.preventDefault(),
                                method: "post",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            name: "text",
                                            defaultValue: "",
                                            placeholder: "Name",
                                            required: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "email",
                                            name: "email",
                                            defaultValue: "",
                                            placeholder: "Email Address",
                                            required: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                            placeholder: "Message",
                                            rows: 5,
                                            defaultValue: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            className: "theme-btn",
                                            children: "Submit now"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "social-style-one",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/404",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-twitter"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/404",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-facebook-f"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/404",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-instagram"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/404",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-pinterest-p"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const layout_SideBar = (SideBar);

;// CONCATENATED MODULE: ./src/layout/Layout.js









const Layout = ({ header , footer , children  })=>{
    (0,external_react_.useEffect)(()=>{
        (0,utils/* stickyNav */.h4)();
        (0,utils/* animation */.oQ)();
        external_react_nice_select_default()();
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (window.location.pathname === "/index3") {
            document.querySelector("body").classList.add("home-three");
        } else {
            document.querySelector("body").classList.remove("home-three");
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_VideoPopup, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_ImageView, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "page-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {
                        header: header
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_SideBar, {}),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {
                        footer: footer
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ }),

/***/ 0:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LR": () => (/* binding */ sidebarToggle),
/* harmony export */   "h4": () => (/* binding */ stickyNav),
/* harmony export */   "oA": () => (/* binding */ pagination),
/* harmony export */   "oQ": () => (/* binding */ animation),
/* harmony export */   "ot": () => (/* binding */ getPagination)
/* harmony export */ });
// Animation with wowjs
const animation = ()=>{
    if (false) {}
    new WOW.WOW().init();
};
// Sidebar
const sidebarToggle = ()=>{
    const body = document.querySelector("body");
    body.classList.toggle("side-content-visible");
};
// Sticky nav
const stickyNav_ = ()=>{
    let offset = window.scrollY;
    const sticky = document.querySelectorAll(".main-header");
    for(let i = 0; i < sticky.length; i++){
        const stick = sticky[i];
        if (stick) {
            if (offset > 10) {
                stick.classList.add("fixed-header");
            } else {
                stick.classList.remove("fixed-header");
            }
        }
    }
};
const stickyNav = (stickyClass)=>window.addEventListener("scroll", stickyNav_);
// Pagination
const getPagination = (totalNumber, sort)=>{
    let arr = new Array(Math.ceil(totalNumber / sort)).fill().map((_, idx)=>idx + 1);
    return arr;
};
// change pagination and update pagination and content
const pagination = (listClass, sort, active)=>{
    let list = document.querySelectorAll(listClass);
    for(let i = 0; i < list.length; i++){
        const element = list[i];
        if (active === 1) {
            if (i < sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        } else {
            if (i >= (active - 1) * sort && i < active * sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        }
    }
};


/***/ })

};
;