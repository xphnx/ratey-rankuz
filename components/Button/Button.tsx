import { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import ArrowIcon from './icons/ArrowIcon.svg';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	appearance: 'ghost' | 'primary' | 'primaryCircle';
	withArrow?: boolean;
}

export const Button = ({
	appearance,
	children,
	withArrow = false,
	className,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button className={cn(styles.button, className, styles[appearance])} {...props}>
			{appearance === 'primaryCircle' ? <ArrowIcon /> : children}
			{withArrow && appearance !== 'primaryCircle' && (
				<span className={styles.iconWrapper}>
					<ArrowIcon />
				</span>
			)}
		</button>
	);
};
