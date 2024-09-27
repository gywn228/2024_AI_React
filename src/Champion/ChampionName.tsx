export type ChampionNameProps = {
  championName: string;
};

const ChampionName = (props: ChampionNameProps) => {
  return (
    <span style={{ fontSize: "12px", color: "#202D37" }}>
      {props.championName}
    </span>
  );
};

export default ChampionName;
