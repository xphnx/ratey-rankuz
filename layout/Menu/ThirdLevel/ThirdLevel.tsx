import { FC, useRef, useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Page } from '@/interfaces/page';
import styles from './ThirdLevel.module.css';

interface ThirdLevelProps {
	pages: Page[];
	categoryRoute: string;
	className?: string;
}

export const ThirdLevel: FC<ThirdLevelProps> = ({ pages, categoryRoute, className }) => {
	const router = useRouter();

	return (
		<ul className={cn(styles.list, className)}>
			{pages?.map((menuItem) => (
				<li key={menuItem.alias}>
					<Link
						href={`/${categoryRoute}/${menuItem.alias}`}
						className={cn(styles.link, {
							[styles.active]: `/${categoryRoute}/${menuItem.alias}` === router.asPath,
						})}
					>
						{menuItem.category}
					</Link>
				</li>
			))}
		</ul>
	);
};
