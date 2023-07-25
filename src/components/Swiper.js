import { useState, useEffect, useRef, useReducer } from 'react';

const reducerFn = (state, action) => {
	switch (action.type) {
		case 'SET_SWIPER_WIDTH':
			return { ...state, swiperWidth: action.payload };
		case 'PREV':
			if (state.currentSlide > 0) {
				const newState = {
					...state,
					currentPosition: -((state.currentSlide - 1) * state.swiperWidth),
					currentSlide: state.currentSlide - 1,
				};
				return newState;
			}
			return state;
		case 'NEXT':
			if (state.currentSlide < state.slideCount - 1) {
				const newState = {
					...state,
					currentPosition: -((state.currentSlide + 1) * state.swiperWidth),
					currentSlide: state.currentSlide + 1,
				};
				return newState;
			}
			return state;
		case 'CURRENT_SLIDE':
			const newState = {
				...state,
				selectedSlide: action.payload,
			};
			return newState;
		default:
			return state;
	}
};

const Swiper = ({ options, children }) => {
	const { swiperTitles, pagination, navigation } = options;

	// Slide Sizing
	const [maxHeight, setMaxHeight] = useState(null);
	// const [swiperWidth, setSwiperWidth] = useState(null);
	const swiperRefs = useRef([]);
	const swiperSlideRef = useRef(null);

	const initialState = {
		slideCount: children.length,
		swiperWidth: 0,
		currentSlide: 0,
		currentPosition: 0,
	};

	const [state, dispatchFn] = useReducer(reducerFn, initialState);
	// const [selectedSlide, setSelectedSlide] = useState(state.currentSlide);

	useEffect(() => {
		const swiperHeights = swiperRefs.current.map((ref) => ref.clientHeight);
		const maxHeight = Math.max(...swiperHeights);
		setMaxHeight(maxHeight);

		dispatchFn({
			type: 'SET_SWIPER_WIDTH',
			payload: swiperSlideRef.current.clientWidth,
		});
	}, []);

	const onPrev = () => {
		dispatchFn({ type: 'PREV' });
	};

	const onNext = () => {
		dispatchFn({ type: 'NEXT' });
	};

	const moveTo = (clicked) => {
		const steps = Math.abs(clicked - state.currentSlide);
		if (state.currentSlide < clicked) {
			for (let i = 0; i < steps; i++) {
				onNext();
			}
		} else {
			for (let i = 0; i < steps; i++) {
				onPrev();
			}
		}
	};
	return (
		<div
			className='swiper_wrap'
			ref={swiperSlideRef}
		>
			{swiperTitles && (
				<div className='swiper_tabs'>
					{swiperTitles.map((swiperTitle, index) => {
						return (
							<div
								key={`swiperTitle${index}`}
								className={`swiper_tab ${
									state.currentSlide === index ? 'active' : ''
								}`}
							>
								<button
									type='button'
									onClick={() => moveTo(index)}
								>
									<span>{swiperTitle}</span>
								</button>
							</div>
						);
					})}
				</div>
			)}
			<div className='swiper'>
				<div
					className='swiper_panels'
					style={{
						// height: maxHeight + 'px',
						transform: `translate3d(${state.currentPosition}px, 0, 0)`,
					}}
				>
					{children.map((swiper, index) => {
						return (
							<div
								key={`swiper${index}`}
								ref={(ref) => (swiperRefs.current[index] = ref)}
								className={`swiper_panel ${
									state.currentSlide === index ? 'active' : ''
								}`}
							>
								{swiper}
							</div>
						);
					})}
				</div>
				{navigation && (
					<div className='navigation_wrap'>
						<button
							type='button'
							className='btn_prev'
							onClick={onPrev}
							disabled={state.currentSlide === 0}
						>
							<span className='sr_only'>이전 슬라이드</span>
						</button>
						<button
							type='button'
							className='btn_next'
							onClick={onNext}
							disabled={state.currentSlide === state.slideCount - 1}
						>
							<span className='sr_only'>다음 슬라이드</span>
						</button>
					</div>
				)}
			</div>
			{pagination && (
				<div className='pagination_wrap'>
					<div className='pagination'>
						{children.map((swiper, index) => {
							return (
								<button
									type='button'
									key={`indicator${index}`}
									className={`indicator ${
										state.currentSlide === index ? 'active' : ''
									}`}
									onClick={() => moveTo(index)}
								>
									<span className='sr_only'>{index}번째 슬라이드 이동</span>
								</button>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};

export const SwiperSlide = ({ children }) => {
	return <>{children}</>;
};

export default Swiper;
