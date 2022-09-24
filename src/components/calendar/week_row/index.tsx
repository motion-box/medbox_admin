import TextProvider from "../../providers/text_provider";
import Container from "./style";

const weekDayData = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const WeekRow = () => {
  return (
    <Container>
      {weekDayData.map((item) => (
        <div className="text-wrap">
          <TextProvider
            key={item}
            options={{
              fontSize: 13,
              fontWeight: 700,
              color: "dynamic_light_gray30",
            }}
          >
            {item}
          </TextProvider>
        </div>
      ))}
    </Container>
  );
};

export default WeekRow;
