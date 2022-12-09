import * as React from 'react'
import classes from './MobileFooter.module.scss';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';

export default function MobileFooter() {
	const [expanded, setExpanded] = React.useState<string | false>(false);

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<div className={classes.MobileFooter}>
			<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
					sx={{ backgroundColor: "#37313A" }}
				>
					<Typography color="white" fontSize="14px">
						Գնողի համար
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ backgroundColor: "#37313A" }}>
					<div className={classes.Wrap}>

						<Link href="#" style={{ color: 'white' }}>
							<a >Վճարման տեսակները</a>
						</Link>
						<Link href="#" style={{ color: 'white' }}>
							<a >Հետվերադարձ և փոխանակում</a>
						</Link>
						<Link href="#" style={{ color: 'white' }}>
							<a >Առաքման սակագներ և պայմաններ</a>
						</Link>
						<Link href="#" style={{ color: 'white' }}>
							<a >Վաճառքի կանոններ</a>
						</Link>
						<Link href="#" style={{ color: 'white' }}>
							<a >Հաճախ տրվող հարցեր</a>
						</Link>
					</div>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
					sx={{ backgroundColor: "#37313A" }}
				>
					<Typography color="white" fontSize="14px">
						Մեր մասին
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ backgroundColor: "#37313A" }}>
					<div className={classes.Wrap}>

						<Link href="#" style={{ color: 'white' }}>
							<a >Ընկերությունը</a>
						</Link>
						<Link href="#" style={{ color: 'white' }}>
							<a >Մեր մասին</a>
						</Link>
						<Link href="#" style={{ color: 'white' }}>
							<a >Կապվեք մեզ հետ</a>
						</Link>

						<Link href="#" style={{ color: 'white' }}>
							<a >Մենք սոցցանցերում</a>
						</Link>
					</div>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
