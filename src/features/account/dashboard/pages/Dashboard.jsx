import React from "react";
import QuickActions from "../components/QuickActions";
import ActiveOrders from "../components/active-orders/ActiveOrders";
import WishlistPreview from "../components/WishlistPreview";
import RecentOrders from "../components/RecentOrders";
import RecommendedForYou from "../components/RecommendedForYou/RecommendedForYou";
import ActivityTimeline from "../components/ActivityTimeline";
import RewardsMembership from "../components/RewardsMembership/RewardMembership";
import DashboardFooterCTA from "../components/DashboardFooterCTA";
import DashboardHero from "../components/DashboardHero";

const Dashboard = () => {
  return (
    <div className="space-y-6 md:space-y-10 w-full">
      <DashboardHero />
      <QuickActions />
      <ActiveOrders />
      <WishlistPreview />
      <RecentOrders />
      <RecommendedForYou />
      <ActivityTimeline />
      <RewardsMembership />
      <DashboardFooterCTA />
    </div>
  );
};

export default Dashboard;
