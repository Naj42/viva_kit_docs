import { Button, Checkbox, Input } from "@vivakits/react-components";
import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-purple-200 text-purple-800 px-8 py-2 rounded-md"
      >
        Clicked {count} times
      </button>
      <Button
        color="primary"
        variant="solid"
        size="xl"
        rounded="full"
        className="!bg-primary !text-primary-light"
      >
        Click me
      </Button>
      <Input
        placeholder="Enter name"
        label="Name"
        labelPosition="horizontal"
        color="danger"
      />
      <Checkbox className="" id="terms" color="secondary">
        Accept terms and conditions
      </Checkbox>
    </div>
  );
}

export default function MyApp() {
  return <MyButton />;
}
