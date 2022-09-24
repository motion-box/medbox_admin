import CalendarHeader from "../calendar_header";
import DayRow from "../day_row";
import Container from "./style";

const CalendarRow = () => {
  return (
    <Container>
      <CalendarHeader title="Сентябрь" type="usual" />
      <div className="day-week-container">
        <DayRow />
        <DayRow />
        <DayRow />
        <DayRow />
      </div>
    </Container>
  );
};

export default CalendarRow;
