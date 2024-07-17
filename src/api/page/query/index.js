/*
 * Query - Page
 */

import { fields } from './fields.js';
import { populate } from './populate.js';
import { filters } from './filters.js';
import { pagination } from './pagination.js';
import { sort } from './sort.js';

export const findOneQuery = ({ locale, slug }) => {
    return {
        locale,
        fields,
        populate,
        filters: filters.slug.filter(slug)
    }
};

export const findManyQuery = ({ locale, filters: activeFilters = [], page = 1, pageSize = 10 }) => {
    const filterQuery = activeFilters.map(filter => {
        const key = Object.keys(filter)[0];
        const value = filter[key];

        return filters[key].filter(value);
    });

    return {
        locale,
        fields,
        populate,
        filters: filterQuery?.length ? { $and: filterQuery } : {},
        pagination: pagination({ page, pageSize }),
        sort
    }
};