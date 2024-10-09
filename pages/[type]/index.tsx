import { FC } from 'react';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { firstLevelMenu } from '@/helpers/routes';
import { MenuItem } from '@/interfaces/menu';

interface CategoryRootProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: firstLevelMenu.map((menu) => `/${menu.route}`),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<CategoryRootProps> = async ({
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

		return {
			props: {
				menu,
				firstCategory,
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

const CategoryRoot: FC<CategoryRootProps> = ({ firstCategory }): JSX.Element => {
	const currenCategory = firstLevelMenu.find((menu) => menu.category === firstCategory)?.name;

	return (
		<>
			<Head>
				<title>Main Page</title>
				<meta name="description" content="Description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{currenCategory || 'No found'}
		</>
	);
};

export default CategoryRoot;
