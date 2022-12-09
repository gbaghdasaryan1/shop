import Link from 'next/link';
import SectionSlider2 from '../Slider';
import classes from './Section.module.scss'
import { SectionProps } from './Section.props';


const Section = ({ title, data, type }: SectionProps) => {

	return (
		<div className={classes.Section}>
			<div>
				<h2>{title}</h2>
				<Link href={`/see-all/${title}`}>See all</Link>
			</div>
			<div>
				{/* <SectionSlider data={data} type={type} /> */}
				<SectionSlider2 data={data} type={type} />
			</div>

		</div>
	);
};

export default Section;
