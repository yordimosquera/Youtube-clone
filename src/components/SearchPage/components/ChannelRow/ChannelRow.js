import React from "react";
import "./ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

const ChannelRow = ({
  image,
  channel,
  subs,
  noOfVideos,
  verified,
  description,
}) => (
  <div className="channelRow">
    <Avatar className="channelRow__logo" alt={channel} img={image} />
    <div className="channelRow__text">
      <h4>
        {channel} {verified && <VerifiedIcon />}
      </h4>
      <p>
        {subs} subscribers . {noOfVideos} videos
      </p>
      <p>{description}</p>
    </div>
  </div>
);

export default ChannelRow;
