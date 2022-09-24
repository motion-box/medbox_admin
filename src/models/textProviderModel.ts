import { AllColorsType } from "../components/resources/colorPalet";

export interface TextProviderModel {
  type?: TextType;
  children: string | number | React.ReactNode;
  options?: TextProviderOptions;
}

export interface TextProviderOptions {
  fontSize?: FontSizeType;
  fontWeight?: WeigtType;
  color: AllColorsType;
}

type TextType = "h1" | "h2" | "h3" | "span" | "p" | "div";
type FontSizeType = number;
type WeigtType = 400 | 500 | 600 | 700;
