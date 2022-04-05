import { useEffect, useState } from 'react';

export default function useDeepLink() {
  const [deepLink, setDeepLink] = useState('');
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_DEEP_LINK) {
      setDeepLink(process.env.NEXT_PUBLIC_DEEP_LINK + window.location.href);
    }
  }, []);

  return deepLink;
}
