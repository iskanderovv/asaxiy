import lightImg from "../../public/light.png";
import lightIcon from "../../public/light-icon.svg";

export default function Message() {
  return (
    <div className="container my-5 light">
      <div className="row align-items-center">
        {/* Content Section */}
        <div data-aos="fade-right" className="col-lg-6 col-md-12 text-start mb-4 mb-lg-0">
          <h1 className="fw-bold fs-2 fs-md-1 light-title">
            Light, Fast & Powerful
          </h1>
          <p className="fs-6 fs-md-7 light-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <p className="fs-6 fs-md-7 light-text">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>

          <div className="row mt-5 pt-5">
            <div className="col-md-5 mb-4">
              <div className="d-flex justify-content-start mb-3">
                <img src={lightIcon} alt="title icon" />
              </div>
              <h5 className="fw-bold fs-6">Title Goes Here</h5>
              <p className="text-secondary fs-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <div className="d-flex justify-content-start mb-3">
                <img src={lightIcon} alt="title icon" />
              </div>
              <h5 className="fw-bold fs-6">Title Goes Here</h5>
              <p className="text-secondary fs-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div data-aos="fade-left" className="col-lg-6 col-md-12 d-flex justify-content-center">
          <img
            src={lightImg}
            alt="Illustration"
            className="img-fluid light__image"
          />
        </div>
      </div>
    </div>
  );
}
