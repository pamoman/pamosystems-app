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
    },
    page: {
        on: {
            'page.heading': {
                populate: '*'
            }
        }
    },
    content: {
        on: {
            'content.heading': {
                populate: '*'
            },
            'content.image': {
                populate: '*'
            }
        }
    }
};