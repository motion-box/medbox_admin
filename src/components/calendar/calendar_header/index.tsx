import NavButton from "../../buttons/nav_button";
import TextProvider from "../../providers/text_provider";
import Container from "./style";
import { useCalendarHeaderOptionsType } from "./utils/calendar-header-options";
import { CalendarHeaderProps } from "./utils/calendar-header-type";

// TODO:change navbutton

const CalendarHeader = (props: CalendarHeaderProps) => {
  const { title } = props;
  const options = useCalendarHeaderOptionsType(props);
  return (
    <Container {...options}>
      <NavButton
        icon="ArrowLeftLinearIcon"
        onClick={() => "click"}
        options={{
          iconOptions: {
            color: "dynamic_light_gray60",
          },
        }}
        backgroundColor={options.btnBackgroundColor}
      />
      <TextProvider
        options={{
          fontSize: 17,
          fontWeight: 700,
          color: "static_black",
        }}
      >
        {title}
      </TextProvider>
      <NavButton
        icon="ArrowRightLinearIcon"
        onClick={() => "click"}
        options={{
          iconOptions: {
            color: "dynamic_light_gray60",
          },
        }}
        backgroundColor={options.btnBackgroundColor}
      />
    </Container>
  );
};

export default CalendarHeader;
