import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from "react-player";

const YoutubeSlide = ({ url, isSelected }) => (
  <ReactPlayer width="100%" url={url} playing={isSelected} />
);

export const YoutubeAutoplayWithCustomThumbs = () => {
  const customRenderItem = (item, props) => (
    <item.type {...item.props} {...props} />
  );

  const getVideoThumb = (videoId) =>
    `https://img.youtube.com/vi/${videoId}/default.jpg`;

  const getVideoId = (url) =>
    url.substr("https://www.youtube.com/embed/".length, url.length);

  const customRenderThumb = (children) =>
    children.map((item) => {
      const videoId = getVideoId(item.props.url);
      return <img src={getVideoThumb(videoId)} />;
    });

  return (
    <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb}>
      <YoutubeSlide
        key="youtube-1"
        url="https://www.youtube.com/embed/AVn-Yjr7kDc"
      />
      <YoutubeSlide
        key="youtube-2"
        url="https://www.youtube.com/embed/mOdmi9SVeWY"
      />
      <YoutubeSlide
        key="youtube-3"
        url="https://www.youtube.com/embed/n0F6hSpxaFc"
      />
      <YoutubeSlide
        key="youtube-4"
        url="https://www.youtube.com/embed/0uGETVnkujA"
      />
    </Carousel>
  );
};
