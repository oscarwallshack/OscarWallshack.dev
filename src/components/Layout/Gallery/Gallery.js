import React from "react";

const Gallery = () => {
  const photos = [
    "https://example.com/photo1.jpg",
    "https://example.com/photo2.jpg",
    "https://example.com/photo3.jpg",
  ];

  return <section photos={photos} />;
};

export default Gallery;