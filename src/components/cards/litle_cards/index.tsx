import TextProvider from "../../providers/text_provider";
import { LitleCardProps } from "./utils/litle-card-type";
import Container from "./style";
import { useLitleCardOptions } from "./utils/litle-card-options";

const LitleCard = (props: LitleCardProps) => {
  const { title, counter } = props;
  const options = useLitleCardOptions(props);
  return (
    <Container {...options}>
      <TextProvider
        options={{
          fontSize: 12,
          fontWeight: 400,
          color: "dynamic_light_gray60",
        }}
      >
        {title}
      </TextProvider>
      <TextProvider
        options={{
          fontSize: 17,
          fontWeight: options.fontWeight,
          color: options.textColor,
        }}
      >
        {counter}
      </TextProvider>
    </Container>
  );
};

export default LitleCard;
