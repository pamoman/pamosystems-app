/*
 * Page Layout
 */
import { websiteRequests, productRequests } from '@/api';

const ProductLayout = ({ children }) => (
    <>
        {children}
    </>
);

export const generateStaticParams = async ({ params }) => {
    const res = await websiteRequests.fetchAll();
    const { show_categories = false } = res || {};

    if (!show_categories) {
        const res = await productRequests.fetchAll(params);
        const { data = [] } = res || {};

        return data.map(product => ({
            slug: [ product.slug ]
        }))
    }

    return [];
};


export default ProductLayout;
