/*
 * Compnents - Blocks - Page - Controller
 */

import { Fragment } from 'react';
import { PageBlockController } from '@/components/Blocks/Page';

const PageController = ({ blocks = [] }) => {
    return (
        <>
            {blocks.map((block, i) => (
                <Fragment key={`page-block-${i}`}>
                    <PageBlockController {...block} index={i} />
                </Fragment>
            ))}
        </>
    );
};

export default PageController;