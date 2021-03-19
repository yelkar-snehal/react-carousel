import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from "react-player";
import FlickCarousel from './flick'

const App = () => {
  const ref = useRef()
  const ref2 = useRef()

  const handleChange = (selectedIndex, item) => {
    console.log(selectedIndex, item, ref2.current)
    ref.current = selectedIndex
  }


  const YoutubeSlide = ({ url, isSelected, index }) => {
    // console.log(ref.current, isSelected, url)
    return (<ReactPlayer width="100%" url={url} playing={index === ref.current} />);
  };

  const customRenderItem = (item, props) => {
    return (<item.type {...item.props} {...props} />)
  };

  const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

  const getVideoId = (url) => url.substr('https://www.youtube.com/embed/'.length, url.length);

  const customRenderThumb = (children) =>
    children.map((item) => {
      const videoId = getVideoId(item.props.url);
      return <img src={getVideoThumb(videoId)} />;
    });

  return (
    <FlickCarousel />
  );
}

// <div ref={ref2}>
//   <Carousel renderItem={customRenderItem} infiniteLoop={true} onChange={handleChange}>
//     {/* <div>something else</div> */}
//     <YoutubeSlide key="youtube-1" url="https://www.youtube.com/embed/AVn-Yjr7kDc" index={0} />
//     <YoutubeSlide key="youtube-2" url="https://www.youtube.com/embed/mOdmi9SVeWY" index={1} />
//     <YoutubeSlide key="youtube-3" url="https://www.youtube.com/embed/n0F6hSpxaFc" index={2} />
//     <YoutubeSlide key="youtube-4" url="https://www.youtube.com/embed/0uGETVnkujA" index={3} />
//     {/* <div>something else</div> */}
//   </Carousel>
// </div>


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
