import '../styles/nprogress.css';
import NProgress from 'nprogress';
import { useEffect } from 'react';

NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false,
});

export default function useNextProgressbar(router: any) {
  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return null;
}
