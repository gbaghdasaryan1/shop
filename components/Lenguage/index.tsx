import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDownIcon from '../../public/icons/arrow-down.svg';
import classes from './Language.module.scss';

import Arm from '../../public/language-icons/armenia.png';
import Rus from '../../public/language-icons/russia.png';
import En from '../../public/language-icons/united-kingdom.png';
import Image from 'next/image';
import useWindowSize from '../../hooks/useWindowsSize';
import { NextRouter, useRouter } from 'next/router';
import Link from 'next/link';
const options = [
	'AR',
	'EN',
	'RU',
];

export default function LanguageSelect() {
	const size = useWindowSize();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [current, setCurrent] = React.useState<string>("en")
	const open = Boolean(anchorEl);
	const router: any = useRouter();
	const lang = router.locales

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (lng: string) => {
		setCurrent(lng)
		router.push(lng, lng, { locale: lng });
		setAnchorEl(null);

	};

	return (
		<div className={classes.Language}>
			<Button
				id="basic-button"
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				sx={{ color: "black", display: "flex", gap: '10px', padding: "0", margin: "0" }}
			>
				<Image
					src={typeof lang !== "undefined" && current === "am" ? Arm : current === 'en' ? En : Rus}
					alt='language' className={classes.Flag}
					width={size.width < 600 ? "25px" : "32px"}
					height={size.height < 600 ? "15px" : "32px"}
					objectFit="contain"
				/>
				{current}
				<ArrowDownIcon />
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={() => setAnchorEl(null)}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<div className={classes.Dropdown}>
					{
						lang?.map((i: string, idx: number) => {
							return <span key={idx} onClick={() => handleClose(i)} >
								{i.toUpperCase()}</span>
						})
					}
				</div>
			</Menu>
		</div>
	);
}
