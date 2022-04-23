import { useCallback } from 'react';
import { isClient } from 'utils/helpers';

export const useAnalytics = () => {
  const sendGtag = useCallback(
    (command: string, action: string, options: GtagOptions) => {
      if (
        isClient() &&
        process.env.NEXT_PUBLIC_GTAG_ID &&
        window.gtag !== undefined
      ) {
        window.gtag(command, action, options);
      }
    },
    [],
  );

  const logEvent = useCallback(
    (action: string, options: GtagOptions) => sendGtag('event', action, options),
    [sendGtag],
  );

  return {
    logEvent,
    sendGtag,
  };
};
