import { memo } from "react";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <div>
      <DesktopFooter />
      <MobileFooter />
    </div>
  );
};

export default memo(Footer);
