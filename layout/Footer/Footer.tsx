import { FC, HtmlHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import styles from './Footer.module.css';

interface FooterProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export const Footer: FC<FooterProps> = ({ children, className, ...props }) => {
	return (
		<footer className={cn(styles.footer, className)} {...props}>
			Footer
		</footer>
	);
};
