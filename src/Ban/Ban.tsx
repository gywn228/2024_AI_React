export type BanProps = {
  Ban: number;
};

const Ban = (props: BanProps) => {
  return (
    <span style={{ color: "#57646F", fontSize: "12px" }}>{props.Ban}</span>
  );
};

export default Ban;
