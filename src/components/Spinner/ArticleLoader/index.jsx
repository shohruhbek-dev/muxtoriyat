import React, { useEffect, useRef, useState } from "react";
import ContentLoader from "react-content-loader";

const ArticleLoader = ({
  heading = { width: 140, height: 24 },
  row = 2,
  column = 5,
  padding = 12,
  borderRadius = 4,
  ...props
}) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const list = [];
  let height = 0;

  for (let i = 1; i <= row; i++) {
    for (let j = 0; j < column; j++) {
      const itemWidth = (containerWidth - padding * (column + 1)) / column || 0;

      const x = padding + j * (itemWidth + padding);

      const height1 = itemWidth;
      const height2 = 20;
      const height3 = 20;

      const space =
        padding + height1 + (padding / 2 + height2) + height3 + padding * 4;

      const y1 = padding + heading.height + padding * 2 + space * (i - 1);
      const y2 = y1 + padding + height1;
      const y3 = y2 + padding / 2 + height2;

      list.push(
        <React.Fragment key={`${i}-${j}`}>
          <rect
            x={x}
            y={y1}
            rx={borderRadius}
            ry={borderRadius}
            width={itemWidth}
            height={height1}
          />
          <rect x={x} y={y2} rx={0} ry={0} width={itemWidth} height={height2} />
          <rect
            x={x}
            y={y3}
            rx={0}
            ry={0}
            width={itemWidth * 0.6}
            height={height3}
          />
        </React.Fragment>
      );

      if (i === row) {
        height = y3 + height3;
      }
    }
  }

  return (
    <div ref={containerRef} style={{ width: "100%" }}>
      {containerWidth > 0 && (
        <ContentLoader
          viewBox={`0 0 ${containerWidth} ${height}`}
          width={containerWidth}
          height={height}
          {...props}
        >
          {heading && (
            <rect
              x={padding}
              y={padding}
              rx={0}
              ry={0}
              width={heading.width}
              height={heading.height}
            />
          )}
          {list}
        </ContentLoader>
      )}
    </div>
  );
};

export default ArticleLoader;
