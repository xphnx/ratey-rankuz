import { FC } from 'react';
import cn from 'classnames';
import { MenuItem } from '@/interfaces/menu';
import { ThirdLevel } from '../ThirdLevel/ThirdLevel';
import styles from './SecondLevel.module.css';

interface SecondLevelProps {
	menu: MenuItem[];
	categoryRoute: string;
	className?: string;
}

export const SecondLevel: FC<SecondLevelProps> = ({ menu, categoryRoute, className }) => {
	return (
		<ul className={cn(styles.list, className)}>
			{menu.map((menuItem) => (
				<li key={menuItem._id.secondCategory}>
					<a className={cn(styles.link)}>{menuItem._id.secondCategory}</a>
					{<ThirdLevel pages={menuItem.pages} categoryRoute={categoryRoute} />}
				</li>
			))}
		</ul>
	);
};
