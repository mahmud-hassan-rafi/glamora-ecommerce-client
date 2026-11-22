import React, { useState } from "react";
import ProfileSectionLayout from "../ProfileSectionLayout";

export default function PersonalInformation() {
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    name: "Rafi Hasan",
    email: "rafi@gmail.com",
    phone: "+8801XXXXXXXXX",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // later: RTK Query update call
  };

  return (
    <ProfileSectionLayout
      title="Personal Information"
      description="Used for invoices, shipping and your profile details."
      action={
        !isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="text-sm font-medium text-black hover:underline"
          >
            Edit
          </button>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={() => setIsEditing(false)}
              className="text-sm text-gray-500 hover:text-black"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="text-sm font-medium text-black hover:underline"
            >
              Save
            </button>
          </div>
        )
      }
    >
      {/* NAME */}
      <div>
        <label className="text-xs text-gray-500">Name</label>

        {!isEditing ? (
          <p className="mt-1 text-sm font-medium text-gray-900">{form.name}</p>
        ) : (
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 w-full border-b border-gray-300 bg-transparent py-2 text-sm outline-none focus:border-black"
          />
        )}
      </div>

      {/* EMAIL */}
      <div>
        <label className="text-xs text-gray-500">Email</label>

        {!isEditing ? (
          <p className="mt-1 text-sm font-medium text-gray-900">{form.email}</p>
        ) : (
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 w-full border-b border-gray-300 bg-transparent py-2 text-sm outline-none focus:border-black"
          />
        )}
      </div>

      {/* PHONE */}
      <div>
        <label className="text-xs text-gray-500">Phone</label>

        {!isEditing ? (
          <p className="mt-1 text-sm font-medium text-gray-900">{form.phone}</p>
        ) : (
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mt-1 w-full border-b border-gray-300 bg-transparent py-2 text-sm outline-none focus:border-black"
          />
        )}
      </div>
    </ProfileSectionLayout>
  );
}
