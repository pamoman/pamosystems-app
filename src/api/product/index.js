/*
 * API - Product
 */

import { fetchInstance } from '@/config';
import qs from 'qs';
import { getProductQuery, getManyProductsQuery } from './query';

const productRequests = {
    fetchAll: async (params) => {
        try {
            const query = getManyProductsQuery(params);

            const queryStr = qs.stringify(query, {
                encodeValuesOnly: true,
            });

            const res = await fetchInstance(`/products?${queryStr}`);

            return res;

        } catch(e) {
            console.log(e.message);
        }
    },
    fetchOne: async (params) => {
        try {
            const query = getProductQuery(params);

            const queryStr = qs.stringify(query, {
                encodeValuesOnly: true,
            });

            const res = await fetchInstance(`/products?${queryStr}`);

            const [ data = {} ] = res?.data || [];

            return data;

        } catch(e) {
            console.log(e.message);
        }
    }
};

export default productRequests;