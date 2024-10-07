export interface Product {
	_id: string;
	categories: string[];
	tags: string[];
	title: string;
	characteristics: Characteristic[];
	image: string;
	link: string;
	credit: number;
	price: number;
	oldPrice: number;
	description: string;
	initialRating: number;
	advantages?: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
	html: string;
	blog: Blog;
	companyId: string;
	clicks: number;
	reviews: Review[];
	reviewCount: number;
	reviewAvg?: number;
	disAdvantages?: string;
}

export interface Review {
	_id: string;
	createdAt: string;
	name: string;
	title: string;
	description: string;
	rating: number;
	productId: string;
	site?: string;
	updatedAt: string;
	__v: number;
}

export interface Blog {
	text: string;
	_id: string;
}

export interface Characteristic {
	name: string;
	value: string;
}
