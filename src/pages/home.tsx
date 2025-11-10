import Aboutone from "../context/aboutone";
import Categories from "../context/categories";
import CategoriesHome from "../context/categorieshome";
import JobsVacancy from "../context/job";
import ImagePopupAuto from "../context/popup";
import ImagePopup from "../context/popup";
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
      <ImagePopupAuto />
      <Slideshows />
      <Partners />
      <Aboutone />
      <Teams />
      <ServiceHome />
      <Testimonials />
      <JobsVacancy />
      <Categories/>
    </>
  );
}
