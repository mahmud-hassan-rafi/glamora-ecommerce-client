import React from "react";

const activities = [
  {
    id: 1,
    text: "Order Delivered — Nike Air Max 270",
    time: "Today",
    type: "success",
  },
  {
    id: 2,
    text: "Password changed successfully",
    time: "Yesterday",
    type: "info",
  },
  {
    id: 3,
    text: "Order shipped — MacBook Air M4",
    time: "2 days ago",
    type: "warning",
  },
  {
    id: 4,
    text: "Address updated (Dhaka)",
    time: "1 week ago",
    type: "neutral",
  },
];

export default function ActivityTimeline() {
  return (
    <section className="space-y-5">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Activity</h2>

        <button className="text-sm text-gray-500 hover:text-black transition">
          View all →
        </button>
      </div>

      {/* FEED */}
      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-1 top-1 h-full w-[1px] bg-gray-200" />

        <div className="space-y-6">
          {activities.map((item, idx) => (
            <div key={item.id} className="flex gap-4">
              {/* DOT */}
              <div className="relative z-10 flex items-start">
                <div
                  className={`
                    mt-1 h-2.5 w-2.5 rounded-full
                    ${
                      item.type === "success"
                        ? "bg-green-500"
                        : item.type === "warning"
                          ? "bg-yellow-500"
                          : item.type === "info"
                            ? "bg-blue-500"
                            : "bg-gray-400"
                    }
                  `}
                />
              </div>

              {/* CONTENT (NO CARD) */}
              <div className="flex-1">
                <p className="text-sm text-gray-900 leading-relaxed">
                  {item.text}
                </p>

                <p className="text-xs text-gray-400 mt-1">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
