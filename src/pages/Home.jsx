import React, { useEffect } from "react";
import Hero from "@components/ui/customer/home/heroSection/Hero";
import TrustBadges from "@components/ui/customer/home/trustBadges/TrustBadges";
// import TrandingProducts from "@components/ui/customer/home/featuredProducts/TrandingProducts";
import ProductsSkeleton from "@components/ui/customer/shop/product/ProductsSkeleton";
import FeaturedProducts from "@components/ui/customer/home/featuredProducts/FeaturedProducts";
import FlashSales from "@components/ui/customer/home/flashSales/FlashSales";
// import FeaturedProducts from "./Test";
import TestimonialSection from "@components/ui/customer/home/testimonial/Testimonial";
import ShopByCategorySection from "@components/ui/customer/home/shopByCategory/ShopByCategorySection";
import ShoppingHighlightsSection from "@components/ui/customer/home/shoppingHighlightsSection/ShoppingHighlightsSection";

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
    <section className="w-full h-full space-y-10 px-6 sm:px-8 md:px-12 xl:px-16">
      <Hero />
      <TrustBadges />
      <ShopByCategorySection />
      <div ref={trandingProductsRef}>
        {visible ? <FeaturedProducts /> : <ProductsSkeleton length={8} />}
      </div>
      <FlashSales />
      <TestimonialSection />
      <ShoppingHighlightsSection />
      <div className="h-full w-full"></div>
    </section>
  );
};

export default Home;
