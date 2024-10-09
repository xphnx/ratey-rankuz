import type { AppProps } from 'next/app';
import { AppContextProvider } from '@/context/appContext';
import { Layout } from '@/layout/Layout';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<AppContextProvider
			key={pageProps.firstCategory}
			menu={pageProps.menu}
			firstCategory={pageProps.firstCategory}
			setMenu={pageProps.setMenu}
		>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AppContextProvider>
	);
}
