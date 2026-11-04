export default function PrivacyPolicyPage() {
  return (
    <section className="w-full px-6 sm:px-8 md:px-12 xl:px-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="border-b border-black/10 py-20">
          <span className="text-sm uppercase tracking-[0.2em] text-black/50">
            Legal
          </span>

          <h1 className="mt-4 text-5xl font-medium tracking-tight">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-2xl text-black/60">
            This Privacy Policy explains how we collect, use, and protect your
            personal information when you use our website and services.
          </p>

          <p className="mt-4 text-sm text-black/40">Last updated: June 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-16 py-20">
          <section>
            <h2 className="text-2xl font-medium">Information We Collect</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                We may collect personal information that you provide directly to
                us when creating an account, placing an order, subscribing to
                newsletters, or contacting customer support.
              </p>

              <p>
                This information may include your name, email address, shipping
                address, phone number, and payment-related details.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium">
              How We Use Your Information
            </h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                We use the information we collect to process orders, improve
                customer experience, communicate updates, and provide customer
                support.
              </p>

              <p>
                Information may also be used to improve our website, personalize
                content, and prevent fraudulent activity.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium">
              Cookies & Tracking Technologies
            </h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                Our website may use cookies and similar technologies to enhance
                functionality, analyze website performance, and improve user
                experience.
              </p>

              <p>
                You may choose to disable cookies through your browser settings,
                although some website features may not function properly as a
                result.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium">Data Security</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                We implement reasonable security measures designed to protect
                your personal information from unauthorized access, disclosure,
                or misuse.
              </p>

              <p>
                However, no method of electronic transmission or storage can be
                guaranteed to be completely secure.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium">Third-Party Services</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                We may work with trusted third-party providers for payment
                processing, analytics, shipping, and other business operations.
              </p>

              <p>
                These providers only receive information necessary to perform
                their services and are expected to maintain appropriate privacy
                protections.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium">Your Rights</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                Depending on your location, you may have the right to access,
                update, correct, or delete your personal information.
              </p>

              <p>
                You may also have the right to object to certain data processing
                activities or request a copy of your data.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium">Contact Us</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                If you have any questions regarding this Privacy Policy or the
                handling of your personal information, please contact our
                support team.
              </p>

              <p>Email: support@example.com</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
