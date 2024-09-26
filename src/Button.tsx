import { CSSProperties } from "react";

type ButtonProps = {
  borderRadius: "Hard" | "Smooth" | "Circle";
  backgroundColor: "Primary" | "Hover" | "Deactive";
};

const Button = (props: ButtonProps) => {
  const BorderRadiusMap = {
    Hard: "0px",
    Smooth: "6px",
    Circle: "20px",
  };

  const BackgroundMap = {
    Primary: "pink",
    Hover: "skyblue",
    Deactive: "yellow",
  };
  const ButtonStyle: CSSProperties = {
    borderRadius: BorderRadiusMap[props.borderRadius],
    backgroundColor: BackgroundMap[props.backgroundColor],
    color: "white",
    padding: "10px 40px",
    border: "none",
    fontSize: "32px",
  };
  return <button style={ButtonStyle}>Button</button>;
};

export default Button;
