import SwitchThemeButton from './Button/SwitchThemeBtn';
import Polygon from './Polygon';
import { useTheme } from '@nextui-org/react';

const Polygons = () => (
  <div className="absolute top-0 w-full h-full overflow-hidden">
    <Polygon
      size={300}
      className="animate-spin duration-500 triangle absolute top-0 right-0 rotate-[165deg] opacity-5"
    />
    <Polygon
      size={380}
      className="triangle absolute top-[950px] -left-10 rotate-[195deg] opacity-5"
    />
    <Polygon
      size={100}
      className="square absolute top-0 right-6 rotate-[60deg] opacity-5"
    />
    <Polygon
      size={87}
      className="square absolute top-[2200px] left-10 rotate-[30deg] opacity-5"
    />
    <Polygon
      size={368}
      className="circle absolute top-[1850px] right-[124px] opacity-5"
    />
    <Polygon className="pentagon absolute top-[1540px] left-1/3 -rotate-[15deg] opacity-5" />
    <Polygon
      size={57}
      className="circle absolute top-[1578px] left-1/3 opacity-5"
    />
  </div>
);

const Light = () => {
  const { isDark } = useTheme();
  return (
    <>
      <div
        className={`fixed -top-20 right-0 bg-white w-80 h-80 opacity-10 lg:opacity-${
          isDark ? 5 : 60
        } rounded-full blur-3xl backdrop-blur-3xl`}
      />
      <div
        className={`fixed -top-44 -left-16 bg-white w-80 h-80 opacity-30 lg:opacity-${
          isDark ? 5 : 50
        } rounded-full blur-3xl backdrop-blur-3xl`}
      />
      <div
        className={`fixed -bottom-20 left-1/2 -translate-x-1/2 bg-white w-1/3 h-1/3 opacity-20 lg:opacity-${
          isDark ? 5 : 50
        } rounded-full blur-3xl backdrop-blur-3xl`}
      />
    </>
  );
};

export default function Background({ children }) {
  return (
    <div className="background relative">
      <Light />
      <Polygons />
      <main>{children}</main>
      <div className="fixed bottom-0 md:top-1/2 right-5 z-10">
        <SwitchThemeButton />
      </div>
    </div>
  );
}
