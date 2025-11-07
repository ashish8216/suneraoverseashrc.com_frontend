import Breadcrumb from "../context/breadcrumb";
import FAQone from "../context/faqoiktsx";

export default function FAQ() {
  return (
    <>
      <title>Frequently Asked Questions</title>

      <Breadcrumb
        title="Frequently Asked Questions"
        links={[{ name: "FAQ", path: "/faq" }]}
      />

      <FAQone />
    </>
  );
}
