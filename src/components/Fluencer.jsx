import featureImg from "../../public/happy.png";
import Services from "./custom/services/Services";

export default function Fluencer() {
  return (
    <Services
      title="Light, Fast & Powerful"
      descirptionOne="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
      descirptionTwo="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
      image={featureImg}
      isBtn={false}
      imagePosition={true}
      animate1="fade-up-right"
      animate2="fade-up-left"
    />
  );
}
