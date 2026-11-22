import React from "react";
import ProfileSectionLayout from "../ProfileSectionLayout";

export default function DangerZone() {
  return (
    <ProfileSectionLayout
      title="Danger Zone"
      description="Irreversible actions that permanently affect your account."
    >
      {/* DELETE ACCOUNT */}
      <div className="flex items-center justify-between rounded-xl border border-red-100 bg-red-50 px-4 py-4">
        <div>
          <p className="text-sm font-semibold text-red-600">Delete Account</p>

          <p className="mt-1 text-xs text-red-500">
            Permanently remove your account and all associated data
          </p>
        </div>

        <button
          className="
            rounded-lg
            bg-red-600
            px-4 py-2
            text-sm
            font-medium
            text-white
            transition
            hover:bg-red-700
            active:scale-[0.98]
          "
        >
          Delete
        </button>
      </div>

      {/* DEACTIVATE */}
      <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-4">
        <div>
          <p className="text-sm font-semibold text-gray-900">
            Deactivate Account
          </p>

          <p className="mt-1 text-xs text-gray-500">
            Temporarily disable your account. You can reactivate anytime.
          </p>
        </div>

        <button
          className="
            rounded-lg
            border border-gray-300
            px-4 py-2
            text-sm
            font-medium
            text-gray-700
            transition
            hover:border-black
            hover:text-black
            active:scale-[0.98]
          "
        >
          Deactivate
        </button>
      </div>
    </ProfileSectionLayout>
  );
}
