import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";
import ChannelRow from "./components/ChannelRow/";
import VideoRow from "./components/VideoRow";

const SearchPage = () => (
  <div className="searchPage">
    <div className="searchPage__filter">
      <TuneOutlinedIcon />
      <h2>FILTER</h2>
    </div>
    <hr />
    <ChannelRow
      image="https://i.ytimg.com/vi/6LzG9YMqLlA/maxresdefault.jpg"
      channel="Clever Programmer"
      verified
      subs="660k"
      noOfVideos={382}
      description="You cand do whatever you imagine"
    />
    <hr />

    <VideoRow
      views="779k"
      timestamp="4 days ago"
      description="Join to navy"
      image="https://i.ytimg.com/vi/6LzG9YMqLlA/maxresdefault.jpg"
      channel="Clever Programmer"
      subs="660k"
      title="Yvan eth nioj"
    />
    <VideoRow
      views="779k"
      timestamp="4 days ago"
      description="Join to navy"
      image="https://i.ytimg.com/vi/6LzG9YMqLlA/maxresdefault.jpg"
      channel="Clever Programmer"
      subs="660k"
      title="Yvan eth nioj"
    />
    <VideoRow
      views="779k"
      timestamp="4 days ago"
      description="Join to navy"
      image="https://i.ytimg.com/vi/6LzG9YMqLlA/maxresdefault.jpg"
      channel="Clever Programmer"
      subs="660k"
      title="Yvan eth nioj"
    />
    <VideoRow
      views="779k"
      timestamp="4 days ago"
      description="Join to navy"
      image="https://i.ytimg.com/vi/6LzG9YMqLlA/maxresdefault.jpg"
      channel="Clever Programmer"
      subs="660k"
      title="Yvan eth nioj"
    />
    <VideoRow
      views="779k"
      timestamp="4 days ago"
      description="Join to navy"
      image="https://i.ytimg.com/vi/6LzG9YMqLlA/maxresdefault.jpg"
      channel="Clever Programmer"
      subs="660k"
      title="Yvan eth nioj"
    />
    <VideoRow
      views="779k"
      timestamp="4 days ago"
      description="Join to navy"
      image="https://i.ytimg.com/vi/6LzG9YMqLlA/maxresdefault.jpg"
      channel="Clever Programmer"
      subs="660k"
      title="Yvan eth nioj"
    />
  </div>
);

export default SearchPage;
