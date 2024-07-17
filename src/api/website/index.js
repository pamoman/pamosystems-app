/*
 * API - Website
 */

import { fetchInstance } from '@/config';
import qs from 'qs';
import { getWebsiteQuery } from './query';
import { getPageQuery } from '@/api/page/query';
import { findOneQuery as findOneCategoryQuery } from '@/api/category/query';

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
    },
    findSlug: async (params) => {
        try {
            if (Array.isArray(params.slug)) params.slug = params.slug.pop();

            const pageQuery = getPageQuery(params);
            const categoryQuery = findOneCategoryQuery(params);

            const res = await fetchInstance(`/website/slug`, {
                method: 'POST',
                body: JSON.stringify({
                    pageQuery,
                    categoryQuery
                })
            });

            const { data = {} } = res || {};

            return data;
        } catch(e) {
            console.log(e.message);
        }
    }
};

export default websiteRequests;