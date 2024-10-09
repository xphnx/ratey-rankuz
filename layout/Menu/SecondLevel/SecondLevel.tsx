import { FC, useContext } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { AppContext } from '@/context/appContext';
import { Page } from '@/interfaces/page';
import { ThirdLevel } from '../ThirdLevel/ThirdLevel';
import styles from './SecondLevel.module.css';

interface SecondLevelProps {
	categoryRoute: string;
	className?: string;
}

export const SecondLevel: FC<SecondLevelProps> = ({ categoryRoute, className }) => {
	const { menu, setMenu } = useContext(AppContext);
	const router = useRouter();

	const isOpen = (pages: Page[]): boolean => {
		const alias = router?.query?.alias;

		return !!(
			alias &&
			typeof alias === 'string' &&
			pages.map((page) => page.alias).includes(alias)
		);
	};

	const handleClick = (secondaryCategory: string): void => {
		const newMenu = menu.map((menuItem) => {
			if (menuItem._id.secondCategory === secondaryCategory) {
				menuItem.isOpened = !menuItem.isOpened;
			}

			return menuItem;
		});

		setMenu?.(newMenu);
	};

	return (
		<ul className={cn(styles.list, className)}>
			{menu?.map((menuItem) => (
				<li key={menuItem._id.secondCategory} className={styles['second-level-li']}>
					<a className={cn(styles.link)} onClick={() => handleClick(menuItem._id.secondCategory)}>
						{menuItem._id.secondCategory}
					</a>
					<div
						className={cn(styles['third-level'], {
							[styles['third-level-opened']]: menuItem.isOpened || isOpen(menuItem.pages),
						})}
					>
						<ThirdLevel pages={menuItem.pages} categoryRoute={categoryRoute} />
					</div>
				</li>
			))}
		</ul>
	);
};
