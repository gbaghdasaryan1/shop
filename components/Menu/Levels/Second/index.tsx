import classes from './Second.module.scss';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Third from '../Third';
import { useState } from 'react';
import { Name, NestProps, SubCategory } from '../../../../common/interfaces';
import { SecondProps } from './Second.props';




const Second = ({ data, title, third, setThird }: SecondProps) => {

	const [show, setShow] = useState(false);
	const [thirdData, setThirdData] = useState<SubCategory[]>([]);
	const [name, setName] = useState('');

	const onMouseEnter = (item: NestProps) => {
		if (item.subCategories !== null) {
			setThird();
			setThirdData(item.subCategories);
			setName(item.names[0].title);
			setShow(true);
		} else {
			setShow(false);
		}

	};

	return (
		<div className={classes.Second}>
			<h3>{title}</h3>

			<ul>
				{data.map((item) => {
					return (
						<li key={item.id} onMouseEnter={() => onMouseEnter(item)}>
							{item.names[0].title}
							{item.subCategories && <ArrowRightIcon />}
						</li>
					);
				})}
			</ul>

			{show && third && <Third data={thirdData} title={name} />}

		</div>
	);
};

export default Second;
