/*
 * Main Pages
 */

import { pageRequests } from '@/api';

export default async ({ params }) => {
    const { slug } = params;

    const res = await pageRequests.fetchOne(slug);

    const [ data = {} ] = res?.data || {};

    const { title } = data;

    console.log(data);

    return (
        <main>
            <p>
                Page Title: {title}
            </p>
        </main>
    );
};

export const generateStaticParams = async () => {
    const res = await pageRequests.fetchAll();
    const { data = [] } = res || {};

    return data.map(page => ({
        slug: [ page.slug ]
    }));
};