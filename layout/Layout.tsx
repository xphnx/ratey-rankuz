import { FC, HtmlHTMLAttributes, ReactNode } from 'react';
import localFont from 'next/font/local';
import { MenuItem } from '@/interfaces/menu';
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
	menu: MenuItem[];
	firstCategory: number;
	setMenu?: (menu: MenuItem[]) => void;
}

export const Layout: FC<LayoutProps> = ({ children, ...pageProps }) => {
	return (
		<div className={`${gilroyLight.variable} ${gilroySemiBold.variable} ${styles.container}`}>
			<Header className={styles.header} />
			<Sidebar {...pageProps} className={styles.sidebar} />
			<main className={styles.main}>{children}</main>
			<Footer className={styles.footer} />
		</div>
	);
};
