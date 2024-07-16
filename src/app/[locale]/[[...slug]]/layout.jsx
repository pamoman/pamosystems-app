/*
 * Page Layout
 */
import { pageRequests } from '@/api';

const PageLayout = ({ children }) => (
    <>
        {children}
    </>
);

export const generateStaticParams = async () => {
    const res = await pageRequests.fetchAll();
    const { data = [] } = res || {};

    return data.map(page => ({
        slug: [ page.slug ]
    }));
};


export default PageLayout;
