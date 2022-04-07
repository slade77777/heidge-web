import { useTheme } from '@nextui-org/react';

type Props = {
  id?: string;
  size?: number;
  className?: string;
};

export default function Polygon({ size, className }: Props) {
  const { theme } = useTheme();
  const darkColor = theme.colors.accents9.value;
  return (
    <div className={className}>
      <style jsx>
        {`
          .circle,
          .square,
          .blur-circle {
            width: ${size}px;
            height: ${size}px;
            background: ${darkColor};
          }

          .circle {
            -moz-border-radius: 50%;
            -webkit-border-radius: 50%;
            border-radius: 50%;
          }

          .triangle {
            width: 0;
            height: 0;
            border-bottom: ${size * 0.866}px solid ${darkColor};
            border-left: ${size * 0.5}px solid transparent;
            border-right: ${size * 0.5}px solid transparent;
          }

          .pentagon {
            position: relative;
            width: 150px;
            box-sizing: content-box;
            border-width: 139px 50px 0;
            border-style: solid;
            border-color: ${darkColor} transparent;
          }

          .pentagon:before {
            content: '';
            position: absolute;
            height: 0;
            width: 0;
            top: -236px;
            left: -50px;
            border-width: 0 125px 97px;
            border-style: solid;
            border-color: transparent transparent ${darkColor};
          }
        `}
      </style>
    </div>
  );
}
