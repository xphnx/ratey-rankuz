import { Page } from './page';

export interface MenuItem {
	_id: {
		secondCategory: string;
	};
	pages: Page[];
}
