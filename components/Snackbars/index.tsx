import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

export interface State extends SnackbarOrigin {
}
interface MySnackbarProps {
	title: string;
	open: boolean;
	handleClose: () => void;
}
export default function MySnackbar({ title, open, handleClose }: MySnackbarProps) {
	const [state, setState] = React.useState<State>({
		vertical: 'top',
		horizontal: 'center',
	});
	const { vertical, horizontal } = state;

	// const handleClick = (newState: SnackbarOrigin) => () => {
	// 	setState({ open: true, ...state });
	// };


	return (
		<div>
			<Snackbar
				autoHideDuration={1000}
				anchorOrigin={{ vertical, horizontal }}
				open={open}
				onClose={handleClose}
				message={title}
				key={vertical + horizontal}
			>
				<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
					{title}asdfasdf
				</Alert>
			</Snackbar>
		</div>
	);
}
