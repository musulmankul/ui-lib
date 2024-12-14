import Button from "./components/Button";
import Input from "./components/Input";
import React, { useState } from "react";
import Typography from "./components/Typography";
import Heading from "./components/Heading";
import Tooltip from "./components/Tooltip";
import Accordion from "./components/Accordion";
function App() {
  const handleClick = () => {
    alert("Кнопка нажата!");
  };
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="App">
      
      <div className="Button">
        <Button size="lg" variant="primary" type="submit">
          lg, primary
        </Button>
        <Button size="md" variant="primary" type="reset">
          md, primary
        </Button>
        <Button size="sm" variant="primary" disabled="disabled">
          sm, primary
        </Button>
        <Button size="md" variant="primary">
          Hover
        </Button>

        <Button
          size="lg"
          variant="bordered"
          type="submit"
          onClick={handleClick}
        >
          lg, primary
        </Button>
        <Button size="md" variant="bordered" type="reset">
          md, primary
        </Button>
        <Button size="sm" variant="bordered">
          sm, primary
        </Button>
        <Button size="md" variant="bordered">
          Hover
        </Button>
      </div>
      <div className="Input">
        <Input disabled="disabled" label="Name" />
        <Input
          label="Name"
          placeholder="Musulmankul"
          value={inputValue}
          onChange={handleChange}
        />
        <Input label="Name" danger={true} value="Danger" />
      </div>
      <div className="Typography">
        <Typography size="sm">
          SM. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Typography size="md">
          MD. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Typography size="lg">
          LG. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </div>
      <div className="Heading">
        <Heading level={1}>H1. Heading</Heading>
        <Heading level={2}>H2. Heading</Heading>
        <Heading level={3}>H3. Heading</Heading>
        <Heading level={4}>H4. Heading</Heading>
        <Heading level={5}>H5. Heading</Heading>
        <Heading level={6}>H6. Heading</Heading>
      </div>
      <div className="Tooltip">
        <Tooltip  position="top" text='I am a tooltip'>
          Tooltip top
        </Tooltip>
        <Tooltip  position="left" text='I am a tooltip'>
          Tooltip left
        </Tooltip>
        <Tooltip  position="right" text='I am a tooltip'>
          Tooltip right
        </Tooltip>
        <Tooltip  position="bottom" text='I am a tooltip'>
          Tooltip bottom
        </Tooltip>
        
      </div>
      <div className="Accordion">
        <Accordion title="Accordion 1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Accordion>
      
        <Accordion title="Accordion 2" defaultOpen>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Accordion>
      </div>
      
    </div>
  );
}

export default App;
