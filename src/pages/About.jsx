import { ArrowRight, Check } from "lucide-react";

export default function AboutUsPage() {
  const values = [
    {
      title: "Quality First",
      description:
        "We carefully curate products that meet our standards for performance, reliability, and customer satisfaction.",
    },
    {
      title: "Customer Focused",
      description:
        "Every decision we make starts with delivering a better shopping experience for our customers.",
    },
    {
      title: "Simple & Transparent",
      description:
        "Clear information, honest pricing, and a shopping experience built on trust.",
    },
  ];

  const features = [
    "Premium Products",
    "Fast Delivery",
    "Secure Payments",
    "Easy Returns",
    "Dedicated Support",
    "Trusted Experience",
  ];

  const stats = [
    {
      value: "10K+",
      label: "Happy Customers",
    },
    {
      value: "500+",
      label: "Products",
    },
    {
      value: "98%",
      label: "Positive Reviews",
    },
    {
      value: "24/7",
      label: "Support",
    },
  ];

  return (
    <section className="w-full px-6 sm:px-8 md:px-12 xl:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <div className="border-b border-black/10 py-8 md:py-16 lg:py-20">
          <div className="max-w-3xl">
            <span className="text-sm uppercase tracking-[0.2em] text-black/50">
              About Us
            </span>

            <h1 className="mt-4 text-[clamp(26px,2vw+1rem,48px)] font-medium tracking-tight ">
              Crafting beauty experiences that inspire confidence every day.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/60">
              We believe beauty should feel simple, effective, and accessible.
              Our mission is to deliver products people genuinely love using,
              while creating an exceptional shopping experience from discovery
              to delivery.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="grid gap-12 border-b border-black/10 py-20 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-medium tracking-tight">Our Story</h2>
          </div>

          <div className="space-y-6 text-black/70">
            <p>
              Founded with a passion for modern beauty, we set out to build more
              than just an online store. We wanted to create a destination where
              customers could discover carefully selected products with
              confidence.
            </p>

            <p>
              Every item in our collection is chosen with quality, usability,
              and customer satisfaction in mind. From everyday essentials to
              premium beauty favorites, we focus on products that fit naturally
              into real routines.
            </p>

            <p>
              Today, we continue to grow by staying true to the values that
              inspired us from the beginning: quality, transparency, and an
              unwavering commitment to our customers.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="border-b border-black/10 py-20">
          <div className="mb-12">
            <h2 className="text-3xl font-medium tracking-tight">Our Values</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="border border-black/10 p-8">
                <h3 className="text-xl font-medium">{value.title}</h3>

                <p className="mt-4 leading-7 text-black/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid gap-12 border-b border-black/10 py-20 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-medium tracking-tight">
              Why Customers Choose Us
            </h2>

            <p className="mt-4 max-w-lg text-black/60">
              We focus on delivering a shopping experience that feels reliable,
              effortless, and enjoyable from start to finish.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 border border-black/10 p-4"
              >
                <Check size={18} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="border-b border-black/10 py-20">
          <div className="grid gap-px bg-black/10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-8">
                <h3 className="text-4xl font-medium">{stat.value}</h3>

                <p className="mt-2 text-black/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="py-20">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-medium tracking-tight">
              Ready to discover your next favorite product?
            </h2>

            <p className="mt-4 text-black/60">
              Explore our collection and find products designed to fit
              seamlessly into your daily routine.
            </p>

            <button className="mt-8 flex h-12 items-center gap-2 border border-black px-6 text-sm font-medium transition-colors hover:bg-black hover:text-white">
              Shop Now
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
