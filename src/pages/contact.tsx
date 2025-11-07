import Breadcrumb from "../context/breadcrumb";
import ContactUs from "../context/contactus";

export default function Contact() {
  return (
    <>
      <title>Contact us</title>

      <Breadcrumb
        title="Contact us"
        links={[{ name: "Contact us", path: "/contact" }]}
      />
      <ContactUs />
    </>
  );
}
