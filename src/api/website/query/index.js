/*
 * Query - Website
 */

import { fields } from './fields.js';
import { populate } from './populate.js';

export const getWebsiteQuery = () => {
    return {
        fields,
        populate
    }
};