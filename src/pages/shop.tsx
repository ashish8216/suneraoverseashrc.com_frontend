import Breadcrumb from "../context/breadcrumb";
import Product from "../context/product";

export default function Shop() {
  return (
    <>
      <title>Product</title>

      <Breadcrumb
        title="Product"
        links={[{ name: "Product", path: "/shop" }]}
      />
      <Product />
    </>
  );
}
