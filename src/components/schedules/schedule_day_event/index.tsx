import IconProvider from "../../providers/icon_provider";
import ItemWrapProvider from "../../providers/item_wrap_provider";
import TextProvider from "../../providers/text_provider";
import Container from "./style";
import { useClientStatusOptions } from "./utils/client-status-options";
import { ClientStatusProps } from "./utils/client-status.type";

const SheduleDayEvent = (props: ClientStatusProps) => {
  const { time, title, duration, status, icon, photo } = props;
  const options = useClientStatusOptions(props);
  return (
    <Container {...options}>
      <div className="client-container">
        <div className="time-container">
          <TextProvider
            options={{
              fontSize: 11,
              fontWeight: 700,
              color: options.textColor,
            }}
          >
            {time}
          </TextProvider>
          {icon && (
            <IconProvider
              color={options.textColor}
              width={16}
              height={16}
              icon={icon}
            />
          )}
          {photo && <ItemWrapProvider photo={photo} size="16" />}
          <TextProvider
            options={{
              fontSize: 11,
              fontWeight: 700,
              color: options.textColor,
            }}
          >
            {title}
          </TextProvider>
        </div>
        <div className="wait-container">
          <TextProvider
            options={{
              fontSize: 11,
              fontWeight: 400,
              color: options.color,
            }}
          >
            {status}
          </TextProvider>
          <TextProvider
            options={{
              fontSize: 11,
              fontWeight: 700,
              color: options.color,
            }}
          >
            {duration}
          </TextProvider>
        </div>
      </div>
    </Container>
  );
};

export default SheduleDayEvent;
