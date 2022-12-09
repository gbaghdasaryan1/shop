import { IProductMock } from '../../../common/data';

export interface SectionProps {
	title: string,
	data: IProductMock[];
	type: "Product" | "Card"
}
