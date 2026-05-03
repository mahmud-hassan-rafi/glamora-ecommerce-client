import React, { useEffect } from "react";
import CategoriesWithPictures from "@components/ui/customer/home/categoriesWithPictures/CategoriesWithPictures";
import Hero from "@components/ui/customer/home/heroSection/Hero";
import TrustBadges from "@components/ui/customer/home/trustBadges/TrustBadges";
import TrandingProducts from "@components/ui/customer/home/featuredProducts/TrandingProducts";
import ProductsSkeleton from "@components/ui/customer/shop/product/ProductsSkeleton";
import FeaturedProducts from "@components/ui/customer/home/featuredProducts/FeaturedProducts";
import FlashSales from "@components/ui/customer/home/flashSales/FlashSales";

const Home = () => {
  const [visible, setVisible] = React.useState(false);
  const trandingProductsRef = React.useRef(null);

  useEffect(() => {
    // Scroll to the trending products section when the component mounts
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect(); // Stop observing after the first intersection
          }
        });
      },
      { rootMargin: "200px" },
    );

    if (trandingProductsRef.current) {
      observer.observe(trandingProductsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full h-full space-y-10">
      <Hero />
      <TrustBadges />
      <CategoriesWithPictures />
      <div ref={trandingProductsRef}>
        {visible ? <FeaturedProducts /> : <ProductsSkeleton length={8} />}
      </div>
      <FlashSales />
      <div className="h-full w-full"></div>
    </div>
  );
};

export default Home;
