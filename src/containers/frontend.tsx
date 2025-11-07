import { Footer, Header, Navbar } from "../types/layouts";
import { Outlet } from "react-router";

export default function Frontend() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
