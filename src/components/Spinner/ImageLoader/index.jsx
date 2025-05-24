import React from "react";
import ContentLoader from "react-content-loader";

const ImageLoader = (props) => {
  const rows = 2;
  const columns = 5;
  const coverHeight = 85;
  const coverWidth = 65;
  const padding = 5;
  const speed = 1;

  const coverHeightWithPadding = coverHeight + padding;
  const coverWidthWithPadding = coverWidth + padding;
  const initial = 35;
  const totalWidth = columns * coverWidthWithPadding;
  const totalHeight = rows * coverHeightWithPadding + initial;
  const covers = Array(columns * rows).fill(1);

  return (
    <div
      style={{ width: "100%", aspectRatio: `${totalWidth} / ${totalHeight}` }}
    >
      <ContentLoader
        speed={speed}
        viewBox={`0 0 ${totalWidth} ${totalHeight}`}
        width="100%"
        height="100%"
        primaryColor="#242b34"
        secondaryColor="#343d4c"
        preserveAspectRatio="none"
        {...props}
      >

        {covers.map((_, i) => {
          const vy = Math.floor(i / columns) * coverHeightWithPadding + initial;
          const vx =
            (i * coverWidthWithPadding) % (columns * coverWidthWithPadding);
          return (
            <rect
              key={i}
              x={vx}
              y={vy-50}
              rx="0"
              ry="0"
              width={coverWidth}
              height={coverHeight}
            />
          );
        })}
      </ContentLoader>
    </div>
  );
};

export default ImageLoader;
