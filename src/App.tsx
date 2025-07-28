import { Input } from "./components/Input.tsx";
import { Form, type FormHandle } from "./components/Form.tsx";
import Button from "./components/Button.tsx";
import { useRef } from "react";

function App() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(value: unknown) {
    const extractedData = value as { name: string; age: number };
    console.log("Saved data:", extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave}>
        <Input type={"text"} label={"Name"} id={"name"} />
        <Input type={"number"} label={"Age"} id={"age"} />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
