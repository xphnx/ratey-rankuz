import { FC } from 'react';
import { MenuItem } from '@/interfaces/menu';

interface SearchProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}

const Search: FC<SearchProps> = (): JSX.Element => {
	return <>{'Search Page'}</>;
};

export default Search;
