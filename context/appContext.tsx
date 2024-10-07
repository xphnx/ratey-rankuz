import { createContext, PropsWithChildren, useState } from 'react';
import { MenuItem } from '@/interfaces/menu';
import { TopLevelCategory } from '@/interfaces/page';

export interface AppContext {
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
	setMenu?: (menu: MenuItem[]) => void;
}

export const AppContext = createContext<AppContext>({ menu: [], firstCategory: 0 });

export const AppContextProvider = ({
	menu,
	firstCategory,
	children,
}: PropsWithChildren<AppContext>): JSX.Element => {
	const [currentMenu, setCurrentMenu] = useState(menu);

	return (
		<AppContext.Provider value={{ menu: currentMenu, firstCategory, setMenu: setCurrentMenu }}>
			{children}
		</AppContext.Provider>
	);
};
