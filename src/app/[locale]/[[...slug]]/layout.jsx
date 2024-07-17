/*
 * Page Layout
 */
import { pageRequests, categoryRequests } from '@/api';

const PageLayout = ({ children }) => (
    <>
        {children}
    </>
);

export const generateStaticParams = async ({ params }) => {
    const pageRes = await pageRequests.fetchAll(params);
    const catRes = await categoryRequests.findMany({ ...params, filters: [ { isTLC: true } ] });

    const { data: pageData = [] } = pageRes || {};
    const { data: catData = [] } = catRes || {};

    const pages = pageData?.filter(page => page?.slug)?.map(page => ({
        slug: [ page.slug ]
    })) || [];

    const cats = catData?.filter(cat => cat?.slug)?.map(cat => ({
        slug: [ cat.slug ]
    })) || [];

    const staticParams = [
        ...pages,
        ...cats
    ];

    return staticParams;
};


export default PageLayout;
