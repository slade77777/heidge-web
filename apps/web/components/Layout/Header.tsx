import { FC, memo } from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

const Header: FC = () => {
  return (
    <div>
      <MobileHeader />
      <DesktopHeader />
    </div>
  );
};

export default memo(Header);
