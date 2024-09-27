export type ChampionCircleProps = {
  championCircle: string;
};

const ChampionCircle = (props: ChampionCircleProps) => {
  return (
    <div style={{ width: "24px", height: "24px" }}>
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "9999px",
        }}
        src={props.championCircle}
        alt=""
      />
    </div>
  );
};

export default ChampionCircle;
