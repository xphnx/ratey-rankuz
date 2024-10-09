import { FC, HtmlHTMLAttributes, memo } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { MenuContextProvider } from '@/context/menuContext';
import { MenuItem } from '@/interfaces/menu';
import { Menu } from '../Menu/Menu';
import Logo from './icons/logo.svg';
import styles from './Sidebar.module.css';

interface SidebarProps extends HtmlHTMLAttributes<HTMLDivElement> {
	menu: MenuItem[];
	firstCategory: number;
	setMenu?: (menu: MenuItem[]) => void;
}

const LogoType = memo(() => {
	return (
		<div className={cn(styles.logo)}>
			<Link href="/">
				<Logo width={30} height={30} />

				<span>FutureTech</span>
			</Link>
		</div>
	);
});

LogoType.displayName = 'LogoType';

export const Sidebar: FC<SidebarProps> = ({
	firstCategory,
	menu,
	setMenu,
	children,
	className,
	...props
}) => {
	return (
		<aside className={cn(styles.sidebar, className)} {...props}>
			<LogoType />
			<MenuContextProvider
				key={firstCategory}
				menu={menu}
				firstCategory={firstCategory}
				setMenu={setMenu}
			>
				<Menu />
			</MenuContextProvider>
		</aside>
	);
};
