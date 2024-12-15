import Button from "../../custom/button/Button";
import "./Services.css";

export default function Services({
  title,
  descirptionOne,
  descirptionTwo,
  image,
  isBtn,
  imagePosition,
  animate1,
  animate2,
}) {
  return (
    <section className="container py-5 py-5">
      <div
        className={`row align-items-center  ${
          imagePosition && "flex-row-reverse"
        }`}
      >
        {/* Content Section */}
        <div
          data-aos={animate1}
          className="col-lg-6 col-md-12 text-start mb-4 mb-lg-0"
        >
          <h1 className="fw-bold fs-2 fs-md-1 services-title">{title}</h1>
          <p className="fs-6 fs-md-7 services-text">{descirptionOne}</p>
          <p className="fs-6 fs-md-7 services-text">{descirptionTwo}</p>
          {isBtn && <Button title="Purchase now" />}
        </div>
        {/* Image Section */}
        <div
          data-aos={animate2}
          className="col-lg-6 col-md-12 d-flex justify-content-center"
        >
          <img
            src={image}
            alt="Illustration"
            className="img-fluid light__image"
          />
        </div>
      </div>
    </section>
  );
}
