import type { NextPage } from 'next';
import { useTheme as useNextTheme } from 'next-themes';
import { Button, Switch, useTheme } from '@nextui-org/react';

const Home: NextPage = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <div>
      Using Next UI{' '}
      <a href="https://nextui.org/" target="_blank" rel="noreferrer">
        https://nextui.org
      </a>
      <div>
        The current theme is: {type}
        <Switch
          initialChecked={isDark}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        />
      </div>
      <Button>Hello</Button>
    </div>
  );
};

export default Home;
