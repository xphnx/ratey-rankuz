import { HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import styles from './Paragraph.module.css';

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
	children: ReactNode;
	size: 's' | 'm' | 'l';
}

export const Paragraph = ({ size, children, className, ...props }: ParagraphProps): JSX.Element => {
	return (
		<p className={cn(styles.p, className, styles[size])} {...props}>
			{children}
		</p>
	);
};
