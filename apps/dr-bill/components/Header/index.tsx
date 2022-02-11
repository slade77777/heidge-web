import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

export default function Header() {
  return (
    <div className="w-full h-[56px] mt-[50px] bg-red-500">
      <MobileHeader className="lg:hidden" />
      <DesktopHeader className="hidden lg:flex" />
    </div>
  )
}
