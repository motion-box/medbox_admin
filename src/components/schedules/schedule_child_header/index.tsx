import ItemWrapProvider from "../../providers/item_wrap_provider";
import TextProvider from "../../providers/text_provider";
import Container from "./style";
import { useScheduleChildHeaderOptions } from "./utils/schedule-child-header-options";
import { ScheduleChildHeaderProps } from "./utils/shedule-child-header-type";

const ScheduleChildHeader = (props: ScheduleChildHeaderProps) => {
  const { date, week } = props;
  const options = useScheduleChildHeaderOptions(props);
  return (
    <Container {...options}>
      <TextProvider
        options={{
          fontSize: 12,
          fontWeight: 400,
          color: "dynamic_light_gray60",
        }}
      >
        {date}
      </TextProvider>
      <div className="week-wrap">
        <TextProvider
          options={{
            fontSize: 12,
            fontWeight: 400,
            color: options.week,
          }}
        >
          {week}
        </TextProvider>
      </div>
    </Container>
  );
};

export default ScheduleChildHeader;
