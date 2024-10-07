import { FC, useContext, useEffect } from 'react';
import cn from 'classnames';
import { AppContext } from '@/context/appContext';

interface MenuProps {
	className?: string;
}

export const Menu: FC<MenuProps> = ({ className }) => {
	const { menu } = useContext(AppContext);

	return (
		<ul className={cn('', className)}>
			{menu.map((item) => (
				<li key={item._id.secondCategory}>{item._id.secondCategory}</li>
			))}
		</ul>
	);
};
