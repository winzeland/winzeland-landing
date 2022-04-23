export const isServer = () => typeof window === 'undefined';

export const isClient = () => !isServer();

export const hasClassPrefix = (classNamePrefix: string, text?: string) =>
  text && text.includes(classNamePrefix);
