import { FC, FunctionComponent, HtmlHTMLAttributes, ReactNode } from 'react';
import localFont from 'next/font/local';
import { AppContext, AppContextProvider } from '@/context/appContext';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import styles from './Layout.module.css';

const gilroyLight = localFont({
	src: '../fonts/Gilroy-Light.woff',
	variable: '--font-gilroy-light',
	weight: '300',
});
const gilroySemiBold = localFont({
	src: '../fonts/Gilroy-SemiBold.woff',
	variable: '--font-gilory-semibold',
	weight: '600',
});

interface LayoutProps extends HtmlHTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className={`${gilroyLight.variable} ${gilroySemiBold.variable} ${styles.container}`}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<main className={styles.main}>{children}</main>
			<Footer className={styles.footer} />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown> & AppContext>(
	Component: FunctionComponent<T>,
) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<AppContextProvider
				menu={props.menu}
				firstCategory={props.firstCategory}
				setMenu={props.setMenu}
			>
				<Layout>
					<Component {...props} />
				</Layout>
			</AppContextProvider>
		);
	};
};
