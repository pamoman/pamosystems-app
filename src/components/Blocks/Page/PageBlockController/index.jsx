/*
 * Compnents - Blocks - Page - Block Controller
 */

import { Page } from '@/components/Blocks';

const PageBlockController = ({ __component, ...props }, index) => {
    const blocks = {
        'page.heading': Page.Heading
    }

    const Block = blocks[__component] || null;

    return Block ? <Block key={`page-block-${index}`} {...props} /> : null;
};

export default PageBlockController;