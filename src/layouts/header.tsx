import { Link } from "react-router";
import { useSetting } from "../api/use";
import {
  FaEnvelope,
  FaFacebook,
  FaPhoneVolume,
  FaTiktok,
} from "react-icons/fa6";

export default function Header() {
  const { setting, loading, error } = useSetting();

  if (loading) return <p className="py-4 text-center">Loading...</p>;
  if (error)
    return <p className="py-4 text-center text-red-500">Error: {error}</p>;
  if (!setting)
    return <p className="py-4 text-center text-gray-500">No setting found</p>;

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-[#1d1e50]  text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-y-2 lg:grid-cols-2">
            {/* Left Info */}
            <div className="hidden p-2 px-4 font-medium lg:block">
              <ul className="flex flex-wrap items-center gap-4">
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-lg" />
                  <span>{setting.email}</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaPhoneVolume className="text-lg" />
                  <span>{setting.mobile_number}</span>
                </li>
              </ul>
            </div>

            {/* Right Info + Social */}
            <div className="p-2 px-4 font-medium">
              <ul className="flex flex-wrap items-center justify-end gap-4">
                {setting.facebook && (
                  <li>
                    <Link
                      to={setting.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="transition hover:text-gray-300"
                    >
                      <FaFacebook className="text-lg" />
                    </Link>
                  </li>
                )}
                {setting.twitter && (
                  <li>
                    <Link
                      to={setting.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                      className="transition hover:text-gray-300"
                    >
                      <FaTiktok className="text-lg" />
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Logo + Tagline */}
      <div className="bg-white py-4">
        <div className="container">
          <div className="-mx-2 flex flex-wrap items-center">
            {/* Logo */}
            <div className="w-full px-2 text-center md:w-4/12 md:text-left">
              <Link to="/" aria-label="Home">
                <img
                  src={setting.logo}
                  alt="Logo"
                  loading="lazy"
                  className="mx-auto w-full max-w-[300px] md:mx-0"
                />
              </Link>
            </div>

            {/* Tagline */}
            <div className="mt-0 w-full px-2 text-center md:mt-0 md:w-8/12 hidden md:block">
              <h2
                className="text-2xl font-bold text-[#ec1a23] md:text-4xl"
                style={{ fontFamily: "Times New Roman, sans-serif" }}
              >
                {setting.name}
              </h2>
              <p
                className="-mt-6 text-[#2d3091] text-[11px] md:text-2xl text-center"
                style={{ fontFamily: "Lucida Calligraphy, sans-serif" }}
              >
                Interior Design & Decoration with Turnkey Contractor
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
