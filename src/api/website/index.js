/*
 * API - Website
 */

import { fetchInstance } from '@/config';
import { findOneQuery as findOnePageQuery } from '@/api/page/query';
import { findOneQuery as findOneCategoryQuery } from '@/api/category/query';
import { findOneQuery as findOneProductQuery } from '@/api/product/query';

const websiteRequests = {
    findSlug: async (params) => {
        try {
            if (Array.isArray(params.slug)) params.slug = params.slug[0];

            const pageQuery = findOnePageQuery(params);
            const categoryQuery = findOneCategoryQuery(params);
            const productQuery = findOneProductQuery(params);

            const res = await fetchInstance(`/website/slug`, {
                method: 'POST',
                body: JSON.stringify({
                    pageQuery,
                    categoryQuery,
                    productQuery
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