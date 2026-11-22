import DangerZone from "../profile/sections/DangerZone";
import PersonalInformation from "../profile/sections/PersonalInformation";
import Preferences from "../profile/sections/Preferences";
import SecuritySettings from "../profile/sections/SecuritySettings";

export default function Profile() {
  return (
    <section className="mx-auto max-w-7xl">
      {/* Page Header */}
      <header className="border-b border-gray-200 pb-8">
        <span className="text-sm font-medium text-gray-500">
          Account Settings
        </span>

        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
          Account Details
        </h1>

        <p className="mt-3 max-w-2xl text-base leading-7 text-gray-500">
          Manage your personal information, security preferences, and account
          settings.
        </p>
      </header>

      {/* Sections */}
      <div className="mt-14 space-y-16">
        <PersonalInformation />

        <SecuritySettings />

        <Preferences />

        <DangerZone />
      </div>
    </section>
  );
}
