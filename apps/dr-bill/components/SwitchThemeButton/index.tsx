import {Switch, useTheme} from '@nextui-org/react';
import {useTheme as useNextTheme} from 'next-themes';

export default function SwitchThemeButton() {
  const {setTheme} = useNextTheme();
  const {isDark, type} = useTheme();
  return (
    <div>
      The current theme is: {type}
      <Switch
        initialChecked={isDark}
        size="xl"
        css={{
          'div': {
            border: '1px solid black',
            width: '84px',
          },
          'span': {
            position: 'relative',
            background: 'black',
          },
          'span::after': {
            content: 'NIGHT\\AMODE',
            whiteSpace: 'pre',
            position: 'absolute',
            top: 2.5,
            left: 30,
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '11px',
            textAlign: 'center',
            maxWidth: '50px',
            height: '100%',
            margin: 'auto 0'
          },
          'span::before': {
            content: 'DAY\\AMODE',
            color: 'black',
            whiteSpace: 'pre',
            position: 'absolute',
            top: 2.5,
            right: 30,
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '11px',
            textAlign: 'center',
            maxWidth: '50px',
            height: '100%',
          },
        }}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
    </div>
  )
}
