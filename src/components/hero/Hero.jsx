import Button from "../custom/button/Button";
import heroImg from "../../../public/hero-image.svg";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-wrapper container py-5">
      <div className="hero-wrapper__content row align-items-center flex-column flex-md-row">
        <div className="hero-wrapper__text col-12 col-md-6">
          <h1 className="hero-wrapper__title">
            Introduce Your Product Quickly & Effectively
          </h1>
          <p className="hero-wrapper__description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <div className="hero-wrapper__buttons d-flex gap-3 mt-5">
            <Button title="Purchase UI Kit" />
            <Button title="Learn More" />
          </div>
        </div>
        <div className="hero-wrapper__image col-12 col-md-6 mt-4 mt-md-0">
          <img
            src={heroImg}
            className="hero-wrapper__image-img img-fluid"
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
}
