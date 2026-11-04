const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* hero */}
      <section className="max-w-7xl mx-auto px-8 lg:px-12 pt-20 pb-16">
        <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-4">
          Contact us
        </p>

        <h1 className="text-4xl md:text-6xl font-light text-black max-w-3xl leading-tight">
          We'd love to hear from you.
        </h1>

        <p className="mt-6 text-gray-700 max-w-2xl leading-8 text-lg">
          Whether you have a question about your order, skincare
          recommendations, shipping, or anything else — our team is always ready
          to help.
        </p>
      </section>

      {/* info cards */}
      <section className="max-w-7xl mx-auto px-8 lg:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 border border-black/10">
          <div className="p-10 border-b md:border-b-0 md:border-r border-black/10">
            <h3 className="text-black text-lg mb-4">Visit our studio</h3>
            <p className="text-gray-700 leading-7">
              24 Beauty Avenue
              <br />
              Dhaka, Bangladesh
            </p>
          </div>

          <a
            href="tel:+8801234567890"
            className="p-10 border-b md:border-b-0 md:border-r border-black/10"
          >
            <h3 className="text-black text-lg mb-4">Call us</h3>
            <p className="text-gray-700">+880 1234-567890</p>
          </a>

          <a href="mailto:contact@glaroma.com" className="p-10">
            <h3 className="text-black text-lg mb-4">Email</h3>
            <p className="text-gray-700">contact@glaroma.com</p>
          </a>
        </div>
      </section>

      {/* form section */}
      <section className="max-w-7xl mx-auto px-8 lg:px-12 pb-24">
        <div className="grid lg:grid-cols-2 gap-14 items-stretch">
          {/* form */}
          <div>
            <h2 className="text-3xl font-light text-black mb-8">
              Send a message
            </h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border-b border-black/20 py-4 outline-none placeholder:text-gray-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border-b border-black/20 py-4 outline-none placeholder:text-gray-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border-b border-black/20 py-4 outline-none placeholder:text-gray-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border-b border-black/20 py-4 outline-none resize-none placeholder:text-gray-500"
              />

              <button
                type="submit"
                className="bg-black text-white px-10 py-4 hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* image */}
          <div className="h-155 overflow-hidden" />
        </div>
      </section>

      {/* help strip */}
      <section className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-black mb-3">Shipping & Delivery</h4>
            <p className="text-gray-700 text-sm leading-7">
              Questions about delivery times or tracking your parcel.
            </p>
          </div>

          <div>
            <h4 className="text-black mb-3">Orders & Returns</h4>
            <p className="text-gray-700 text-sm leading-7">
              Need help with returns, exchanges, or order changes.
            </p>
          </div>

          <div>
            <h4 className="text-black mb-3">Product Advice</h4>
            <p className="text-gray-700 text-sm leading-7">
              Need help choosing the right beauty products for your skin.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
