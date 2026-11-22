import React from "react";

const FooterLogoAndInfo = () => {
  return (
    <div className="flex flex-col space-y-5">
      {/* Logo Placeholder - You can replace src with your own Glaroma logo */}
      {/* <div className="w-32 h-32 rounded-full border-4 border-blue-500 overflow-hidden bg-white flex items-center justify-center">
            <span className="text-[#05131C] font-bold text-xl tracking-wider">
              GLAROMA
            </span>
          </div> */}

      <div className="object-cover object-center overflow-hidden">
        <img
          src={"./logo.svg"}
          alt="logo"
          width={60}
          height={60}
          className="scale-150"
        />
      </div>

      <p className="text-sm leading-normal max-w-sm text-gray-300">
        Searching for the ultimate online shopping destination? Explore
        premium-quality products, unbeatable deals, and fast, reliable
        delivery—all in one convenient place.
      </p>

      {/* Contact Details */}
      <div className="space-y-3 pt-2 text-sm text-gray-300">
        <div className="flex items-start space-x-3">
          <svg
            className="w-5 h-5 text-gray-400 mt-0.5 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>24 Beauty Avenue Dhaka, Bangladesh</span>
        </div>

        <div className="flex items-center space-x-3">
          <svg
            className="w-5 h-5 text-gray-400 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <a href="tel:8801234567890">Phone: +880 1234-567890</a>
        </div>

        <div className="flex items-center space-x-3">
          <svg
            className="w-5 h-5 text-gray-400 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <a href="mailto:contact@glaroma.com">Email : contact@glaroma.com</a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-3 pt-2">
        {/* Facebook */}
        <a
          href="#"
          className="w-9 h-9 rounded-full bg-[#3b5998] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
        >
          <span className="font-bold text-sm">f</span>
        </a>
        {/* WhatsApp */}
        <a
          href="#"
          className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
        >
          <span className="font-bold text-sm">w</span>
        </a>
        {/* Instagram */}
        <a
          href="#"
          className="w-9 h-9 rounded-full bg-[#E1306C] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
        >
          <span className="font-bold text-sm">i</span>
        </a>
      </div>
    </div>
  );
};

export default FooterLogoAndInfo;
