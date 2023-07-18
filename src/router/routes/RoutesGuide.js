import GuideLayout from 'components/layouts/GuideLayout';

// Introduce
import Spec from 'views/guide/introduce/Spec';
import Convention from 'views/guide/introduce/Convention';
import Accessibility from 'views/guide/introduce/Accessibility';

// components
import LibAlert from 'views/guide/components/LibAlert';
import LibCheckbox from 'views/guide/components/LibCheckbox';
import LibInput from 'views/guide/components/LibInput';
import LibModal from 'views/guide/components/LibModal';
import LibRadio from 'views/guide/components/LibRadio';
import LibSelect from 'views/guide/components/LibSelect';
import LibSwiper from 'views/guide/components/LibSwiper';
import LibTabs from 'views/guide/components/LibTabs';
import LibToast from 'views/guide/components/LibToast';
import LibToggle from 'views/guide/components/LibToggle';
// import LibUpload from 'views/guides/components/LibUpload';

// modules
import LibButton from 'views/guide/modules/LibButton';

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
		{
			path: 'modules',
			children: [{ path: 'button', element: <LibButton /> }],
		},
	],
};

export default RoutesGuide;
