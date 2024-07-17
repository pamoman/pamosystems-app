/*
 * Category - Populate
 */

export const populate = {
    parents: {
        populate: {
            fields: ['name', 'slug']
        }
    },
    subcategories: {
        populate: {
            fields: ['name', 'slug'],
            populate: {
                subcategories: {
                    populate: {
                        fields: ['name', 'slug'],
                        populate: {
                            subcategories: {
                                populate: {
                                    fields: ['name', 'slug']
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    products: {
        populate: {
            fields: ['name', 'slug']
        }
    }
};