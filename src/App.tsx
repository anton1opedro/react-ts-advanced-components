import Container from "./components/Container.tsx";
import Button from "./components/Button.tsx";

function App() {
  return (
    <main>
      <Container as={Button} onClick={() => {}}>
        Click Me
      </Container>
    </main>
  );
}

export default App;
