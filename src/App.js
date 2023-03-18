import Parent from "./parent/Parent";
import { useSelector } from "react-redux";
import { grandParentText } from "./store/features/grandparentSlice";
function App() {
  const text = useSelector(grandParentText);
  return (
    <div
      className="App"
      style={{
        border: "1px solid black",
        height: "50vh",
        margin: "50px",
      }}
    >
      <h1>Grandparent Component</h1>
      <h2>{text}</h2>
      <Parent />
    </div>
  );
}

export default App;
