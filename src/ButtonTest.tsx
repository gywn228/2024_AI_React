import { CSSProperties } from "react";

type ButtonCSS = { backgroundColor: string; padding: string };
type ButtonText = { text: string };
type ButtonProps = ButtonCSS & ButtonText;

const Button = ({ text, padding, backgroundColor }: ButtonProps) => {
  const ButtonStyle: CSSProperties = {
    backgroundColor,
    padding,
  };
  return <button style={ButtonStyle}>{text}</button>;
};
export default Button;
