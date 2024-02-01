import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Pagination from "../src/components/Pagination";
import Layout from "../src/layout/Layout";
import { Container } from "react-bootstrap";
const ShopGrid = () => {
  return (
    <Layout>
      <PageBanner pageName={"Value Chain"}img="assets/images/banner/banner.jpg"  />
      <Container className="py-5" maxWidth="lg">
        <div className="row my-100">
          <div className="col-md-6">
            <img src="assets/images/features/value-Chain.jpg" alt="Our Business" className="w-100 hover h-100 rounded-3" style={{ borderRadius: "25px" }} />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <p className="fs-5 text-dark pt-30">
              At REDX, our value chain is the backbone of our operations, seamlessly connecting every stage of our business to deliver exceptional products and services. We take pride in our comprehensive approach, ensuring that each link in the chain contributes to the overall quality and efficiency of our offerings.<br /><br />
              From sourcing raw materials to the delivery of finished goods, we prioritize transparency and collaboration. Our dedicated team works in harmony, bringing diverse skills and expertise to every phase of the value chain. This collaborative effort enables us to consistently meet and exceed the expectations of our customers.
            </p>
          </div>
        </div>
      </Container>

    </Layout>
  );
};
export default ShopGrid;
