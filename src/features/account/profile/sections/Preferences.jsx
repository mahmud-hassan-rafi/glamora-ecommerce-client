import React, { useState } from "react";
import ProfileSectionLayout from "../ProfileSectionLayout";

export default function Preferences() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);
  const [marketing, setMarketing] = useState(false);

  return (
    <ProfileSectionLayout
      title="Preferences"
      description="Customize how your account behaves and how we communicate with you."
    >
      {/* THEME */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-6">
        <div>
          <p className="text-xs text-gray-500">Theme</p>
          <p className="mt-1 text-sm font-medium text-gray-900">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </p>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`
            relative inline-flex h-6 w-11 items-center rounded-full transition
            ${darkMode ? "bg-black" : "bg-gray-300"}
          `}
        >
          <span
            className={`
              inline-block h-4 w-4 transform rounded-full bg-white transition
              ${darkMode ? "translate-x-6" : "translate-x-1"}
            `}
          />
        </button>
      </div>

      {/* EMAIL NOTIFICATIONS */}
      <div className="flex items-center justify-between border-b border-gray-100 py-6">
        <div>
          <p className="text-xs text-gray-500">Email Notifications</p>
          <p className="mt-1 text-sm text-gray-600">
            Order updates, delivery status, and account alerts
          </p>
        </div>

        <button
          onClick={() => setEmailNotif(!emailNotif)}
          className={`
            relative inline-flex h-6 w-11 items-center rounded-full transition
            ${emailNotif ? "bg-black" : "bg-gray-300"}
          `}
        >
          <span
            className={`
              inline-block h-4 w-4 transform rounded-full bg-white transition
              ${emailNotif ? "translate-x-6" : "translate-x-1"}
            `}
          />
        </button>
      </div>

      {/* MARKETING EMAILS */}
      <div className="flex items-center justify-between pt-6">
        <div>
          <p className="text-xs text-gray-500">Marketing Emails</p>
          <p className="mt-1 text-sm text-gray-600">
            Promotions, discounts and product updates
          </p>
        </div>

        <button
          onClick={() => setMarketing(!marketing)}
          className={`
            relative inline-flex h-6 w-11 items-center rounded-full transition
            ${marketing ? "bg-black" : "bg-gray-300"}
          `}
        >
          <span
            className={`
              inline-block h-4 w-4 transform rounded-full bg-white transition
              ${marketing ? "translate-x-6" : "translate-x-1"}
            `}
          />
        </button>
      </div>
    </ProfileSectionLayout>
  );
}
