import React from "react";

export default function ProfileSectionLayout({
  title,
  description,
  children,
  action,
}) {
  return (
    <section className="grid grid-cols-1 gap-10 border-b border-gray-200 py-14 lg:grid-cols-12">
      {/* LEFT SIDE */}
      <div className="lg:col-span-4">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

        {description && (
          <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p>
        )}

        {action && <div className="mt-6">{action}</div>}
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:col-span-8 space-y-6">{children}</div>
    </section>
  );
}
