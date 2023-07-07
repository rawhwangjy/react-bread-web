import GuideLayout from 'components/layouts/GuideLayout';

// Introduce
import Spec from 'views/guides/introduce/Spec';
import Convention from 'views/guides/introduce/Convention';
import Accessibility from 'views/guides/introduce/Accessibility';

// components
import LibAlert from 'views/guides/components/LibAlert';
import LibCheckbox from 'views/guides/components/LibCheckbox';
import LibInput from 'views/guides/components/LibInput';
import LibModal from 'views/guides/components/LibModal';
import LibRadio from 'views/guides/components/LibRadio';
import LibSelect from 'views/guides/components/LibSelect';
import LibSwiper from 'views/guides/components/LibSwiper';
import LibTabs from 'views/guides/components/LibTabs';
import LibToast from 'views/guides/components/LibToast';
import LibToggle from 'views/guides/components/LibToggle';
// import LibUpload from 'views/guides/components/LibUpload';

const RoutesGuide = {
	path: '/guide',
	element: <GuideLayout />,
	// errorElement: <Error />,
	children: [
		{
			path: 'introduce',
			children: [
				{ path: 'spec', element: <Spec /> },
				{ path: 'convention', element: <Convention /> },
				{ path: 'accessibility', element: <Accessibility /> },
			],
		},
		{
			path: 'components',
			children: [
				{ path: 'alert', element: <LibAlert /> },
				{ path: 'checkbox', element: <LibCheckbox /> },
				{ path: 'input', element: <LibInput /> },
				{ path: 'modal', element: <LibModal /> },
				{ path: 'radio', element: <LibRadio /> },
				{ path: 'select', element: <LibSelect /> },
				{ path: 'swiper', element: <LibSwiper /> },
				{ path: 'tabs', element: <LibTabs /> },
				{ path: 'toast', element: <LibToast /> },
				{ path: 'toggle', element: <LibToggle /> },
				// { path: 'upload', element: <LibUpload /> },
			],
		},
	],
};

export default RoutesGuide;
