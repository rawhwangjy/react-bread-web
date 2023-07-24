import { useState, useRef } from 'react';

const Tabs = ({ tabTitles, children }) => {
	const [selectedTab, setSelectedTab] = useState(0);

	const [maxHeight, setMaxHeight] = useState(null);
	const tabRefs = useRef([]);

	const selectTab = (index) => {
		setSelectedTab(index);
	};

	const loadData = () => {
		const tabHeights = tabRefs.current.map((ref) => ref.clientHeight);
		const maxHeight = Math.max(...tabHeights);
		setMaxHeight(maxHeight);
	};

	console.log('childrenchildrenchildrenchildren', children.length);

	return (
		<div className='tab_wrap'>
			<div className='tabs'>
				{tabTitles.map((title, index) => {
					return (
						<div
							className={`tab ${selectedTab === index ? 'active' : ''}`}
							key={`tab${index}`}
						>
							<button
								type='button'
								onClick={() => selectTab(index)}
							>
								<span>{title}</span>
							</button>
						</div>
					);
				})}
			</div>
			<div
				className='tab_panels'
				style={{ height: maxHeight + 'px' }}
			>
				{children.length > 1 &&
					children.map((tab, index) => (
						<div
							key={`tabPanel${index}`}
							ref={(ref) => (tabRefs.current[index] = ref)}
							className={`tab_panel ${selectedTab === index ? 'active' : ''}`}
							onLoad={loadData}
						>
							{tab}
						</div>
					))}
				{children.length === undefined && (
					<div
						ref={(ref) => (tabRefs.current[0] = ref)}
						className='tab_panel active'
					>
						{children}
					</div>
				)}
			</div>
		</div>
	);
};

export const Tab = ({ children }) => {
	return <>{children}</>;
};
export default Tabs;
