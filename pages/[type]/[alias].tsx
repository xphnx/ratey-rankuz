import { FC } from 'react';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { firstLevelMenu } from '@/helpers/routes';
import { MenuItem } from '@/interfaces/menu';
import { Page } from '@/interfaces/page';
import { Product } from '@/interfaces/product';

interface CourseProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
	page: Page;
	products: Product[];
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		let paths: string[] = [];

		for (const menuItem of firstLevelMenu) {
			const { data: menu } = await axios.post<MenuItem[]>(
				process.env?.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
				{
					firstCategory: menuItem.category,
				},
			);

			paths = paths.concat(
				menu.flatMap((secondCategory) =>
					secondCategory.pages.map((page) => `/${menuItem.route}/${page.alias}`),
				),
			);
		}

		return {
			paths,
			fallback: true,
		};
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const message = error.response?.data?.message;

			console.error('Error message from server:', message);
		}

		return {
			paths: [],
			fallback: true,
		};
	}
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
	params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true,
		};
	}

	const firstCategory = firstLevelMenu.find((menu) => menu.route == params.type)?.category;

	if (!firstCategory && typeof firstCategory !== 'number') {
		return {
			notFound: true,
		};
	}

	try {
		const { data: menu } = await axios.post<MenuItem[]>(
			process.env?.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
			{
				firstCategory,
			},
		);

		const { data: page } = await axios.get<Page>(
			process.env?.NEXT_PUBLIC_DOMAIN + `/api/top-page/byAlias/${params.alias}`,
		);

		const { data: products } = await axios.post<Product[]>(
			process.env?.NEXT_PUBLIC_DOMAIN + '/api/product/find',
			{
				category: page.category,
				limit: 10,
			},
		);

		return {
			props: {
				menu,
				firstCategory,
				page,
				products,
			},
		};
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const message = error.response?.data?.message;

			console.error('Error message from server:', message);
		}

		return {
			notFound: true,
		};
	}
};

const Course: FC<CourseProps> = ({ page }): JSX.Element => {
	return <div>{page?.title || 'Not found'}</div>;
};

export default Course;
