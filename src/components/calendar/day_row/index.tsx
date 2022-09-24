import Digit from "../digit";
import { DigitProps } from "../digit/utils/digit-type";
import Container from "./style";

interface DayRowData extends DigitProps {
  id: number;
}

const DayRowDemodata: DayRowData[] = [
  {
    id: 0,
    number: 29,
    type: "pastDay",
    badge: "static_green",
  },
  {
    id: 1,
    number: 30,
    type: "pastDay",
    badge: "static_green",
  },
  {
    id: 2,
    number: 31,
    type: "pastDay",
    badge: "static_green",
  },
  {
    id: 3,
    number: 1,
    type: "pastDay",
    badge: "static_green",
  },
  {
    id: 4,
    number: 2,
    type: "comingDay",
    badge: "dynamic_light_gray30",
  },
  {
    id: 5,
    number: 3,
    type: "dayOff",
  },
  {
    id: 6,
    number: 4,
    type: "guidance",
    badge: "static_blue",
  },
];

const DayRow = () => {
  return (
    <Container>
      {DayRowDemodata.map((item) => (
        <Digit key={item.id} {...item} />
      ))}
    </Container>
  );
};

export default DayRow;
