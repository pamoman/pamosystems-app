/*
 * API - Page
 */

import { fetchInstance } from '@/config';
import qs from 'qs';
import { findOneQuery, findManyQuery } from './query';

const pageRequests = {
    findOne: async (params) => {
        try {
            const query = findOneQuery(params);

            const queryStr = qs.stringify(query, {
                encodeValuesOnly: true,
            });

            const res = await fetchInstance(`/pages?${queryStr}`);

            const [ data = {} ] = res?.data || [];

            return data;

        } catch(e) {
            console.log(e.message);
        }
    },
    findMany: async (params) => {
        try {
            const query = findManyQuery(params);

            const queryStr = qs.stringify(query, {
                encodeValuesOnly: true,
            });

            const res = await fetchInstance(`/pages?${queryStr}`);

            return res;

        } catch(e) {
            console.log(e.message);
        }
    }
};

export default pageRequests;