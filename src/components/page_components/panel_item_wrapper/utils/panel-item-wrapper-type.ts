import { ButtonRowPropsDemo } from "../../../buttons/button_row";
import { LitleCardProps } from "../../../cards/litle_cards/utils/litle-card-type";

export type PanelItemWrapperProps = {
  id?: number;
  data: ItemData[];
  litleCardData?: LitleData;
  title?: string;
  children?: React.ReactNode;
  titler?: string;
  titlerBtn?: string;
};

type ItemData = { id: number; route?: string } & ButtonRowPropsDemo;
type LitleData = { id: number } & LitleCardProps;
