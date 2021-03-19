import React, { useRef, useEffect, useState } from 'react'
import Flickity from 'react-flickity-component'
import ReactPlayer from 'react-player'

import './flick.css'


function FlickCarousel() {
  const videos = [{
    id: 'a',
    src: 'https://youtu.be/1eP6PznWl2w'
  }, {
    id: 'b',
    src: 'http://www.youtube.com/embed/mOdmi9SVeWY'
  }]

  let flktyRef
  const videoRefs = useRef([])
  // videoRefs.current = new Array(videos.length).map((_, index) => {
  //   videoRefs.current[index] = React.createRef()
  // })

  const youtubeSlides = videos.map(({ src, id }, index) => {
    return (<ReactPlayer width="100%" url={src} key={id} ref={ele => videoRefs.current.push(ele)} />)
  })

  const flickityOptions = {
    wrapAround: true,
  }

  useEffect(() => {
    flktyRef.on('settle', () => {
      // const selectedIFrameSrc = flktyRef.selectedElement.querySelector('iframe').src.split('?')[0]
      console.log(`current index is ${flktyRef.selectedIndex}`, flktyRef, videoRefs.current)
      const selectedIndex = flktyRef.selectedIndex
      const offsetSlides = 1 // number of slides before videos
      videoRefs.current.map((videoRef, index) => {
        console.log(index, selectedIndex - offsetSlides)
        if (index === selectedIndex - offsetSlides) {
          videoRef.getInternalPlayer().playVideo()
        }
        if (index !== selectedIndex - offsetSlides) {
          videoRef.getInternalPlayer().pauseVideo()
        }
      })
      // flktyRef.cells.forEach(function (cell, i) {
      //   console.log(cell.element)
      //   if (cell.element === flktyRef.selectedElement) {
      //     // play video if active slide contains one
      //     // use <video playsinline ..> in your html to assure it works on ios devices
      //     const iframeTag = cell.element.querySelector('iframe')
      //     // console.log(video.src)
      //     if (iframeTag) {
      //       console.log('playing video ' + i)
      //       let iframeSrc = iframeTag.src
      //       iframeTag.src = iframeSrc
      //     }
      //
      //   }
      //
      // })
    })
  })


  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      // reloadOnUpdate // default false
      // static // default false
      flickityRef={(fr) => flktyRef = fr}
    >
      <span style={{
        backgroundColor: 'blue',
        width: '820px'
      }}>test</span>
      {youtubeSlides}
      <span style={{
        backgroundColor: 'blue',
        width: '820px'
      }}>test 2</span>
      <span style={{
        backgroundColor: 'blue',
        width: '820px'
      }}>test 3</span>
      {/*<YoutubeSlide key="youtube-1" url="https://youtu.be/1eP6PznWl2w" index={1}  />*/}
      {/*<YoutubeSlide key="youtube-2" url="http://www.youtube.com/embed/mOdmi9SVeWY" />*/}
      {/*<YoutubeSlide key="youtube-2" url="http://www.youtube.com/embed/mOdmi9SVeWY" index={1} />*/}
      {/*<YoutubeSlide key="youtube-3" url="http://www.youtube.com/embed/n0F6hSpxaFc" index={2} />*/}
      {/*<YoutubeSlide key="youtube-4" url="http://www.youtube.com/embed/0uGETVnkujA" index={3} />*/}
    </Flickity>
  )
}

export default FlickCarousel

/*
*
* */