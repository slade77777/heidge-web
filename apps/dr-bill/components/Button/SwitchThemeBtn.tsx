import {useTheme} from '@nextui-org/react';
import {useTheme as useNextTheme} from 'next-themes';
import {Button} from 'shared';
import {Day, Night} from 'shared/icons';

export default function SwitchThemeButton({className}: { className?: string }) {
  const {setTheme} = useNextTheme();
  const {isDark} = useTheme();
  return (
    <Button
      className="hover:opacity-40"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}>
      {isDark ? <Day className={className}/> : <Night className={className}/>}
    </Button>
  )
}
