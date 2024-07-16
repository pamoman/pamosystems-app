/*
 * API - Website
 */

import { fetchInstance } from '@/config';
import qs from 'qs';
import { getWebsiteQuery } from './query';

const websiteRequests = {
    fetchAll: async () => {
        try {
            const query = getWebsiteQuery();

            const queryStr = qs.stringify(query, {
                encodeValuesOnly: true,
            });

            const res = await fetchInstance(`/website?${queryStr}`);

            const { data = {} } = res || {};

            return data;
        } catch(e) {
            console.log(e.message);
        }
    }
};

export default websiteRequests;