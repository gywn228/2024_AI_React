import { CSSProperties } from "react";

type CircleProps = {
  backgroundColor: string;
};

const Circle = ({ backgroundColor }: CircleProps) => {
  const CircleStyle: CSSProperties = {
    width: "100px",
    height: "100px",
    borderRadius: "9999px",
    backgroundColor,
  };

  return <div style={CircleStyle}></div>;
};

export default Circle;
