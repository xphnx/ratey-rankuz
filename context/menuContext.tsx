import { createContext, PropsWithChildren, useState } from 'react';
import { MenuItem } from '@/interfaces/menu';
import { TopLevelCategory } from '@/interfaces/page';

export interface MenuContext {
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
	setMenu?: (menu: MenuItem[]) => void;
}

export const MenuContext = createContext<MenuContext>({ menu: [], firstCategory: 0 });

export const MenuContextProvider = ({
	menu,
	firstCategory,
	children,
}: PropsWithChildren<MenuContext>): JSX.Element => {
	const [currentMenu, setCurrentMenu] = useState(menu);

	return (
		<MenuContext.Provider value={{ menu: currentMenu, firstCategory, setMenu: setCurrentMenu }}>
			{children}
		</MenuContext.Provider>
	);
};
