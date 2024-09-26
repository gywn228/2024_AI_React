import { CSSProperties } from "react";

type BoxProps = {
  backgroudColor: "pink" | "orange" | "skyblue" | " red";
  size: "small" | "medium" | "large";
};
const Box = (props: BoxProps) => {
  const sizeMap = {
    small: "50px",
    medium: "100px",
    large: "200px",
  };

  const BoxStyle: CSSProperties = {
    backgroundColor: props.backgroudColor,
    width: sizeMap[props.size],
    height: sizeMap[props.size],
  };
  return <div style={BoxStyle}></div>;
};

export default Box;
