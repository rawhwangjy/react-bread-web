import { useCallback, useEffect, useReducer } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const reducerFn = (state, action) => {
	switch (action.type) {
		case 'PREV':
			const prevState = {
				...state,
				currentPage:
					state.currentPage > 0 ? state.currentPage - 1 : state.currentPage,
			};
			return prevState;
		case 'NEXT':
			const nextState = {
				...state,
				currentPage:
					state.currentPage > 0 ? state.currentPage + 1 : state.currentPage,
			};
			return nextState;
		case 'CLICK':
			const clickState = {
				...state,
				currentPage: action.payload,
			};
			return clickState;
		default:
			return state;
	}
};

const Pagination = ({ totalDataLength, dataPerPage, onChange }) => {
	const TOTAL_COUNT = totalDataLength; // 26
	const TOTAL_PAGE = Math.ceil(TOTAL_COUNT / dataPerPage); // 5

	useEffect(() => {
		if (totalDataLength) {
			dispatchFn({ type: 'CLICK', payload: 1 });
		}
	}, [totalDataLength]);

	const initialState = {
		currentPage: 1,
	};

	const [state, dispatchFn] = useReducer(reducerFn, initialState);

	const onPrev = () => {
		dispatchFn({ type: 'PREV' });
	};
	const onNext = () => {
		dispatchFn({ type: 'NEXT' });
	};
	const onPageMove = useCallback(
		(index) => {
			dispatchFn({ type: 'CLICK', payload: index });
			const startOffset = (index - 1) * dataPerPage;
			const endOffset = startOffset + dataPerPage;
			onChange(index, startOffset, endOffset);
		},
		[dataPerPage, onChange]
	);

	return (
		<div className='page_pagination'>
			<button
				type='button'
				className='btn_prev'
				disabled={state.currentPage === 1}
				onClick={onPrev}
			>
				<FontAwesomeIcon
					icon='fa-solid fa-caret-left'
					aria-label='이전'
				/>
			</button>
			<ol>
				{Array.from({ length: TOTAL_PAGE }, (_, index) => (
					<li key={`pagesNum${index}`}>
						<button
							type='button'
							className={state.currentPage === index + 1 ? 'active' : ''}
							onClick={() => onPageMove(index + 1)}
						>
							<span>{index + 1}</span>
						</button>
					</li>
				))}
			</ol>
			<button
				type='button'
				className='btn_next'
				disabled={state.currentPage === TOTAL_PAGE}
				onClick={onNext}
			>
				<FontAwesomeIcon
					icon='fa-solid fa-caret-right'
					aria-label='다음'
				/>
			</button>
		</div>
	);
};

export default Pagination;
