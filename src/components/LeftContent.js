import React from "react";
import SliderContainer from "./SliderContainer";
import ArtistsContainer from "./ArtistsContainer";
import AlbumsContainer from "./AlbumsContainer";

const LeftContent = () => {
  return (
    <div className="left-content">
      <SliderContainer />
      <ArtistsContainer />
      <AlbumsContainer />
    </div>
  );
};

export default LeftContent;
