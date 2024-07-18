/*
 * Compnents - Blocks - Content - Block Controller
 */

import * as Content from '@/components/Blocks/Content';
import { Box } from '@mui/material';

const ContentBlocks = ({ __component, ...props }, index) => {
    const blocks = {
        'content.heading': Content.Heading,
        'content.image': Content.Image
    };

    console.log(__component, props);

    const Block = blocks[__component] || null;

    return Block
        ?
            <Box key={`content-block-${index}`} pb={4} component="div">
                <Block {...props} />
            </Box>
        :
            null;
};

export default ContentBlocks;