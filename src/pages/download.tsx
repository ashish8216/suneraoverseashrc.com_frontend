import Breadcrumb from "../context/breadcrumb";
import Down from "../context/download";

export default function Download() {
  return (
    <>
      <title>Download</title>

      <Breadcrumb
        title="Download"
        links={[{ name: "Download", path: "/download" }]}
      />
      <Down />
    </>
  );
}
