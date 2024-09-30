import localFont from 'next/font/local';
import Head from 'next/head';
import { Button, Heading } from '@/components';

const gilroyLight = localFont({
	src: './fonts/Gilroy-Light.woff',
	variable: '--font-gilroy-light',
	weight: '300',
});
const gilroySemiBold = localFont({
	src: './fonts/Gilroy-SemiBold.woff',
	variable: '--font-gilory-semibold',
	weight: '600',
});

export default function Home(): JSX.Element {
	return (
		<>
			<Head>
				<title>App</title>
				<meta name="description" content="Description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${gilroyLight.variable} ${gilroySemiBold.variable}`}>
				<Button appearance="primary">Button with some long text</Button>
				<Button appearance="ghost">Button with some long text</Button>
				<Heading level={3}>Heading</Heading>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt est eum mollitia quasi
					adipisci tenetur iure hic dolorem aspernatur? Tenetur dolores minus blanditiis expedita
					earum fugit ab magnam, officiis repellat.
				</p>
			</main>
		</>
	);
}
