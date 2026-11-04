import { motion } from "framer-motion";
import { Quote, Star, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sophia Carter",
    role: "Beauty Influencer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    review:
      "Honestly one of the most premium beauty shopping experiences I’ve had online. The product quality, packaging, and delivery speed were all incredible.",
  },
  {
    id: 2,
    name: "Emily Watson",
    role: "Skincare Enthusiast",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    review:
      "Their skincare collection completely changed my daily routine. Every product feels luxurious and the results are genuinely impressive.",
  },
  {
    id: 3,
    name: "Olivia Bennett",
    role: "Makeup Artist",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
    review:
      "The UI, branding, and product experience feel like a modern luxury SaaS brand rather than a typical ecommerce store. Absolutely beautiful.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative overflow-hidden pb-16">
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/5 px-4 py-2 ">
            <Sparkles className="text-pink-400" size={18} />
            <span className="text-sm text-black/70">Trusted By Thousands</span>
          </div>

          <h2 className="text-4xl font-black tracking-tight">
            What Our <span className="text-pink-500">Customers Say</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-black/60">
            Real experiences from beauty lovers who transformed their skincare
            and makeup routine with Glaroma.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-black/5 p-7 "
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-violet-500/10" />
              </div>

              {/* Quote Icon */}
              <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-black/5 ">
                <Quote className="text-pink-500" size={30} />
              </div>

              {/* Review */}
              <p className="relative z-10 mb-8 text-lg leading-relaxed text-black/75">
                "{item.review}"
              </p>

              {/* Rating */}
              <div className="relative z-10 mb-8 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-pink-500 text-pink-500"
                  />
                ))}
              </div>

              {/* User */}
              <div className="relative z-10 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-2xl object-cover ring-2 ring-white/10"
                />

                <div>
                  <h4 className="text-lg font-bold">{item.name}</h4>
                  <p className="text-sm text-black/50">{item.role}</p>
                </div>
              </div>

              {/* Hover Border */}
              <div className="pointer-events-none absolute inset-0 rounded-[34px] border border-white/5" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            { value: "25K+", label: "Happy Customers" },
            { value: "4.9★", label: "Average Rating" },
            { value: "120+", label: "Luxury Products" },
            { value: "98%", label: "Positive Feedback" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/10 bg-black/5 p-6 text-center "
            >
              <h3 className="text-3xl font-black text-pink-500">
                {stat.value}
              </h3>

              <p className="mt-2 text-sm text-black/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
