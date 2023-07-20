import { useState, useEffect, useRef } from 'react';

const Tabs = ({ tabTitles, children }) => {
	const [selectedTab, setSelectedTab] = useState(0);

	const [maxHeight, setMaxHeight] = useState(null);
	const tabRefs = useRef([]);

	const selectTab = (index) => {
		setSelectedTab(index);
	};

	useEffect(() => {
		const tabHeights = tabRefs.current.map((ref) => ref.clientHeight);
		const maxHeight = Math.max(...tabHeights);
		setMaxHeight(maxHeight);
	}, []);

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
				{children.map((tab, index) => {
					return (
						<div
							key={`tabPanel${index}`}
							ref={(ref) => (tabRefs.current[index] = ref)}
							className={`tab_panel ${selectedTab === index ? 'active' : ''}`}
						>
							{tab}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export const Tab = ({ children }) => {
	return <>{children}</>;
};
export default Tabs;
