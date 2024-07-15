/*
 * API - Page
 */

import axios from 'axios';
import qs from 'qs';
import { getPageQuery } from './query';

const pageRequests = {
    fetchAll: async () => {
        try {
            const res = await axios.get('http://10.10.0.10:1337/api/pages', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            return res.data;

        } catch(e) {
            console.log(e.message);
        }
    },
    fetchOne: async (slug) => {
        try {
            const query = getPageQuery(slug);

            const queryStr = qs.stringify(query, {
                encodeValuesOnly: true,
            });

            const res = await axios.get(`http://10.10.0.10:1337/api/pages?${queryStr}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            return res.data;

        } catch(e) {
            console.log(e.message);
        }
    }
};

export default pageRequests;