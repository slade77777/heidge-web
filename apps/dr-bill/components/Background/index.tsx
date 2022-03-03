import {Text} from '@nextui-org/react';
import {Triangle1} from './Polygons';

export default function Background({children}) {
  return (
    <div className="relative">
      <Triangle1/>
      {children}
    </div>
  )
}
