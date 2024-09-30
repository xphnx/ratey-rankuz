import { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import ArrowIcon from './icons/ArrowIcon.svg';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	appearance: 'ghost' | 'primary' | 'primary-circle';
	withArray?: boolean;
}

export const Button = ({
	appearance,
	children,
	withArray = false,
	className,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
				[styles.primaryCircle]: appearance === 'primary-circle',
			})}
			{...props}
		>
			{appearance === 'primary-circle' ? <ArrowIcon /> : children}
			{withArray && appearance !== 'primary-circle' && (
				<span className={styles.iconWrapper}>
					<ArrowIcon />
				</span>
			)}
		</button>
	);
};
