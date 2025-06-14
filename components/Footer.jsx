import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #F8FFF3 0%, #D9EDD9 100%)",
      }}
      className="py-16 px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Section */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Payment options
                </a>
              </li>
            </ul>
          </div>

          {/* One click Section */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-6">
              One click
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Unlock travel styles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Explore destinations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Hike Mt.Kilimanjaro
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Streets of DSM
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Escape DSM
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Connect with us Section */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-6">
              Connect with us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-4 justify-between items-start md:items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-6 h-6 bg-orange-400 rounded-full mr-2"></div>
            <span className="text-gray-900 text-xl font-semibold">Rejo</span>
          </div>
          <div className="text-gray-600 text-sm text-center">
            <p>
              Seamless travel experiences for individuals and groups through
              flexible payment options.
            </p>
          </div>
        </div>
        {/* Logo and Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-gray-300">
          {/* Logo */}
        </div>
        {/* Copyright */}
        <div className="text-gray-600 text-sm text-center font-bold">
          © 2025 Jointly. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
