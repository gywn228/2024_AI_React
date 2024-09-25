import { CSSProperties } from "react";

type BoxProps = {
  width: string;
  hight: string;
  backgroudcolor: "red" | "blue" | "green" | "orange";
  text: string;
};

const Box = (props: BoxProps) => {
  const BoxStyle: CSSProperties = {
    width: props.width,
    height: props.hight,
    backgroundColor: props.backgroudcolor,
  };
  return <div style={BoxStyle}>{props.text}</div>;
};
export default Box;
