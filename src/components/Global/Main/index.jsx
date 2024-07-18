/*
 * Components - Global - Main
 */

import { PageController } from '@/components/Blocks/Page';
import { ContentController } from '@/components/Blocks/Content';
import { Container } from '@mui/material';
import styles from './style';

export const MainContainer = ({ children }) => {

    return (
        <Container component="main">
            {children}
        </Container>
    )
};

const Main = ({ page = [], content = [] }) => {
    return (
        <Container sx={styles.main} component="main">
            <PageController blocks={page} />
            <ContentController blocks={content} />
        </Container>
    )
};

export default Main;