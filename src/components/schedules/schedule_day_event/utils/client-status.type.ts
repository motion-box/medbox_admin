import { AllColorsType } from "../../../resources/colorPalet";
import { AllIconsType } from "../../../resources/allIcons";

export type ClientStatusProps = {
  time: string;
  title: string;
  duration: string;
  status?: string;
  type: "lose" | "active" | "warning" | "reserved" | "service";
} & ClientStatusOptional;

export type ClientStatusOptional =
  | {
      icon: AllIconsType;
      photo?: never;
    }
  | {
      icon?: never;
      photo: string;
    };

export type ClientStatusOptionsType = {
  color: AllColorsType;
  backgroundColor: AllColorsType;
  textColor: AllColorsType;
};
