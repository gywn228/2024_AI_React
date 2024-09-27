export type ElevatorProps = {
  elevator: number;
};

const Elevator = (props: ElevatorProps) => {
  return (
    <span style={{ color: "#57646F", fontSize: "12px" }}>{props.elevator}</span>
  );
};

export default Elevator;
