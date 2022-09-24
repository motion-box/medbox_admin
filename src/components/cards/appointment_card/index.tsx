import ButtonRow from "../../buttons/button_row";
import CommonTitler from "../../navigations/titler/common_titler";
import { CommonTitlerProps } from "../../navigations/titler/common_titler/utils/common-titler-big";
import LitleCard from "../litle_cards";
import { LitleCardProps } from "../litle_cards/utils/litle-card-type";
import Container from "./style";

type LitleCardData = LitleCardProps;

const titlerData: LitleCardData[] = [
  {
    id: 0,
    type: "active",
    title: "Очередь",
    counter: "123",
  },
  {
    id: 1,
    type: "notActive",
    title: "Комната",
    counter: "123",
  },
  {
    id: 2,
    type: "notActive",
    title: "Длительность",
    counter: "123",
  },
];

type CommonTitlerData = CommonTitlerProps;

const commonTitlerData: CommonTitlerData[] = [
  {
    id: 0,
    type: "middle",
    title: "Не сегодня",
    button: {
      text: "Показать все",
      iconName: "ArrowRightLinearIcon",
    },
  },
];

const AppointmentCard = () => {
  return (
    <Container>
      {commonTitlerData.map((item) => (
        <CommonTitler key={item.id} {...item} />
      ))}
      <div className="card">
        <ButtonRow
          photo="/alean.webp"
          title="Alena"
          description="Driver"
          timeContainer={{
            time: "09:41",
            label: "ready",
          }}
        />
        <div className="litle-card-item">
          {titlerData.map((item) => (
            <LitleCard key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="card">
        <ButtonRow
          onClick={() => "/session_page"}
          photo="/avatar.webp"
          title="Ulugbek"
          description="Designer"
          timeContainer={{
            time: "09:41",
            label: "ready",
          }}
        />
        <div className="litle-card-item">
          {titlerData.map((item) => (
            <LitleCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AppointmentCard;
