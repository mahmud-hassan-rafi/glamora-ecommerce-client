import { Shield, Lock, UserCog, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

export default function HelpCenterAccountSecurityPage() {
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
            <span className="text-black/80">Account & Security</span>
          </div>

          <h1 className="mt-4 text-5xl font-medium tracking-tight">
            Account & Security
          </h1>

          <p className="mt-6 max-w-2xl text-black/60">
            Manage your account details, password settings, and security
            preferences to keep your account safe and up to date.
          </p>
        </div>

        {/* Quick Info */}
        <div className="grid gap-px bg-black/10 py-16 md:grid-cols-3">
          <div className="bg-white p-8">
            <UserCog size={22} />

            <h3 className="mt-4 font-medium">Account Settings</h3>
            <p className="mt-2 text-sm text-black/60">
              Update your personal information anytime.
            </p>
          </div>

          <div className="bg-white p-8">
            <Lock size={22} />

            <h3 className="mt-4 font-medium">Password Security</h3>
            <p className="mt-2 text-sm text-black/60">
              Keep your password strong and secure.
            </p>
          </div>

          <div className="bg-white p-8">
            <Shield size={22} />

            <h3 className="mt-4 font-medium">Account Protection</h3>
            <p className="mt-2 text-sm text-black/60">
              We monitor activity to keep your account safe.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-16 py-16">
          {/* Account Info */}
          <section>
            <h2 className="text-2xl font-medium">
              Updating Account Information
            </h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                You can update your name, email address, and contact details
                from your account settings page.
              </p>

              <p>
                Make sure your email is always up to date for order
                notifications and account recovery.
              </p>
            </div>
          </section>

          {/* Password */}
          <section>
            <h2 className="text-2xl font-medium">Password Management</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                We recommend using a strong password that includes letters,
                numbers, and special characters.
              </p>

              <p>
                If you forget your password, you can reset it using the “Forgot
                Password” option on the login page.
              </p>
            </div>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-medium">Account Security</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                We use industry-standard security measures to protect your
                account from unauthorized access.
              </p>

              <p>
                We recommend logging out from shared or public devices after
                use.
              </p>
            </div>
          </section>

          {/* Issues */}
          <section>
            <h2 className="text-2xl font-medium">Suspicious Activity</h2>

            <div className="mt-6 space-y-4 text-black/70">
              <p>
                If you notice any unusual activity in your account, change your
                password immediately.
              </p>

              <p>
                Contact our support team if you believe your account has been
                compromised.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t border-black/10 pt-16">
            <h2 className="text-2xl font-medium">Need Account Help?</h2>

            <p className="mt-4 text-black/60">
              Our support team can help you recover or secure your account.
            </p>

            <button className="mt-8 flex h-12 items-center gap-2 border border-black px-6 text-sm font-medium transition-colors hover:bg-black hover:text-white">
              Contact Support
              <AlertTriangle size={18} />
            </button>
          </section>
        </div>
      </div>
    </section>
  );
}
