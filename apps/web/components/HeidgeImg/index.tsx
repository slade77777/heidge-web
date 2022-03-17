import { FC, memo } from "react";
import { createSVG } from "./svg-templates";

const HeidgeImg: FC<{
  width?: number;
  color?: string;
  maxWidth?: string;
  imgURL?: string;
}> = ({ width, color, maxWidth, imgURL }) => {
  return (
    <div
      className={""}
      dangerouslySetInnerHTML={createSVG(width, color, maxWidth)}
    />
  );
};

export default memo(HeidgeImg);
