import { FC } from 'react';
import cn from 'classnames';
import { Page } from '@/interfaces/page';
import styles from './ThirdLevel.module.css';

interface ThirdLevelProps {
	pages: Page[];
	categoryRoute: string;
	className?: string;
}

export const ThirdLevel: FC<ThirdLevelProps> = ({ pages, categoryRoute, className }) => {
	return (
		<ul className={cn(styles.list, className)}>
			{pages.map((menuItem) => (
				<li key={menuItem.alias}>
					<a href={`/${categoryRoute}/${menuItem.alias}`} className={styles.link}>
						{menuItem.category}
					</a>
				</li>
			))}
		</ul>
	);
};
