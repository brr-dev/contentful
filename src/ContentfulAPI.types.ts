// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { FetcherConfig } from '@brr-dev/fetcher';

export type ContentfulAPITypeDelivery = 'delivery';
export type ContentfulAPITypePreview = 'preview';
export type ContentfulAPITypes =
    | ContentfulAPITypeDelivery
    | ContentfulAPITypePreview;

export type ContentfulAPISettings = Omit<FetcherConfig, 'baseURL'> & {
    /** Contentful Space ID */
    spaceID: string;

    /** Contentful Environment */
    environment: string;

    /** Contentful Auth Token */
    token: string;

    /** Contentful API Type: "preview" or "delivery" */
    apiType?: ContentfulAPITypes;
};
