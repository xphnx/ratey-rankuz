import { useState } from 'react';
import localFont from 'next/font/local';
import Head from 'next/head';
import { Button, Heading, Paragraph, Rating } from '@/components';
import { Tag } from '@/components/Tag/Tag';

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
	const [rating, setRating] = useState(3);

	return (
		<>
			<Head>
				<title>App</title>
				<meta name="description" content="Description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${gilroyLight.variable} ${gilroySemiBold.variable}`}>
				<Button appearance="primary" withArrow>
					Button with some long text
				</Button>
				<Button appearance="ghost" withArrow>
					Button with some long text
				</Button>
				<Button appearance="primaryCircle" />
				<Heading level={3}>Heading</Heading>
				<Paragraph size="s">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, nostrum!
				</Paragraph>
				<Paragraph size="m">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, nostrum!
				</Paragraph>
				<Paragraph size="l">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, nostrum!
				</Paragraph>
				<Tag size="l" type="like">
					Hello
				</Tag>
				<Tag size="l" type="comment">
					Hello
				</Tag>
				<Tag size="l" type="repost">
					Hello
				</Tag>
				<div>
					<Tag size="s" type="like">
						40.5k
					</Tag>
				</div>
				<div>
					<Rating rating={rating} setRating={setRating} isEditable />
				</div>
			</main>
		</>
	);
}
