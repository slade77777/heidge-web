import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

export default function Header() {
  return (
    <div className="w-full mb-3 md:mb-10 lg:mb-25">
      <div className="h-8 md:h-12" />
      <MobileHeader className="lg:hidden relative" />
      <DesktopHeader className="hidden lg:flex" />
    </div>
  );
}
