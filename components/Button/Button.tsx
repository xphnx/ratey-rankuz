import { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	appearance: 'ghost' | 'primary' | 'primary-radius';
}

export const Button = ({ appearance, children }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
				[styles.primaryRadius]: appearance === 'primary-radius',
			})}
		>
			{appearance === 'primary-radius' ? null : children}
		</button>
	);
};
