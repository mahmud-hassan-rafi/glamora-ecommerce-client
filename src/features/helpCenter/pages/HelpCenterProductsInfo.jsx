import { Link } from "react-router-dom";
import { Sparkles, Info, AlertCircle } from "lucide-react";

export default function HelpCenterProductsInfoPage() {
  return (
    <section className="w-full px-6 sm:px-8 md:px-12 xl:px-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="border-b border-black/10 py-16">
          {/* Breadcrumb */}
          <div className="text-sm text-black/50">
            <Link to="/help-center" className="hover:text-black">
              Help Center
            </Link>
            <span className="mx-2">/</span>
            <span className="text-black/80">Products</span>
          </div>

          <h1 className="mt-4 text-5xl font-medium tracking-tight">Products</h1>

          <p className="mt-6 max-w-2xl text-black/60">
            Learn more about our products, how to use them properly, and how to
            choose the right product for your needs.
          </p>
        </div>

        {/* Quick Info */}
        <div className="grid gap-px bg-black/10 py-16 md:grid-cols-3">
          <div className="bg-white p-8">
            <Sparkles size={22} />

            <h3 className="mt-4 font-medium">Product Quality</h3>
            <p className="mt-2 text-sm text-black/60">
              All products are carefully curated for safety and effectiveness.
            </p>
          </div>

          <div className="bg-white p-8">
            <Info size={22} />

            <h3 className="mt-4 font-medium">Usage Guide</h3>
            <p className="mt-2 text-sm text-black/60">
              Learn how to properly use each product for best results.
            </p>
          </div>

          <div className="bg-white p-8">
            <AlertCircle size={22} />

            <h3 className="mt-4 font-medium">Need Help</h3>
            <p className="mt-2 text-sm text-black/60">
              Not sure what to choose? We’re here to guide you.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-16 py-16">
          {/* Product Info */}
          <section>
            <h2 className="text-2xl font-medium">Understanding Our Products</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                Our beauty products are designed to suit different skin types,
                concerns, and daily routines.
              </p>

              <p>
                Each product page includes detailed information such as
                ingredients, benefits, and usage instructions.
              </p>
            </div>
          </section>

          {/* Usage */}
          <section>
            <h2 className="text-2xl font-medium">How to Use Products</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                Always follow the recommended usage instructions provided on
                each product page or packaging.
              </p>

              <p>
                For skincare products, start with a patch test before full use.
              </p>

              <p>Consistency is key — regular use gives the best results.</p>
            </div>
          </section>

          {/* Choosing Products */}
          <section>
            <h2 className="text-2xl font-medium">Choosing the Right Product</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                Identify your skin type and specific concerns before selecting a
                product.
              </p>

              <p>
                If you are unsure, you can browse our categories or contact
                support for personalized recommendations.
              </p>
            </div>
          </section>

          {/* Safety */}
          <section>
            <h2 className="text-2xl font-medium">Safety & Precautions</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                Avoid using products on irritated or broken skin unless stated
                otherwise.
              </p>

              <p>
                Discontinue use if any allergic reaction occurs and consult a
                specialist.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t border-black/10 pt-16">
            <h2 className="text-2xl font-medium">
              Need Product Recommendations?
            </h2>

            <p className="mt-4 text-black/60">
              Not sure what to choose? Our team can help you find the right
              product.
            </p>

            <button className="mt-8 border border-black px-6 py-3 text-sm font-medium transition-colors hover:bg-black hover:text-white">
              Contact Support
            </button>
          </section>
        </div>
      </div>
    </section>
  );
}
