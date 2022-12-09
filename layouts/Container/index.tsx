import classes from './Container.module.scss';
import { ContainerProps } from './Container.props';
import cn from "classnames";

const Container = ({ className, children, dipsplay = "block", ...props }: ContainerProps) => {
	return (
		<div className={cn(classes.Container, className, {
			[classes.Flex]: dipsplay === "flex",
			[classes.Block]: dipsplay === "block",
		})}  {...props}>
			{children}
		</div>
	);
};

export default Container;
