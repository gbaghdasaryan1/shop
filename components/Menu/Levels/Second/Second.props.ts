import { Name, SubCategory } from '../../../../common/interfaces';

export interface SecondProps {
	data: {
		id: string;
		categoryId: string;
		names: Name[];
		subCategories: SubCategory[];
	}[];
	title: string;
	third: boolean;
	setThird: () => void
}
