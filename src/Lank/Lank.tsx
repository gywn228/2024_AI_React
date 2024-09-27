export type LankProps = {
  lank: number;
};

const Lank = (props: LankProps) => {
  return (
    <span style={{ color: "#9AA4AF", fontSize: "12px" }}>{props.lank}</span>
  );
};

export default Lank;
