export type ChampionBoxProps = {
  championBox: string;
};

const ChampionBox = (props: ChampionBoxProps) => {
  return (
    <div style={{ width: "32px", height: "32px", borderRadius: "4px" }}>
      <img
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        src={props.championBox}
        alt=""
      />
    </div>
  );
};

export default ChampionBox;
