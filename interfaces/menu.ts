import { Page, TopLevelCategory } from './page';

export interface MenuItem {
	_id: {
		secondCategory: string;
	};
	pages: Page[];
	isOpened?: boolean;
}

export interface FirstLevelMenu {
	route: string;
	name: string;
	icon: JSX.Element;
	category: TopLevelCategory;
}
