import ButtonRow from "../../../../buttons/button_row";
import { usePrimaryButtonRowOptions } from "./utils/primary-button-row-options";
import { PrimaryButtonRowProps } from "./utils/primary-button-row-type";

const PrimaryButtonRow = (props: PrimaryButtonRowProps) => {
  const options = usePrimaryButtonRowOptions(props);

  return <ButtonRow {...options} />;
};
export default PrimaryButtonRow;
