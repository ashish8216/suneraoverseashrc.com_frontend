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
    <footer className="bg-[#0c0c0d] text-gray-300  mx-auto px-6 lg:px-12">
      <div className="container py-5">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand + Text */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="https://suneraoverseashrc.com/storage/new-logo-sunera-1.jpg"
                className="w-full"
                alt="https://suneraoverseashrc.com/storage/new-logo-sunera-1.jpg"
              />
            </div>
          </div>
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Teams
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Features
                </a>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-400">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Support Center
                </a>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Updates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Announce
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-1" />
      {/* Bottom Section */}
      <div className="container mx-auto px-6 lg:px-12 py-6 flex flex-col lg:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 text-sm">
          © 2025 All Rights Reserved By
          <span className="text-orange-400 font-medium"></span>
        </p>
        <div className="flex gap-5 text-xl text-gray-300">
          <a href="#" className="hover:text-orange-400">
            
          </a>
          <a href="#" className="hover:text-orange-400">
            
          </a>
          <a href="#" className="hover:text-orange-400">
            
          </a>
          <a href="#" className="hover:text-orange-400">
            
          </a>
        </div>
      </div>
    </footer>
  );
}
