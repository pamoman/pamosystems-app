/*
 * Components - Blocks - Page - Heading
 */

import { Typography } from '@mui/material';
import defaultProps from './props';

const Heading = ({ title, variant = 'h2', userProps = {} }) => {
    const props = { ...defaultProps, ...userProps };

    return (
        <Typography component={"h1"} variant={variant} gutterBottom {...props}>
            {title}
        </Typography>
    )
};

export const PamoHeading = (props) => {
    const { settings, ...rest } = props;

    props = {
        userSettings: settings,
        ...rest
    };

    return (
        <Heading {...props} />
    )
};

export default Heading;