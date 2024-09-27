export type PositionProps = {
  position: string;
};

const Position = (props: PositionProps) => {
  return (
    <div style={{ width: "24px", height: "24px" }}>
      <img
        src="https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-top.svg?v=1724034092925"
        alt=""
      />
    </div>
  );
};

export default Position;
