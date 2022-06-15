declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_GTAG_ID: string;
    readonly NEXT_PUBLIC_REDDIT_PIXEL_ID: string;
    readonly NEXT_PUBLIC_URL: string;
    readonly NEXT_PUBLIC_NETWORK: string;
    readonly MAILCHIMP_API_KEY: string;
    readonly MAILCHIMP_SERVER: string;
    readonly MAILCHIMP_LIST_ID: string;
    readonly GRAPH_URI: string;
    readonly URL: string;
    readonly PREFINERY_API_KEY: string;
    readonly PREFINERY_SECRET: string;
  }
}

declare interface GtagOptions {
  event_category?: string;
  event_label?: string;
  value?: string;
  non_interaction?: boolean;
}

declare function gtag(command: 'event', action: string, options: GtagOptions);

declare function prefinery(
  command: string,
  data: Record<string, string>,
  callback?: (...args: any) => void,
);

declare function prefinery(
  command: string,
  data: Record<string, string>,
  callback?: (...args: any) => void,
);

declare function prefinery(command: string, callback?: (...args: any) => void);

declare function rdt(
  command: 'track',
  action: string,
  data?: Record<string, string>,
);

declare interface Window {
  gtag?: gtag;
  prefinery?: prefinery;
  rdt?: rdt;
}
