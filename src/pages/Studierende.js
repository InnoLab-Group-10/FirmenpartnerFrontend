import React from 'react';
import SiteTitle from '../components/SiteTitle';
import CollapsibleTable from '../components/tables/Collapsible-Table';

const Studierende = () => {
	return <div>
		<SiteTitle 
			title="Studierende" 
			subtitle="Unterüberschrift zu Studierenden" 
			text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam."
		>
		</SiteTitle>
		<CollapsibleTable></CollapsibleTable>
	</div>;
};

export default Studierende;
