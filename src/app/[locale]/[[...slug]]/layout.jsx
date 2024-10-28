/*
 * Page Layout
 */
import { pageRequests, categoryRequests, productRequests } from '@/api';

const PageLayout = ({ children }) => (
    <>
        {children}
    </>
);

export const generateStaticParams = async ({ params }) => {
    const pageRes = await pageRequests.findMany(params);
    const categoryRes = await categoryRequests.findMany(params);
    const productRes = await productRequests.findMany(params);

    const { data: pageData = [] } = pageRes || {};
    const { data: categoryData = [] } = categoryRes || {};
    const { data: productData = [] } = productRes || {};

    const pages = pageData?.filter(page => page?.slug)?.map(page => ({
        slug: [ ['homepage', 'home'].includes(page.slug) ? '' : page.slug ]
    })) || [];

    const categories = categoryData?.filter(cat => cat?.slug)?.map(cat => ({
        slug: [ cat.slug ]
    })) || [];

    const products = productData?.filter(product => product?.slug)?.map(product => ({
        slug: [ product.slug ]
    })) || [];

    const staticParams = [
        ...pages,
        ...categories,
        ...products
    ];

    return staticParams;
};

export const dynamicParams = false;


export default PageLayout;
