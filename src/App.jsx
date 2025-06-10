import "./App.css";
import Container from "./Components/Container";
import ContextComp from "./store/ContextComp";
function App() {
  return (
    <ContextComp>
      <h1>Expense Tracker</h1>
      <Container />
    </ContextComp>
  );
}

export default App;
