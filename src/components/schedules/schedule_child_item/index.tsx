import ItemWrapProvider from "../../providers/item_wrap_provider";
import TextProvider from "../../providers/text_provider";
import Container from "./style";
import { useScheduleChildItemOptions } from "./utils/schedule-child-options";
import { ScheduleChildProps } from "./utils/schedule-child.type";

const ScheduleChildItem = (props: ScheduleChildProps) => {
  const { largeTitle, time, badge, photo } = props;
  const options = useScheduleChildItemOptions(props);
  return (
    <Container {...options}>
      <div className="left-container">
        {badge && <ItemWrapProvider isBadge={true} backgroundColor={badge} />}
        {photo && <ItemWrapProvider photo={photo} size="16" />}
        <TextProvider
          options={{
            fontSize: 12,
            fontWeight: 400,
            color: options.largeTitleColor,
          }}
        >
          {largeTitle}
        </TextProvider>
      </div>
      <TextProvider
        options={{
          fontSize: 12,
          fontWeight: 400,
          color: options.timeColor,
        }}
      >
        {time}
      </TextProvider>
    </Container>
  );
};

export default ScheduleChildItem;
