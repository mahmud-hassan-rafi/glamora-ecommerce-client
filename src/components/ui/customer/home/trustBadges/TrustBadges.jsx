/* eslint-disable no-unused-vars */
import React from "react";
import { IoShieldCheckmarkSharp } from "react-icons/io5"; // Safe Payments
import { TbTruckDelivery } from "react-icons/tb"; // Nationwide delivery
import { IoArrowUndoCircle } from "react-icons/io5"; // Free and Easy return
import { IoPricetag } from "react-icons/io5"; // Best Price Ensure
import { RiVerifiedBadgeFill } from "react-icons/ri"; // 100% Authentic
import { FcRating } from "react-icons/fc"; // Best quality

const items = [
  {
    id: 1,
    Icon: IoShieldCheckmarkSharp,
    text: "Safe Payment",
    classes: "text-orange-500 text-2xl",
  },
  {
    id: 2,
    Icon: TbTruckDelivery,
    text: "Nationwide Delivery",
    classes: "text-blue-500  text-2xl",
  },
  {
    id: 3,
    Icon: IoArrowUndoCircle,
    text: "Free & Easy Return",
    classes: "text-green-500  text-2xl",
  },
  {
    id: 4,
    Icon: IoPricetag,
    text: "Best Price Ensure",
    classes: "text-pink-500  text-2xl",
  },
  {
    id: 5,
    Icon: RiVerifiedBadgeFill,
    text: "100% Authentic",
    classes: "text-purple-500  text-2xl",
  },
  {
    id: 6,
    Icon: FcRating,
    text: "Best Quality",
    classes: " text-2xl",
  },
];

const TrustBadges = () => {
  return (
    <div className="hidden w-full h-17.5 lg:flex justify-around bg-red-400/30">
      {items.map(({ id, Icon, classes, text }) => {
        return (
          <div
            key={id}
            className="flex gap-1.5 h-full items-center justify-start"
          >
            <Icon className={classes} />
            <p className="text-black text-sm">{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TrustBadges;
