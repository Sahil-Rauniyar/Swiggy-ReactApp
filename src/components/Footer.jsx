import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

export default function Footer() {
  // just a normal fired link funcatins;
  const [flink, Setflink] = useState("");
  let linkFired = () => {
    alert("Page will redirect later, once the features will be added !");
    Setflink("/");
  };
  if (flink) {
    window.location.href = flink;
  }

  return (
    <footer className="bg-[#02060c] text-white mt-16">
      {/* Top Footer */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-12">
        {/* Logo and  Download App */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-gray-700 pb-10">
          <div>
            <div className="flex cursor-pointer" onClick={linkFired}>
              <h1 className="text-4xl font-bold text-[#ff5200]">
                Swiggy</h1>
                <img
                  className="h-[50px] rounded-2xl ml-3"
                  src="/Images/swiggy-logoPtuCoder.jpeg"
                  alt="img-error"
                />
              
            </div>
            <p className="text-gray-400 mt-2">
              © 2026 Swiggy Limited (By-PtuCoder) !
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-4">
              For better experience, download the app
            </h2>

            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 bg-black border border-gray-500 rounded-lg px-4 py-2 hover:border-white transition">
                <FaApple className="text-2xl" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </button>

              <button className="flex items-center gap-2 bg-black border border-gray-500 rounded-lg px-4 py-2 hover:border-white transition">
                <FaGooglePlay className="text-xl" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400">GET IT ON</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-gray-700">
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-5">Company</h3>

            <ul className="space-y-3 text-gray-400" onClick={() => linkFired()}>
              <li className="hover:text-white cursor-pointer transition">
                About Us
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Careers
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Team
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Swiggy One
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Swiggy Instamart
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Swiggy Dineout
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-5">Contact Us</h3>

            <ul className="space-y-3 text-gray-400" onClick={() => linkFired()}>
              <li className="hover:text-white cursor-pointer transition">
                Help & Support
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Partner With Us
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Ride With Us
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Feedback
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-5">Legal</h3>

            <ul className="space-y-3 text-gray-400" onClick={() => linkFired()}>
              <li className="hover:text-white cursor-pointer transition">
                Terms & Conditions
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Cookie Policy
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Refund Policy
              </li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="font-bold text-lg mb-5">We Deliver To</h3>

            <ul className="space-y-3 text-gray-400" onClick={() => linkFired()}>
              <li className="hover:text-white cursor-pointer transition">
                Chandigarh
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Delhi
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Mumbai
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Bangalore
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Hyderabad
              </li>
              <li className="hover:text-white cursor-pointer transition">
                View All Cities
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2026 Swiggy Limited. Created By PtuCoder (Sahil Rauniyar) !
          </p>

          {/* Social Media */}
          <div className="flex items-center gap-5 text-xl">
            <a
              href="https://www.youtube.com/@PtuCoder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="cursor-pointer hover:text-[#ff5200] transition" />
            </a>

            <a
              href="https://www.facebook.com/PtuCoder/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="cursor-pointer hover:text-[#ff5200] transition" />
            </a>

            <a
              href="https://www.instagram.com/ptucoder/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer hover:text-[#ff5200] transition" />
            </a>
            <a
              href="https://www.youtube.com/@PtuCoder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="cursor-pointer hover:text-[#ff5200] transition" />
            </a>

            <a
              href="https://www.youtube.com/@PtuCoder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="cursor-pointer hover:text-[#ff5200] transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
