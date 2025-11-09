import { Link } from "react-router";
import { useSetting } from "../api/use";
import {
  FaEnvelope,
  FaFacebook,
  FaPhoneVolume,
  FaTiktok,
} from "react-icons/fa6";
import Navbar from "./navbar";

export default function Header() {
  const { setting, loading, error } = useSetting();

  if (loading) return <p className="py-4 text-center">Loading...</p>;
  if (error)
    return <p className="py-4 text-center text-red-500">Error: {error}</p>;
  if (!setting)
    return <p className="py-4 text-center text-gray-500">No setting found</p>;

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* Top Bar */}
      <div className="bg-[#1d1e50] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-y-2 lg:grid-cols-2">
            {/* Left Info */}
            <div className="hidden p-2 font-medium lg:block">
              <ul className="flex flex-wrap items-center gap-4 text-sm">
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

            {/* Right Social Links */}
            <div className="p-2 font-medium flex justify-center lg:justify-end">
              <ul className="flex items-center gap-4">
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
                
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Logo + Navbar Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" aria-label="Home" className="mb-3 md:mb-0">
            <img
              src="https://suneraoverseashrc.com/storage/new-logo-sunera-1.jpg"
              alt="Logo"
              loading="lazy"
              className="mx-auto w-full max-w-[180px] md:max-w-[200px]"
            />
          </Link>

          {/* Navbar */}
          <div className="w-full md:w-auto">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
}
