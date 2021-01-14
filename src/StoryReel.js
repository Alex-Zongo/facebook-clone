import React from "react";
import "./StoryReel.css";
import Story from "./Story";
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images.unsplash.com/photo-1610436680827-e6e4846b5bee?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
        profileSrc="https://avatars2.githubusercontent.com/u/57990589?s=460&u=62a7825f972ef5f26c1ece5993b1f5247a8e748b&v=4"
        title="Alex Zongo"
      />
      <Story
        image="https://images.unsplash.com/photo-1610457846174-35f12b7eab0c?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
        profileSrc="https://image.cnbcfm.com/api/v1/image/105773423-1551716977818rtx6p9yw.jpg?v=1551717428&w=678&h=381"
        title="Elon Musk"
      />
      <Story
        image="https://images.unsplash.com/photo-1610429128196-5302e83f51cd?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
        profileSrc="https://metroairportnews.com/wp-content/uploads/Guillaume-FAURY-Airbus-CEO.jpg"
        title="Guillaume Faury"
      />
      <Story
        image="https://images.unsplash.com/photo-1610435086061-845d1dbf7f93?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
        profileSrc="https://www.inquirer.com/resizer/w8KLILUJbr8XBt7flkL8ocYJQFU=/0x0:3589x2389/1400x932/cloudfront-us-east-1.images.arcpublishing.com/pmn/DR2KSCTTKNCMBGUZCCFOCQZTV4.jpg"
        title="John Legend"
      />
    </div>
  );
}

export default StoryReel;
