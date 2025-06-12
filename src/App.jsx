import { SnackbarProvider } from "notistack";
import "./App.css";
import Container from "./Components/Container";
import ContextComp from "./store/ContextComp";
function App() {
  return (
    <SnackbarProvider>
      <ContextComp>
        <h1>Expense Tracker</h1>
        <Container />
      </ContextComp>
    </SnackbarProvider>
  );
}

export default App;
