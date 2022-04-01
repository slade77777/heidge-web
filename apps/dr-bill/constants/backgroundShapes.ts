import triangleSquare from '../public/assets/shapes/triangle-and-square.png';
import triangle from '../public/assets/shapes/triangle.png';
import polygonCircle from '../public/assets/shapes/polygon-and-circle.png';
import circle from '../public/assets/shapes/circle.png';

export const BACKGROUND_SHAPES = [
  {
    backgroundImage: `url(${triangleSquare.src})`,
    backgroundSize: '540px 370px',
    backgroundPosition: 'top right',
  },
  {
    backgroundImage: `url(${triangle.src})`,
    backgroundSize: '406px 422px',
    backgroundPosition: '0 948px',
  },
  {
    backgroundImage: `url(${polygonCircle.src})`,
    backgroundSize: '219px',
    backgroundPosition: '37% 1541px',
  },
  {
    backgroundImage: `url(${circle.src})`,
    backgroundSize: '368px',
    backgroundPosition: '74.375% 1849px',
  },
].reduce((prev, cur) => {
  prev['backgroundImage'].push(cur.backgroundImage);
  prev['backgroundSize'].push(cur.backgroundSize);
  prev['backgroundPosition'].push(cur.backgroundPosition);
  return prev;
}, {
  backgroundImage: [],
  backgroundSize: [],
  backgroundPosition: [],
})

