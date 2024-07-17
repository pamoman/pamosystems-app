/*
 * Category - Filters
 */

export const filters = {
    "slug": {
        filter: slug => ({
            slug
        })
    },
    /* Top Level Category - TLC */
    "isTLC": {
        filter: (value) => ({
            parents: {
                id: {
                    $null: value
                }
            }
        })
    }
};