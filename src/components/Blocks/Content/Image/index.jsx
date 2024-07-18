/*
 * Content Block - Image
 */

import NextImage from 'next/image';
import defaultSettings from './settings';
import { Grid, Typography } from '@mui/material';
import styles from './styles';

const Image = ({ image, userSettings = {} }) => {
    const { url: imageUrl, caption, alternativeText } = image || {};
    const { show_caption } = { ...defaultSettings, ...userSettings };

    return (imageUrl ?
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <NextImage 
                    src={`${process.env.NEXT_PUBLIC_PUBLIC_URL}${imageUrl}`}
                    alt={alternativeText}
                    layout='responsive'
                    objectFit='cover'
                    width={16}
                    height={9}
                    priority={true}
                />
                
                {show_caption &&
                    <Typography sx={styles.caption} color="primary" variant="subtitle1">{caption}</Typography>
                }
            </Grid>
        </Grid>
        :
        null
    )
};

export const PamoImage = (data) => {
    const { image, settings, ...rest } = data;

    const { url: imgUrl, formats } = image?.data?.attributes || {};

    const { url: imageUrl = imgUrl } = formats?.xlarge || formats?.large || formats?.medium || {};

    const props = {
        imageUrl,
        userSettings: settings,
        ...rest
    };

    return (
        <Image {...props} />
    )
};

export default Image;