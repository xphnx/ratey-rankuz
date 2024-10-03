import { FC, HtmlHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import styles from './Header.module.css';

interface HeaderProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export const Header: FC<HeaderProps> = ({ children, className, ...props }) => {
	return (
		<header className={cn(styles.header, className)} {...props}>
			Header
		</header>
	);
};
