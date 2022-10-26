import { useState } from "react";
import SearchFiled from "../../../components/navigations/search_filed";
import SegmentedPicker from "../../../components/navigations/segmented_picker";
import SegmentedPickerButton from "../../../components/navigations/segmented_picker_button";
import CommonTitler from "../../../components/navigations/titler/common_titler";
import { mailData } from "../../../components/resources/demo_data/right-panel-demo-data";
import Container from "./style";

const ChatPageNavigation = () => {
  const [value, setValue] = useState("");
  const [isSearching, setSearching] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const onSegmentClick = (index: number) => {
    index != activeIndex && setActiveIndex(index);
  };
  return (
    <Container>
      <CommonTitler
        title="Почта"
        type="big"
        button={{
          iconName: "SmsEditLinearIcon",
          text: "Написать",
          color: "static_blue",
          isReverse: true,
        }}
      />
      <SearchFiled
        isSearching={isSearching}
        setSearching={setSearching}
        value={value}
        setValue={setValue}
      />
      <SegmentedPicker>
        {mailData.map((item) => (
          <SegmentedPickerButton
            key={item.id}
            {...item}
            activeIndex={activeIndex}
            onClick={() => onSegmentClick(item.id)}
          />
        ))}
      </SegmentedPicker>
    </Container>
  );
};

export default ChatPageNavigation;
