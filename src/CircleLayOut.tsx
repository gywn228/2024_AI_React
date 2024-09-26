import { CSSProperties } from "react";
import Circle from "./Circle";
type LayOutProps = {
  repeatNumber: number;
};

const CircleLayOut = (props: LayOutProps) => {
  const CircleLayStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.repeatNumber},1fr)`,
  };
  return (
    <section style={CircleLayStyle}>
      {Array(
        "red",
        "blue",
        "green",
        "black",
        "gray",
        "pink",
        "yellow",
        "purple",
        "skyblue",
        "orange"
      ).map((v) => (
        <Circle backgroundColor={v} />
      ))}
    </section>
  );
};
export default CircleLayOut;
