import { useState, useRef, useReducer, useEffect } from 'react';

import useRandomIdMaker from 'hooks/useRandomIdMaker';

const reducerFn = (state, action) => {
	switch (action.type) {
		case 'SET_SWIPER_WIDTH':
			return { ...state, tabWidth: action.payload };
		case 'CURRENT_SLIDE':
			const newState = {
				...state,
				selectedTab: action.payload,
			};
			return newState;
		case 'CLICK':
			const clickState = {
				...state,
				currentPosition: -(state.selectedTab * state.tabWidth),
			};
			return clickState;
		default:
			return state;
	}
};

const Tabs = ({ tabTitles, children }) => {
	const randomString = useRandomIdMaker();

	const [maxHeight, setMaxHeight] = useState(null);
	const tabRef = useRef(null);
	const tabRefs = useRef([]);

	const initialState = {
		selectedTab: 0,
		tabWidth: 0,
		currentPosition: 0,
	};

	const [state, dispatchFn] = useReducer(reducerFn, initialState);

	const selectTab = (index) => {
		dispatchFn({
			type: 'CURRENT_SLIDE',
			payload: index,
		});
		dispatchFn({
			type: 'CLICK',
		});
	};

	useEffect(() => {
		dispatchFn({
			type: 'SET_SWIPER_WIDTH',
			payload: tabRef.current.clientWidth,
		});
	}, []);

	const loadData = () => {
		const tabHeights = tabRefs.current.map((ref) => ref.clientHeight);
		const maxHeight = Math.max(...tabHeights);
		setMaxHeight(maxHeight);
	};

	return (
		<div
			className='tab_wrap'
			ref={tabRef}
		>
			<div
				className='tabs'
				role='tablist'
			>
				{tabTitles.map((title, index) => {
					return (
						<div
							id={`tab${randomString}${index}`}
							className={`tab ${state.selectedTab === index ? 'active' : ''}`}
							key={`tab${index}`}
							role='tab'
							aria-selected={state.selectedTab === index}
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
				// style={{ height: maxHeight + 'px' }}
				style={{
					height: maxHeight + 'px',
					transform: `translate3d(${state.currentPosition}px, 0, 0)`,
				}}
			>
				{children.length > 1 &&
					children.map((tab, index) => (
						<div
							key={`tabPanel${index}`}
							ref={(ref) => (tabRefs.current[index] = ref)}
							className={`tab_panel ${
								state.selectedTab === index ? 'active' : ''
							}`}
							aria-labelledby={`tab${randomString}${index}`}
							aria-hidden={state.selectedTab === index ? false : true}
							onLoad={loadData}
						>
							{tab}
						</div>
					))}
				{children.length === undefined && (
					<div
						ref={(ref) => (tabRefs.current[0] = ref)}
						className='tab_panel active'
						role='tabpanel'
						aria-labelledby={`tab${randomString}0`}
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
