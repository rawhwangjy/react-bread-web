import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRef } from 'react';

import CookiePopup from 'views/popup/CookiePopup';

const Main = () => {
	const [cookieState, setCookieState] = useState(false);

	const getCookieValue = (name) =>
		document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '';

	useEffect(() => {
		var currentCookie = getCookieValue('expires');
		if (Boolean(currentCookie)) {
			setCookieState(false);
			document.body.style.overflow = 'revert';
		} else {
			setCookieState(true);
			document.body.style.overflow = 'hidden';
		}
	}, []);

	const closeCookiePopup = useCallback((nextState) => {
		setCookieState(false);
		document.body.style.overflow = 'revert';
	}, []);

	const setLayout = (target) => {
		target.scrollHeight = target.heightNum * window.innerHeight;
		if (target.objs?.container) {
			const objs = target.objs.container;
			objs.style.minHeight = `${target.scrollHeight}px`;
		}
		document.body.id = `showScene${target.id}`;
	};

	const calcValues = (target, values, currentYOffset) => {
		let returnValue = 0;
		const scrollHeight = target.scrollHeight;
		const scrollRatio = currentYOffset / scrollHeight;
		if (values.length === 3) {
			const partScrollStart = values[2].start * scrollHeight;
			const partScrollEnd = values[2].end * scrollHeight;
			const partScrollHeight = partScrollEnd - partScrollStart;
			if (
				currentYOffset >= partScrollStart &&
				currentYOffset <= partScrollEnd
			) {
				returnValue =
					((currentYOffset - partScrollStart) / partScrollHeight) *
						(values[1] - values[0]) +
					values[0];
			} else if (currentYOffset < partScrollStart) {
				returnValue = values[0];
			} else if (currentYOffset > partScrollEnd) {
				returnValue = values[1];
			}
		} else {
			returnValue = scrollRatio * (values[1] - values[0]) + values[0];
		}
		return returnValue;
	};

	const sceneInfo = useMemo(() => {
		return {
			id: 0,
			heightNum: 17,
			scrollHeight: 0,
			values: {
				messageAOpacityIn: [0, 1, { start: 0.1, end: 0.2 }],
				messageBOpacityIn: [0, 1, { start: 0.3, end: 0.4 }],
				messageCOpacityIn: [0, 1, { start: 0.5, end: 0.6 }],
				messageDOpacityIn: [0, 1, { start: 0.7, end: 0.8 }],
				messageATranslateYIn: [20, 0, { start: 0.1, end: 0.2 }],
				messageBTranslateYIn: [20, 0, { start: 0.3, end: 0.4 }],
				messageCTranslateYIn: [20, 0, { start: 0.5, end: 0.6 }],
				messageDTranslateYIn: [20, 0, { start: 0.7, end: 0.8 }],
				messageAOpacityOut: [1, 0, { start: 0.25, end: 0.3 }],
				messageBOpacityOut: [1, 0, { start: 0.45, end: 0.5 }],
				messageCOpacityOut: [1, 0, { start: 0.65, end: 0.7 }],
				messageDOpacityOut: [1, 0, { start: 0.85, end: 0.9 }],
				messageATranslateYOut: [0, -20, { start: 0.25, end: 0.3 }],
				messageBTranslateYOut: [0, -20, { start: 0.45, end: 0.5 }],
				messageCTranslateYOut: [0, -20, { start: 0.65, end: 0.7 }],
				messageDTranslateYOut: [0, -20, { start: 0.85, end: 0.9 }],
			},
		};
	}, []);

	const mainSection = useRef(null);
	// section 0 objs
	const message1 = useRef(null);
	const message2 = useRef(null);
	const message3 = useRef(null);
	const message4 = useRef(null);

	const [yOffset, setYOffset] = useState(0);

	const playAnimation = useCallback(() => {
		const objs = sceneInfo.objs;
		const values = sceneInfo.values;
		const currentYOffset = yOffset;
		const scrollHeight = sceneInfo.scrollHeight;
		const scrollRatio = currentYOffset / scrollHeight;

		if (objs && values) {
			const messageAOpacityIn = calcValues(
				sceneInfo,
				values?.messageAOpacityIn,
				currentYOffset
			);
			const messageAOpacityOut = calcValues(
				sceneInfo,
				values?.messageAOpacityOut,
				currentYOffset
			);
			const messageATranslateYIn = calcValues(
				sceneInfo,
				values?.messageATranslateYIn,
				currentYOffset
			);
			const messageATranslateYOut = calcValues(
				sceneInfo,
				values?.messageATranslateYOut,
				currentYOffset
			);
			if (scrollRatio <= 0.22) {
				objs?.messageA?.setAttribute(
					'style',
					`opacity: ${messageAOpacityIn}; transform: translate3d(0, ${messageATranslateYIn}%, 0)`
				);
			} else {
				objs?.messageA?.setAttribute(
					'style',
					`opacity: ${messageAOpacityOut}; transform: translate3d(0, ${messageATranslateYOut}%, 0)`
				);
			}
			const messageBOpacityIn = calcValues(
				sceneInfo,
				values?.messageBOpacityIn,
				currentYOffset
			);
			const messageBOpacityOut = calcValues(
				sceneInfo,
				values?.messageBOpacityOut,
				currentYOffset
			);
			const messageBTranslateYIn = calcValues(
				sceneInfo,
				values?.messageBTranslateYIn,
				currentYOffset
			);
			const messageBTranslateYOut = calcValues(
				sceneInfo,
				values?.messageBTranslateYOut,
				currentYOffset
			);
			if (scrollRatio <= 0.42) {
				objs?.messageB?.setAttribute(
					'style',
					`opacity: ${messageBOpacityIn}; transform: translate3d(0, ${messageBTranslateYIn}%, 0)`
				);
			} else {
				objs?.messageB?.setAttribute(
					'style',
					`opacity: ${messageBOpacityOut}; transform: translate3d(0, ${messageBTranslateYOut}%, 0)`
				);
			}
			const messageCOpacityIn = calcValues(
				sceneInfo,
				values?.messageCOpacityIn,
				currentYOffset
			);
			const messageCOpacityOut = calcValues(
				sceneInfo,
				values?.messageCOpacityOut,
				currentYOffset
			);
			const messageCTranslateYIn = calcValues(
				sceneInfo,
				values?.messageCTranslateYIn,
				currentYOffset
			);
			const messageCTranslateYOut = calcValues(
				sceneInfo,
				values?.messageCTranslateYOut,
				currentYOffset
			);
			if (scrollRatio <= 0.62) {
				objs?.messageC?.setAttribute(
					'style',
					`opacity: ${messageCOpacityIn}; transform: translate3d(0, ${messageCTranslateYIn}%, 0)`
				);
			} else {
				objs?.messageC?.setAttribute(
					'style',
					`opacity: ${messageCOpacityOut}; transform: translate3d(0, ${messageCTranslateYOut}%, 0)`
				);
			}
			const messageDOpacityIn = calcValues(
				sceneInfo,
				values?.messageDOpacityIn,
				currentYOffset
			);
			const messageDOpacityOut = calcValues(
				sceneInfo,
				values?.messageDOpacityOut,
				currentYOffset
			);
			const messageDTranslateYIn = calcValues(
				sceneInfo,
				values?.messageDTranslateYIn,
				currentYOffset
			);
			const messageDTranslateYOut = calcValues(
				sceneInfo,
				values?.messageDTranslateYOut,
				currentYOffset
			);
			if (scrollRatio <= 0.82) {
				objs?.messageD?.setAttribute(
					'style',
					`opacity: ${messageDOpacityIn}; transform: translate3d(0, ${messageDTranslateYIn}%, 0)`
				);
			} else {
				objs?.messageD?.setAttribute(
					'style',
					`opacity: ${messageDOpacityOut}; transform: translate3d(0, ${messageDTranslateYOut}%, 0)`
				);
			}
		}
	}, [sceneInfo, yOffset]);

	useEffect(() => {
		const refHTML = {
			objs: {
				container: mainSection.current,
				messageA: message1.current,
				messageB: message2.current,
				messageC: message3.current,
				messageD: message4.current,
			},
		};
		Object.assign(sceneInfo, refHTML);
		setLayout(sceneInfo);
		window.addEventListener('resize', () => {
			setLayout(sceneInfo);
		});
	}, [sceneInfo]);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setYOffset(window.scrollY);
			playAnimation();
		});
	}, [playAnimation]);

	return (
		<div className='page_container main_area'>
			{cookieState && <CookiePopup onChange={closeCookiePopup} />}
			<div className='content_area'>
				<section
					className='main_section'
					id='mainArea'
					ref={mainSection}
				>
					<h2>안녕하세요.</h2>
					<div
						className='sticky_element a'
						ref={message1}
					>
						<p>
							프론트엔드 개발자
							<br />
							황지영입니다.
						</p>
					</div>
					<div
						className='sticky_element b'
						ref={message2}
					>
						<p>
							이 사이트는 포트폴리오 사이트입니다.
							<br />
							디자인부터 DB까지 모든 것을 작업했습니다.
						</p>
					</div>
					<div
						className='sticky_element c'
						ref={message3}
					>
						<p>
							매일 리팩토링 작업 중입니다.
							<br />
							M세대만큼 열정적이고 💪🏻
							<br />
							Z세대처럼 자유분방합니다.🗽
						</p>
					</div>
					<div
						className='sticky_element d'
						ref={message4}
					>
						<p>행복하세요.&#x1F970;</p>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Main;
