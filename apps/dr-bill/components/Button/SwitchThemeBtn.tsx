import { Switch, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { MoonOutline, SunOutline } from 'shared/icons';

export default function SwitchThemeButton({
  className,
}: {
  className?: string;
}) {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  return (
    <Switch
      initialChecked={isDark}
      css={{
        height: 'auto',
        div: {
          border: `1px solid ${isDark ? '$primaryDark' : '$primaryLight'}`,
          width: '80px',
        },
        span: {
          position: 'relative',
          background: isDark ? 'transparent' : '$primaryLight',
        },
        'span::after': {
          content: 'NIGHT\\AMODE',
          whiteSpace: 'pre',
          position: 'absolute',
          top: 2.5,
          left: 30,
          fontSize: '$tiny',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '11px',
          textAlign: 'center',
          maxWidth: '50px',
          height: '100%',
          margin: 'auto 0',
        },
        'span::before': {
          content: 'DAY\\AMODE',
          color: '$primaryLight',
          whiteSpace: 'pre',
          position: 'absolute',
          top: 2.5,
          right: 30,
          fontSize: '$tiny',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '11px',
          textAlign: 'center',
          maxWidth: '50px',
          height: '100%',
        },
      }}
      iconOn={<SunOutline className="text-black" />}
      iconOff={<MoonOutline className="text-white" />}
      onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
    />
  );
}
