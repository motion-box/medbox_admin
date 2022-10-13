import ButtonRow from "../../../../buttons/button_row";
import { useSettingsButtonRowOptions } from "./utils/settings-button-row-options";
import { SettingsButtonRowProps } from "./utils/settings-button-row-type";

const SettingsButtonRow = (props: SettingsButtonRowProps) => {
  const options = useSettingsButtonRowOptions(props);
  return <ButtonRow {...options} />;
};

export default SettingsButtonRow;
