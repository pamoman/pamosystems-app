/*
 * Root Layout
 */

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { dark } from '@/themes';
import "@/themes/globals.css";

const RootLayout = async ({ children, params }) => {
    const { locale } = params;
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={dark}>
                        <NextIntlClientProvider messages={messages}>
                            {children}
                        </NextIntlClientProvider>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
};

export const generateStaticParams = () => {
    const locales = ['en', 'sv'];

    return locales.map((locale) => ({locale}));
};

export default RootLayout;
