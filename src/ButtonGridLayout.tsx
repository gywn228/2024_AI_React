import { CSSProperties } from "react";
import Button from "./Button";

type ButtonGridLayoutProps = {
  repeatNumber: number;
};

const ButtonGridLayout = (props: ButtonGridLayoutProps) => {
  const ButtonGridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.repeatNumber}, 1fr)`,
  };

  return (
    <section style={ButtonGridStyle}>
      <Button backgroundColor="Primary" borderRadius="Hard" />
      <Button backgroundColor="Primary" borderRadius="Smooth" />
      <Button backgroundColor="Primary" borderRadius="Circle" />
      <Button backgroundColor="Hover" borderRadius="Hard" />
      <Button backgroundColor="Hover" borderRadius="Smooth" />
      <Button backgroundColor="Hover" borderRadius="Circle" />
      <Button backgroundColor="Deactive" borderRadius="Hard" />
      <Button backgroundColor="Deactive" borderRadius="Smooth" />
      <Button backgroundColor="Deactive" borderRadius="Circle" />
    </section>
  );
};

export default ButtonGridLayout;
