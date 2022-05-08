declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_GTAG_ID: string;
    readonly MAILCHIMP_API_KEY: string;
    readonly MAILCHIMP_SERVER: string;
    readonly MAILCHIMP_LIST_ID: string;
    readonly GRAPH_URI: string;
  }
}

declare interface GtagOptions {
  event_category?: string;
  event_label?: string;
  value?: string;
  non_interaction?: boolean;
}

declare function gtag(command: 'event', action: string, options: GtagOptions);
declare interface Window {
  gtag?: gtag;
}
