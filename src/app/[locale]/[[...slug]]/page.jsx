/*
 * Main Pages
 */

import { websiteRequests } from '@/api';

const Page = async ({ params }) => {
    const data = await websiteRequests.findSlug(params);

    const { name } = data || {};

    return (
        <main>
            <p>
                Page Title: {name}
            </p>
        </main>
    );
};

export default Page;