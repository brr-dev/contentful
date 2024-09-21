/*
 * @author Brandon Ramirez <brandon@brr.dev>
 * @copyright Copyright (c) 2024
 */

import { ContentfulAPI } from '../src/Contentful';

describe('ContentfulAPI tests', () => {
    it('builds without error', () => {
        expect(() => {
            new ContentfulAPI({
                token: 'faketoken',
                spaceID: 'fakespaceid',
                environment: 'fakeenv',
            });
        }).not.toThrow();
    });
});
