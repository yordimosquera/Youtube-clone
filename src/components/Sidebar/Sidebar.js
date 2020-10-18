import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatrchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAlOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import SidebarRow from "./components/SidebarRow";

import "./Sidebar.css";

const Sidebar = () => (
  <div className="sidebar">
    <SidebarRow Icon={HomeIcon} title="Home" />
    <SidebarRow Icon={WhatshotIcon} title="Trending" />
    <SidebarRow Icon={SubscriptionIcon} title="Subscriptions" />
    <hr />
    <SidebarRow Icon={VideoLibraryIcon} title="Library" />
    <SidebarRow Icon={HistoryIcon} title="History" />
    <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
    <SidebarRow Icon={WatrchLaterIcon} title="Watch later" />
    <SidebarRow Icon={ThumbUpAlOutlinedIcon} title="Liked videos" />
    <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
  </div>
);

export default Sidebar;
