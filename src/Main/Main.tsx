import Ban, { BanProps } from "../Ban/Ban";
import ChampionBox, { ChampionBoxProps } from "../Champion/ChampionBox";
import ChampionName, { ChampionNameProps } from "../Champion/ChampionName";
import ChampionCircle, {
  ChampionCircleProps,
} from "../ChampionCircle/ChampionCircle";
import Elevator, { ElevatorProps } from "../Elevator/Elevator";
import Lank, { LankProps } from "../Lank/Lank";
import Pick, { PickProps } from "../Pick/Pick";
import Position, { PositionProps } from "../Position/Position";
import Tier, { TierProps } from "../Tier/Tier";
import Winning, { WinningProps } from "../Winning/Winning";

export type MainProps = LankProps &
  PickProps &
  PositionProps &
  TierProps &
  WinningProps &
  ChampionBoxProps &
  ChampionCircleProps &
  ChampionNameProps &
  ElevatorProps &
  BanProps;

const Main = (props: MainProps) => {
  return (
    <section style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      <Lank lank={props.lank} />
      <Elevator elevator={props.elevator} />
      <ChampionBox championBox={props.championBox} />
      <ChampionName championName={props.championName} />
      <Tier tier={props.tier} />
      <Position position={props.position} />
      <Winning winning={props.winning} />
      <Pick pick={props.pick} />
      <Ban Ban={props.Ban} />
      <ChampionCircle championCircle={props.championCircle} />
    </section>
  );
};

export default Main;
