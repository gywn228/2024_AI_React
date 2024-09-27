export type WinningProps = {
  winning: number;
};

const Winning = (props: WinningProps) => {
  return (
    <span style={{ color: "#57646F", fontSize: "12px" }}>{props.winning} </span>
  );
};

export default Winning;
