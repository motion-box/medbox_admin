import { AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import SegmentedPickerButton from "../segmented_picker_button";
import { SegmentedPickerButtonProps } from "../segmented_picker_button/utils/segment-picker-button";
import Container from "./style";

type DataType = Omit<SegmentedPickerButtonProps, "activeIndex" | "onClick">;

const data: DataType[] = [
  {
    id: 0,
    title: "Входящие",
  },
  {
    id: 1,
    title: "Исходящие",
  },
  {
    id: 2,
    title: "Черновики",
  },
];

const SegmentedPicker = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onSegmentClick = (index: number) => {
    index != activeIndex && setActiveIndex(index);
  };
  return (
    <Container>
      <AnimateSharedLayout>
        {data.map((item) => (
          <SegmentedPickerButton
            key={item.id}
            {...item}
            activeIndex={activeIndex}
            onClick={() => onSegmentClick(item.id)}
          />
        ))}
      </AnimateSharedLayout>
    </Container>
  );
};

export default SegmentedPicker;
