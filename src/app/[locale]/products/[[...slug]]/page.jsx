/*
 * Products
 */

import { pageRequests } from '@/api';

const Products = async ({ params }) => {
    console.log('params', params);

    return (
        <main>
            <p>
                Product Page
            </p>
        </main>
    );
};

export default Products;