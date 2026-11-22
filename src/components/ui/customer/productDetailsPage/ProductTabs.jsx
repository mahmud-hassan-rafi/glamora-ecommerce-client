import { useState } from "react";
import ProductDescription from "./ProductDescription.jsx";
import ProductSpecifications from "./ProductSpecifications.jsx";
import ProductReviews from "./ProductReviews.jsx";

const tabs = ["Description", "Specifications", "Reviews"];

export default function ProductTabs({ product, className }) {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <section className={`${className}`}>
      {/* TAB HEADER */}
      <div className="flex flex-wrap gap-2 border-b border-neutral-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              relative px-5 py-3 text-sm font-medium transition
              ${
                activeTab === tab
                  ? "text-black"
                  : "text-neutral-500 hover:text-black"
              }
            `}
          >
            {tab}

            {/* active underline */}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-black" />
            )}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="pt-10">
        {activeTab === "Description" && (
          <ProductDescription product={product} />
        )}

        {activeTab === "Specifications" && (
          <ProductSpecifications product={product} />
        )}

        {activeTab === "Reviews" && <ProductReviews product={product} />}
      </div>
    </section>
  );
}
