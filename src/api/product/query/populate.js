/*
 * Product - Populate
 */

export const populate = {
    categories: {
        populate: {
            fields: ['name', 'slug']
        }
    },
    product_pages: {
        populate: {
            fields: ['name', 'slug']
        }
    }
};