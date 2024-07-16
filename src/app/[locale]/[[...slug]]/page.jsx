/*
 * Main Pages
 */

import { pageRequests } from '@/api';

const Page = async ({ params }) => {
    const data = await pageRequests.fetchOne(params);

    const { title } = data;

    return (
        <main>
            <p>
                Page Title: {title}
            </p>
        </main>
    );
};

export default Page;