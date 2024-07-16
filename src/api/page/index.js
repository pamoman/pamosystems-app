/*
 * API - Page
 */

import { fetchInstance } from '@/config';
import qs from 'qs';
import { getPageQuery } from './query';

const pageRequests = {
    fetchAll: async () => {
        try {
            const res = await fetchInstance(`/pages`);

            return res;

        } catch(e) {
            console.log(e.message);
        }
    },
    fetchOne: async (params) => {
        try {
            const query = getPageQuery(params);

            const queryStr = qs.stringify(query, {
                encodeValuesOnly: true,
            });

            const res = await fetchInstance(`/pages?${queryStr}`);

            const [ data = {} ] = res?.data || [];

            return data;

        } catch(e) {
            console.log(e.message);
        }
    }
};

export default pageRequests;