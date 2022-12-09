export type CategoryFirstLevelCategories = {
	language: string;
	title: string;
}
export type CategoryFirstLevelType = {
	id: string;
	categories: CategoryFirstLevelCategories[]
}

//? Category
export interface Name {
	language: string;
	title: string;
}


export interface SubCategory {
	id: string;
	schemaId: string;
	names: Name[];
	subCategories: any;
}

export interface NestProps {
	id: string;
	categoryId: string;
	names: Name[];
	subCategories: SubCategory[];
}
