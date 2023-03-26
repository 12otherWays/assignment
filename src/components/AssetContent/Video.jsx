import React from "react";

function Video() {
  return (
    <div className="w-full">
      <iframe
        src="https://www.youtube.com/embed/TiMRwri1xJ8"
        frameborder="0"
        allowfullscreen
        title="video"
        height="300"
        width="550"
      ></iframe>
    </div>
  );
}

export default Video;
