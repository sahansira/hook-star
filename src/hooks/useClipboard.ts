import { useState, useCallback } from 'react';

const useClipboard = (): [string, (text: string) => void] => {
  const [clipboard, setClipboard] = useState<string>('');

  const copyToClipboard = useCallback((text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => setClipboard(text));
    }
  }, []);

  return [clipboard, copyToClipboard];
};

export default useClipboard;
