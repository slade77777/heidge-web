import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function useDeepLink() {
  const router = useRouter();
  const [deepLink, setDeepLink] = useState('');
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_DEEP_LINK) {
      setDeepLink(
        process.env.NEXT_PUBLIC_DEEP_LINK +
          window.location.host +
          router.asPath,
      );
    }
  }, [router.asPath]);

  return deepLink;
}
