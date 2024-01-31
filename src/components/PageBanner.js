import Link from "next/link";
const PageBanner = ({ pageName, pageTitle , img }) => {
  const bannerStyle = {
    backgroundImage: `url(${img})`, // Use img prop as the background image
  };
  return (
    <section
      className="page-banner text-white py-140 rpy-130"
      style={bannerStyle}
    >
      <div className="container">
        <div className="banner-inner">
          <h1 className="page-title wow fadeInUp delay-0-2s">
            {pageTitle ? pageTitle : pageName}
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">{pageName}</li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
