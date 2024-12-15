import fluencerImg from "../../public/fluencer.png";
import Services from "./custom/services/Services";

export default function Social() {
  return (
    <Services
      title="Light, Fast & Powerful"
      descirptionOne="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
      descirptionTwo="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
      image={fluencerImg}
      isBtn={false}
      imagePosition={false}
      animate1="fade-up-right"
      animate2="fade-up-left"
    />
  );
}
