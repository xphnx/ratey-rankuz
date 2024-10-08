import { FC, useContext } from 'react';
import cn from 'classnames';
import { Bolt, Book, PackageSearch, SquareLibrary } from 'lucide-react';
import { Button } from '@/components';
import { AppContext } from '@/context/appContext';
import { FirstLevelMenu } from '@/interfaces/menu';
import { TopLevelCategory } from '@/interfaces/page';
import { SecondLevel } from './SecondLevel/SecondLevel';
import styles from './Menu.module.css';

const firstLevelMenu: FirstLevelMenu[] = [
	{
		route: 'courses',
		name: 'Курсы',
		icon: <SquareLibrary size={20} strokeWidth={1} />,
		category: TopLevelCategory.Courses,
	},
	{
		route: 'services',
		name: 'Сервис',
		icon: <Bolt size={20} strokeWidth={1} />,
		category: TopLevelCategory.Services,
	},
	{
		route: 'Книги',
		name: 'Books',
		icon: <Book size={20} strokeWidth={1} />,
		category: TopLevelCategory.Books,
	},
	{
		route: 'products',
		name: 'Продукты',
		icon: <PackageSearch size={20} strokeWidth={1} />,
		category: TopLevelCategory.Products,
	},
];

interface MenuProps {
	className?: string;
}

export const Menu: FC<MenuProps> = ({ className }) => {
	const { menu, firstCategory } = useContext(AppContext);

	return (
		<ul className={cn(styles.list, className)}>
			{firstLevelMenu.map((menuItem) => (
				<li key={menuItem.route}>
					<a
						href={`/${menuItem.route}`}
						className={cn(styles.link, {
							[styles.active]: menuItem.category === firstCategory,
						})}
					>
						{menuItem.icon}
						{menuItem.name}
					</a>
					{menuItem.category === firstCategory && (
						<SecondLevel menu={menu} categoryRoute={menuItem.route} />
					)}
				</li>
			))}
		</ul>
	);
};
