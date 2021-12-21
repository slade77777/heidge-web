import { useEffect, useState } from 'react';

export default function useScreen() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return {
    isMobile,
  };
}
