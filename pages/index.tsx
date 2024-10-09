import { FC } from 'react';
import Head from 'next/head';

const Home: FC = (): JSX.Element => {
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

export default Home;
