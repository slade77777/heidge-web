import {PolygonAndEllipse, Triangle, TriangleAndSquare} from './Polygons';

export default function Background({children}) {
  return (
    <div className="relative">
      <TriangleAndSquare className="absolute right-10"/>
      <PolygonAndEllipse className="absolute top-2/3 right-1/2"/>
      <Triangle className="absolute top-1/2"/>
      {children}
    </div>
  )
}
