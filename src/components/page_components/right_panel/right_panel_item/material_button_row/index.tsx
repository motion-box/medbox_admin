import ButtonRow from "../../../../buttons/button_row";
import { useMaterialButtonRowOptions } from "./utils/material-button-row-options";
import { MaterialButtonRowProps } from "./utils/material-button-row-type";

const MaterialButtonRow = (props: MaterialButtonRowProps) => {
  const options = useMaterialButtonRowOptions(props);
  return <ButtonRow {...options} />;
};

export default MaterialButtonRow;
