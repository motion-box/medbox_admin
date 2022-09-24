import ItemWrapProvider from "../../providers/item_wrap_provider";
import TextProvider from "../../providers/text_provider";
import Container from "./style";
import { useDigitOptions } from "./utils/digit-options";
import { DigitProps } from "./utils/digit-type";

const Digit = (props: DigitProps) => {
  const { number, badge } = props;
  const options = useDigitOptions(props);
  return (
    <Container {...options}>
      {number && (
        <TextProvider
          options={{
            color: options.numberColor,
          }}
        >
          {number}
        </TextProvider>
      )}
      <div className="badge">
        {badge && <ItemWrapProvider isBadge={true} backgroundColor={badge} />}
      </div>
    </Container>
  );
};

export default Digit;
