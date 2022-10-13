import { SettingsButtonRowProps } from "./../../left_panel_buttons/settings_button/utils/settings-button-row-type";
import { PrimaryButtonRowProps } from "../../left_panel_buttons/primary_button_row/utils/primary-button-row-type";

export type PanelItemWrapperProps = {
  id?: number;
  title?: string;
  children?: React.ReactNode;
  data?: ItemData[];
  settingsBtnData?: SettignsData[];
};

type ItemData = { id: number; route?: string } & PrimaryButtonRowProps;
type SettignsData = { id: number; route?: string } & SettingsButtonRowProps;
