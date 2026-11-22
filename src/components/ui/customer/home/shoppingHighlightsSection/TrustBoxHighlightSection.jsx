import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { LuCopy } from "react-icons/lu";
import { MdDone } from "react-icons/md";

const icons = [
  {
    icon: <FaFacebookF size={16} />,
    link: "https://www.facebook.com/yourpage",
  },
  {
    icon: <IoLogoInstagram size={18} />,
    link: "https://www.instagram.com/yourprofile",
  },
  {
    icon: <FaTelegramPlane size={16} />,
    link: "https://t.me/yourchannel",
  },
];

const TrustBoxHighlightSection = () => {
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopyButton = () => {
    navigator.clipboard.writeText(location.href);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="size-full border-5 font-medium border-gray-300/40 flex flex-col items-center gap-3.5 py-8 px-12 md:col-span-2 xl:col-span-1">
      <h2 className="text-sm text-blue-800">Shop with Confidence</h2>
      <h4 className="text-base sm:text-lg md:text-[22px] font-medium text-center font-sans text-gray-800">
        Quality Products, Fast Delivery & Secure Payments
      </h4>
      <p className="text-sm sm:text-base text-gray-600 font-light text-center">
        We are committed to providing a smooth and reliable shopping experience
        through premium products, trusted service, quick delivery, and safe
        payment methods.
      </p>

      <div className="flex w-full flex-col gap-2.5 items-center mt-2">
        {/* share us */}
        <div className="relative flex items-center justify-center h-8 w-full">
          {/* line */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-black/15"></div>
          </div>

          {/* title */}
          <div className="relative bg-white px-4 text-sm sm:text-base md:text-lg font-medium text-gray-800">
            SHARE US
          </div>
        </div>
        {/* icons */}
        <div className="flex gap-4 items-center">
          <span
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300 border-2 border-gray-300/40 rounded-full p-3 flex items-center justify-center cursor-pointer"
            onClick={handleCopyButton}
          >
            {isCopied ? (
              <MdDone size={"16px"} className="text-green-600 " />
            ) : (
              <LuCopy size={16} />
            )}
          </span>
          {icons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors duration-300 border-2 border-gray-300/40 rounded-full p-3 flex items-center justify-center"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBoxHighlightSection;
