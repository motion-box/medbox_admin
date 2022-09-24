import { AllColorsType } from "../../../resources/colorPalet";

export type LitleCardProps = {
  id?: number;
  title: string;
  counter: string;
  type: "active" | "notActive";
};

export type LitleCardTypeOptions = {
  textColor: AllColorsType;
  fontWeight: 400 | 700;
};
