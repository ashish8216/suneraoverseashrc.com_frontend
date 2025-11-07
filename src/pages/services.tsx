import Breadcrumb from "../context/breadcrumb";
import Service from "../context/service";

export default function Services() {
  return (
    <>
      <title>Services</title>

      <Breadcrumb
        title="Services"
        links={[{ name: "Services", path: "/services" }]}
      />
      <Service />
    </>
  );
}
