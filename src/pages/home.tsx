import Aboutone from "../context/aboutone";
import ServiceHome from "../context/servicehome";
import Slideshows from "../context/slideshows";
import Testimonials from "../context/testimonials";

export default function Home() {
  return (
    <>
      <title>Home</title>

      <Slideshows />
      <Aboutone />
      <ServiceHome />
      <Testimonials />
    </>
  );
}
