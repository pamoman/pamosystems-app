/*
 * API - Category
 */

import { fetchInstance } from '@/config';
import qs from 'qs';
import { findOneQuery, findManyQuery } from './query';

const categoryRequests = {
    findMany: async (params) => {
        try {
            const query = findManyQuery(params);

            const queryStr = qs.stringify(query, {
                encodeValuesOnly: true,
            });

            const res = await fetchInstance(`/categories?${queryStr}`);

            return res;

        } catch(e) {
            console.log(e.message);
        }
    },
    findOne: async (params) => {
        try {
            const query = findOneQuery(params);

            const queryStr = qs.stringify(query, {
                encodeValuesOnly: true,
            });

            const res = await fetchInstance(`/categories?${queryStr}`);

            const [ data = {} ] = res?.data || [];

            return data;

        } catch(e) {
            console.log(e.message);
        }
    }
};

export default categoryRequests;