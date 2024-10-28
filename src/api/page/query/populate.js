/*
 * Page - Populate
 */

export const populate = {
    parent: {
        fields: ['name', 'slug']
    },
    subpages: {
        fields: ['name', 'slug']
    },
    page: {
        populate: '*'
    },
    content: {
        populate: '*'
    }
};