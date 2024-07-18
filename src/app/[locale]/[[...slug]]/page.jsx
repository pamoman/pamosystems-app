/*
 * Main Pages
 */

import { websiteRequests } from '@/api';
import { Main } from '@/components/Global';

const Page = async ({ params }) => {
    const data = await websiteRequests.findSlug(params);

    const { name } = data || {};

    return (
        <Main { ...data } />
    );
};

export default Page;