import { FC } from 'react';
import axios from 'axios';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { MenuItem } from '@/interfaces/menu';
import { withLayout } from '@/layout/Layout';

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	try {
		const firstCategory = 0;
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

const Home: FC<HomeProps> = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>Main Page</title>
				<meta name="description" content="Description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{'Home Page'}
		</>
	);
};

export default withLayout(Home);
