import SwitchThemeButton from './Button/SwitchThemeBtn';
import Polygon from './Polygon';

const Polygons = () => (
  <div className="absolute top-0 w-full h-full overflow-hidden">
    <Polygon size={300} className="triangle absolute top-0 right-0 rotate-[165deg] opacity-5"/>
    <Polygon size={380} className="triangle absolute top-[950px] -left-10 rotate-[195deg] opacity-5"/>
    <Polygon size={100} className="square absolute top-0 right-6 rotate-[60deg] opacity-5"/>
    <Polygon size={87} className="square absolute top-[2200px] left-10 rotate-[30deg] opacity-5"/>
    <Polygon size={368} className="circle absolute top-[1850px] right-[124px] opacity-5"/>
    <Polygon className="pentagon absolute top-[1540px] left-1/3 -rotate-[15deg] opacity-5"/>
    <Polygon size={57} className="circle absolute top-[1578px] left-1/3 opacity-5"/>

    <Polygon size={331} className="blur-circle absolute -top-[150px] -left-[150px]"/>
    <Polygon size={190} className="blur-circle absolute -top-[61px] right-[165px] hidden lg:block"/>
    <Polygon size={230} className="blur-circle absolute top-1/2 -right-[131px]"/>
    <Polygon size={145} className="blur-circle absolute top-1/2 left-0"/>
    <Polygon size={343} className="blur-circle absolute top-1/2 left-1/2 hidden lg:block"/>
    <Polygon size={332} className="blur-circle absolute -bottom-[160px] left-1/2"/>
  </div>
)

export default function Background({children}) {
  return (
    <div className="background relative">
      <Polygons />
      <main>{children}</main>
      <div className="fixed bottom-0 md:top-1/2 right-5 z-10">
        <SwitchThemeButton />
      </div>
    </div>
  );
}
