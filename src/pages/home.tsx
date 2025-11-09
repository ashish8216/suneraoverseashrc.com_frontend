import Aboutone from "../context/aboutone";
import JobsVacancy from "../context/job";
import Partners from "../context/product";
import ServiceHome from "../context/servicehome";
import Slideshows from "../context/slideshows";
import Teams from "../context/teams";
import Testimonials from "../context/testimonials";
import Product from "./product";

export default function Home() {
  return (
    <>
      <title>Home</title>

      <Slideshows />
      <Partners />
      <Aboutone />
      <Teams />
      <ServiceHome/>
      <Testimonials />
      <JobsVacancy />
    </>
  );
}
