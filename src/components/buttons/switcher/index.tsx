import React, { useState } from "react";
import Container from "./style";

const Switch2 = () => {
  const [switchState, setSwitchState] = useState(true);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSwitchState(!switchState);
  };
  return (
    <Container htmlFor="checkbox" checked={switchState}>
      <input
        id="checkbox"
        type="checkbox"
        checked={switchState}
        onChange={handleOnChange}
      />
    </Container>
  );
};

export default Switch2;
