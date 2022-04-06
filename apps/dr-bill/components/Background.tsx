import SwitchThemeButton from './Button/SwitchThemeBtn';
import { BACKGROUND_SHAPES } from '../constants/backgroundShapes';
// import whiteCircle from '../public/assets/shapes/white-circle.png';

// const BlurCircle = () => {
//   return (
//     <div className="blur-circle">
//       <style jsx>{`
//         .blur-circle {
//           background-image: url(${whiteCircle.src}), url(${whiteCircle.src}), url(${whiteCircle.src}), url(${whiteCircle.src}), url(${whiteCircle.src}), url(${whiteCircle.src});
//           background-position: -150px -150px, right top, right -131px center, left center, center, center bottom -160px;
//           background-size: 331px, 190px, 230px, 145px, 343px, 332px;
//           background-repeat: no-repeat;
//           filter: blur(100px);
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           top: 0;
//           left: 0;
//         }
//       `}</style>
//     </div>
//   )
// }

export default function Background({children}) {
  const {backgroundImage, backgroundSize, backgroundPosition} = BACKGROUND_SHAPES;
  return (
    <div className="background">
      {/*<BlurCircle />*/}
      <main>{children}</main>
      <div className="fixed bottom-0 md:top-1/2 right-5 z-10">
        <SwitchThemeButton />
      </div>
      <style jsx>{`
        .background {
          position: relative;
          background-image: ${backgroundImage.join(', ')};
          background-size: ${backgroundSize.join(', ')};
          background-position: ${backgroundPosition.join(', ')};
          background-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
}
