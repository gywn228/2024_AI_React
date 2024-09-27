export type PickProps = {
  pick: number;
};

const Pick = (props: PickProps) => {
  return (
    <span style={{ color: "#57646F", fontSize: "12px" }}>{props.pick}</span>
  );
};

export default Pick;
