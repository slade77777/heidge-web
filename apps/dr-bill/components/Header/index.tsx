import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

export default function Header() {
  return (
    <div className="w-full mb-8 md:mb-12 lg:mb-25">
      <div className="h-12"/>
      <MobileHeader className="lg:hidden" />
      <DesktopHeader className="hidden lg:flex" />
    </div>
  )
}
