import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SectionSlider from '../Slider';
import { products } from '../../../common/data';
import { TabPanelProps } from './TabPanel.props';


function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box >
					<div>{children}</div>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%', }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
				<Tabs value={value} onChange={handleChange} sx={{ padding: "5px 0" }} aria-label="basic tabs example" textColor='inherit' >
					<Tab label="Շուտով Ամանոր է" {...a11yProps(0)} />
					<Tab label="Հեռախոսներ մինչև 100000 դրամով" {...a11yProps(1)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0} >
				<SectionSlider type='Product' data={products} />
			</TabPanel>
			<TabPanel value={value} index={1} >

				<SectionSlider type='Product' data={products} />
			</TabPanel>

		</Box>
	);
}
