import TextProvider from "../../providers/text_provider";
import Container from "./style";
import { SegmentedPickerButtonProps } from "./utils/segment-picker-button";
import { motion } from "framer-motion";

const SegmentedPickerButton = (props: SegmentedPickerButtonProps) => {
  const { title, activeIndex, id, onClick } = props;
  return (
    <Container onClick={onClick}>
      <TextProvider
        options={{
          fontSize: 13,
          fontWeight: activeIndex === id ? 700 : 400,
          color: "dynamic_light_text",
        }}
      >
        {title}
      </TextProvider>
      {activeIndex === id && (
        <motion.div layoutId="segmented_picker_button" className="background" />
      )}
    </Container>
  );
};

export default SegmentedPickerButton;
