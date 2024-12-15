import { toast } from "react-toastify";
import Button from "../custom/button/Button";
import "./Pricing.css";

const Pricing = () => {
  const onAlert = () => {
    toast.success("Purchased Successfully");
  };
  return (
    <section className="pricing-section container-fluid">
      <div className="pricing-section__content text-center mx-auto">
        <h2 className="pricing-section__title">A Price To Suit Everyone</h2>
        <p className="pricing-section__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus.
        </p>
        <div className="pricing-section__price">
          <h3 className="pricing-section__amount">$40</h3>
          <p className="pricing-section__tagline">UI Design Kit</p>
        </div>
        <p className="pricing-section__simple">See. One price. Simple.</p>
        <div className="d-flex justify-content-center">
          <Button title="Purchase now" onClick={() => onAlert()} />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
