import { useSetting } from "../api/use";
import { FaLocationDot, FaPhoneVolume, FaEnvelope } from "react-icons/fa6";
import ContentForm from "./from";

export default function ContactUs() {
  const { setting, loading, error } = useSetting();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!setting) return <p>No setting found</p>;

  const contactItems = [
    {
      icon: <FaLocationDot aria-hidden="true" />,
      text: setting.address,
      label: "Address",
    },
    {
      icon: <FaPhoneVolume aria-hidden="true" />,
      text: setting.mobile_number,

      label: "Phone",
    },
    {
      icon: <FaEnvelope aria-hidden="true" />,
      text: setting.email,
      label: "Email",
    },
  ];

  return (
    <>
      <div className="container mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <address className="not-italic space-y-6">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <ul className="space-y-4">
              {contactItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-lg">{item.icon}</span>
                  <span aria-label={item.label}>{item.text}</span>
                </li>
              ))}
            </ul>
          </address>

          <ContentForm />
        </div>
      </div>

      {setting.google_maps && (
        <div
          className="w-full h-[400px] mb-8"
          dangerouslySetInnerHTML={{ __html: setting.google_maps }}
        />
      )}
    </>
  );
}
