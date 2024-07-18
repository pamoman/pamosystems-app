/*
 * Compnents - Blocks - Content - Heading
 */

import defaultSettings from './settings';
import { Typography } from '@mui/material';

const Heading = ({ title, component = 'h2', variant = 'h2', userSettings = {} }) => {
    const settings = { ...defaultSettings, ...userSettings };

    return (
        <Typography component={component} variant={variant} {...settings}>
            {title}
        </Typography>
    )
};

export const PamoHeading = (data) => {
    const { settings, ...rest } = data;

    const props = {
        userSettings: settings,
        ...rest
    };

    return (
        <Heading {...props} />
    )
};

export default Heading;