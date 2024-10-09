import { FC, useContext } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { MenuContext } from '@/context/menuContext';
import { firstLevelMenu } from '@/helpers/routes';
import { SecondLevel } from './SecondLevel/SecondLevel';
import styles from './Menu.module.css';

interface MenuProps {
	className?: string;
}

export const Menu: FC<MenuProps> = ({ className }) => {
	const { firstCategory } = useContext(MenuContext);

	return (
		<ul className={cn(styles.list, className)}>
			{firstLevelMenu?.map((menuItem) => (
				<li key={menuItem.route}>
					<Link
						href={`/${menuItem.route}`}
						className={cn(styles.link, {
							[styles.active]: menuItem.category === firstCategory,
						})}
					>
						{menuItem.icon}
						{menuItem.name}
					</Link>

					{menuItem.category === firstCategory && <SecondLevel categoryRoute={menuItem.route} />}
				</li>
			))}
		</ul>
	);
};
