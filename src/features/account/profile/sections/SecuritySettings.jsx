import React, { useState } from "react";
import ProfileSectionLayout from "../ProfileSectionLayout";

export default function SecuritySettings() {
  const [twoFA, setTwoFA] = useState(false);

  return (
    <ProfileSectionLayout
      title="Security"
      description="Protect your account and manage authentication settings."
    >
      {/* PASSWORD */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-6">
        <div>
          <p className="text-xs text-gray-500">Password</p>
          <p className="mt-1 text-sm font-medium text-gray-900">••••••••••</p>
        </div>

        <button className="text-sm font-medium text-black hover:underline">
          Change
        </button>
      </div>

      {/* 2FA */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-6 pt-6">
        <div>
          <p className="text-xs text-gray-500">Two-Factor Authentication</p>

          <p className="mt-1 text-sm text-gray-600">
            Add extra layer of security to your account
          </p>
        </div>

        <button
          onClick={() => setTwoFA(!twoFA)}
          className={`
            relative inline-flex h-6 w-11 items-center rounded-full transition
            ${twoFA ? "bg-black" : "bg-gray-300"}
          `}
        >
          <span
            className={`
              inline-block h-4 w-4 transform rounded-full bg-white transition
              ${twoFA ? "translate-x-6" : "translate-x-1"}
            `}
          />
        </button>
      </div>

      {/* ACTIVE SESSIONS */}
      <div className="pt-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Active Sessions</p>
            <p className="mt-1 text-sm text-gray-900">2 devices logged in</p>
          </div>

          <button className="text-sm text-gray-500 hover:text-black">
            Manage
          </button>
        </div>
      </div>
    </ProfileSectionLayout>
  );
}
