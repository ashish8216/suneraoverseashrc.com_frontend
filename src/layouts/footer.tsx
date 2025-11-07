import { Link } from "react-router";
import { useSetting } from "../api/use";
import { H2, Row } from "../components/footer";
import { NavigationFlooder } from "../components/navigation";
import { Copyright } from "../types/layouts";
import {
  FaBusinessTime,
  FaEnvelope,
  FaGlobe,
  FaLocationDot,
  FaPhoneVolume,
} from "react-icons/fa6";

export default function Footer() {
  const { setting, loading, error } = useSetting();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!setting) return <p>No setting found</p>;

  const contactItems = [
    { icon: <FaLocationDot aria-hidden="true" />, text: setting.address },
    {
      icon: <FaPhoneVolume aria-hidden="true" />,
      text: `${setting.mobile_number}`,
    },
    {
      icon: <FaEnvelope aria-hidden="true" />,
      text: `${setting.email}`,
    },
    {
      icon: <FaGlobe aria-hidden="true" />,
      text: "www.asiannepalinterior.com",
    },
    { icon: <FaBusinessTime aria-hidden="true" />, text: setting.working_hour },
  ];
  return (
    <footer className="px-0; bg-[#0000008a] bg-[url(/fotter.jpg)] bg-cover bg-[center_center] bg-no-repeat pt-[26px] pb-0 leading-[26px] text-white bg-blend-soft-light">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <Row>
            <H2 title="About us" />
            <p>
              ABC is a trusted name in the field of interior design and turnkey
              project execution in Nepal. Based in Kathmandu, Nepal, we
              specialize in transforming residential, commercial, and
              institutional spaces into stunning environments that reflect
              elegance, comfort, and functionality.
            </p>
          </Row>

          {/* Links */}
          <Row>
            <H2 title="Link" />
            <ul className="list-inside list-disc space-y-2">
              {NavigationFlooder.map((item) => (
                <li key={item.name} className="list-none p-[5px]">
                  <Link
                    to={item.path}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Row>

          {/* Contact Us */}
          <Row>
            <H2 title="Contact Us" />
            <address className="space-y-2 not-italic">
              {contactItems.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 p-[5px]">
                  {item.icon}
                  <span className="pl-1">{item.text}</span>
                </div>
              ))}
            </address>
          </Row>
        </div>
      </div>
      <Copyright />
    </footer>
  );
}
