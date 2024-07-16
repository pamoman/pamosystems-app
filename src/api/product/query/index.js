/*
 * Query - Product
 */

import { fields } from './fields.js';
import { populate } from './populate.js';
import { sort } from './sort.js';
import { pagination } from './pagination.js';
import { filters } from './filters.js';

export const getProductQuery = ({ locale, slug }) => {
    return {
        locale,
        fields,
        populate,
        sort,
        pagination,
        filters: filters.slug.filter(slug)
    }
};

export const getManyProductsQuery = ({ locale, filter = null, page = 1, pageSize = 10 }) => {
    return {
        locale,
        fields,
        populate,
        sort,
        pagination: pagination({ page, pageSize }),
        filters: {}
    }
};