import { FC, HtmlHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import styles from './Sidebar.module.css';

interface SidebarProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export const Sidebar: FC<SidebarProps> = ({ children, className, ...props }) => {
	return (
		<aside className={cn(styles.sidebar, className)} {...props}>
			<Menu />
		</aside>
	);
};
