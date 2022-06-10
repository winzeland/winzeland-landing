import { winzerBaseUri, winzerCollectionUri } from 'config/opensea';

export const isServer = () => typeof window === 'undefined';

export const isClient = () => !isServer();

export const hasClassPrefix = (classNamePrefix: string, text?: string) =>
  text && text.includes(classNamePrefix);

export const linkWinzerToOpenSea = (id: string) =>
  `${winzerBaseUri[process.env.NEXT_PUBLIC_NETWORK]}/${id}`;

export const linkWinzerCollectionToOpenSea = (id: string) =>
  `${winzerCollectionUri[process.env.NEXT_PUBLIC_NETWORK]}`;

export const addUserToWaitlist = (first_name: string, email: string) =>
  new Promise((resolve, reject) => {
    try {
      prefinery(
        'addUser',
        {
          email,
          first_name,
        },
        user => {
          prefinery('popupReferralPage', console.warn);
          resolve(user);
        },
      );
    } catch (e) {
      reject(e);
    }
  });
