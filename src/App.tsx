import Button from "./Button";
import Circle from "./Circle";
import GridLayout from "./GridLayout";

function App() {
  return (
    <div>
      <GridLayout
        columnNumber={5}
        component={
          <>
            <Button backgroundColor="Primary" borderRadius="Hard" />
            <Button backgroundColor="Primary" borderRadius="Smooth" />
            <Button backgroundColor="Primary" borderRadius="Circle" />
            <Button backgroundColor="Hover" borderRadius="Hard" />
            <Button backgroundColor="Hover" borderRadius="Smooth" />
            <Button backgroundColor="Hover" borderRadius="Circle" />
            <Button backgroundColor="Deactive" borderRadius="Hard" />
            <Button backgroundColor="Deactive" borderRadius="Smooth" />
            <Button backgroundColor="Deactive" borderRadius="Circle" />
            <Circle backgroundColor="pink" />
            <Circle backgroundColor="skyblue" />
            <Circle backgroundColor="yellow" />
            <Circle backgroundColor="green" />
            <Circle backgroundColor="blue" />
          </>
        }
      ></GridLayout>
    </div>
  );
}

export default App;
