import classes from './Third.module.scss';
import { ThirdProps } from './Third.props';


const Third = ({ data, title }: ThirdProps) => {

	return (
		<div className={classes.Third} >
			<h3>{title}</h3>
			<ul>
				{data.map((item) => {
					return (
						<li key={item.id} >
							{item.names[0].title}
						</li>
					)
				})}
			</ul>
		</div >
	);
};

export default Third;
