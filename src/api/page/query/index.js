/*
 * Query - Page
 */

import { fields } from './fields.js';
import { populate } from './populate.js';
import { filters } from './filters.js';
import { pagination } from './pagination.js';
import { sort } from './sort.js';

export const getPageQuery = ({ locale, slug }) => {
    return {
        locale,
        fields,
        populate,
        filters: filters.slug.filter(slug)
    }
};

export const getManyPagesQuery = ({ search = null, filter = null, page = 1, pageSize = 10 }) => {
    return {
        fields,
        populate,
        filters,
        pagination: pagination({ page, pageSize }),
        sort
    }
};