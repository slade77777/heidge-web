import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

export default function Header() {
  return (
    <div className="w-full h-[110px]">
      <div className="h-[50px]"/>
      <MobileHeader className="lg:hidden" />
      <DesktopHeader className="hidden lg:flex" />
    </div>
  )
}
