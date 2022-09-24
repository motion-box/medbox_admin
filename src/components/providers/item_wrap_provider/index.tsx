import React, { useState } from "react";
import Container from "./style";
import IconProvider from "../icon_provider";
import { ItemWrapProps } from "./utils/item-wrap.type";
import { useItemWrapOptions } from "./utils/item-wrap-options";
import Image from "next/image";

const ItemWrapProvider = (props: ItemWrapProps) => {
  const { icon, photo } = props;
  const { container } = useItemWrapOptions(props);
  return (
    <Container container={container}>
      {icon && <IconProvider {...icon} icon={icon.name} />}
      {photo && (
        <CustomImage
          url={photo}
          width={container.width}
          height={container.height}
        />
      )}
    </Container>
  );
};

type CustomImageProps = {
  url: string;
  width: string;
  height: string;
};
const CustomImage = ({ url, width, height }: CustomImageProps) => {
  const [photo, setPhoto] = useState(url);
  return (
    <Image
      src={photo}
      width={width}
      height={height}
      priority={true}
      alt={photo}
      objectFit="cover"
      // onError={() => setPhoto("/avatar.webp")}
      // placeholder="blur"
      // blurDataURL="/avatar.webp"
    />
  );
};

export default ItemWrapProvider;
