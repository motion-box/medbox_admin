import { AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
import SegmentedPickerButton from "../segmented_picker_button";
import { SegmentedPickerButtonProps } from "../segmented_picker_button/utils/segment-picker-button";
import Container from "./style";

type SegmentedPickerProps = {
  children: React.ReactNode;
};

const SegmentedPicker = (props: SegmentedPickerProps) => {
  const { children } = props;
  return (
    <Container>
      <AnimateSharedLayout>{children}</AnimateSharedLayout>
    </Container>
  );
};

export default SegmentedPicker;
