import Box from "./Box";

function App() {
  return (
    <div>
      <Box width="100px" hight="100px" backgroudcolor="red" text="나는"></Box>
      <Box width="200px" hight="200px" backgroudcolor="green" text="지금"></Box>
      <Box
        width="300px"
        hight="300px"
        backgroudcolor="orange"
        text="아프다"
      ></Box>
    </div>
  );
}

export default App;
