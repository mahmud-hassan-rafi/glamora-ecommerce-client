import FooterLogoAndInfo from "@components/common/footer/FooterLogoAndInfo";
import FooterQuickLinks from "@components/common/footer/FooterQuickLinks";
import { footerPoliciesNavigation } from "@constants/navigation/footerPoliciesNavigation";
import { footerQuickLinksNavigation } from "@constants/navigation/FooterQuickLinksNavigation.js";
import { footerSupportNavigation } from "@constants/navigation/footerSupportNavigation";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#05131C] text-gray-400 font-sans py-14 px-6 md:px-12 lg:px-20 border-t border-gray-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
        {/* Column 1: Logo & Info */}
        <FooterLogoAndInfo />

        {/* Column 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {/* Quick Link */}
          <FooterQuickLinks
            title="QUICK LINK"
            links={footerQuickLinksNavigation}
          />

          {/* Our Policy */}
          <FooterQuickLinks
            title="OUR POLICY"
            links={footerPoliciesNavigation}
          />

          <FooterQuickLinks title="SUPPORT" links={footerSupportNavigation} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
