import AboutText from "../context/abouttext";
import Breadcrumb from "../context/breadcrumb";

export default function About() {
  return (
    <>
      <title>About us</title>

      <Breadcrumb
        title="About us"
        links={[{ name: "About", path: "/about" }]}
      />
      <AboutText />
    </>
  );
}
