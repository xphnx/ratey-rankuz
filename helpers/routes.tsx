import { Bolt, Book, PackageSearch, SquareLibrary } from 'lucide-react';
import { FirstLevelMenu } from '@/interfaces/menu';
import { TopLevelCategory } from '@/interfaces/page';

export const firstLevelMenu: FirstLevelMenu[] = [
	{
		route: 'courses',
		name: 'Курсы',
		icon: <SquareLibrary size={20} strokeWidth={1} />,
		category: TopLevelCategory.Courses,
	},
	{
		route: 'services',
		name: 'Сервисы',
		icon: <Bolt size={20} strokeWidth={1} />,
		category: TopLevelCategory.Services,
	},
	{
		route: 'books',
		name: 'Книги',
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
