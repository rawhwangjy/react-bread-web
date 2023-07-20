import { useRef } from 'react';
import { API_URL } from 'utils/common.constants';

const Preview = ({ previewData }) => {
	const imgRefs = useRef([]);

	const resizeImg = () => {
		imgRefs.current.forEach((imgRef) => {
			if (imgRef) {
				const { clientWidth, clientHeight } = imgRef;
				if (clientWidth > clientHeight) {
					imgRef.classList.remove('width_full');
					imgRef.classList.remove('height_full');
					imgRef.classList.add('width_full');
				} else {
					imgRef.classList.remove('width_full');
					imgRef.classList.remove('height_full');
					imgRef.classList.add('height_full');
				}
			}
		});
	};

	return (
		<div className='preview_wrap'>
			{previewData.map((image, index) => (
				<div
					key={index}
					className='img_wrap'
				>
					<span className='img_area'>
						<img
							ref={(ref) => (imgRefs.current[index] = ref)}
							src={`${API_URL}/views/upload/${image.filename}`}
							alt={image.originalname}
							onLoad={resizeImg}
						/>
					</span>
				</div>
			))}
		</div>
	);
};

export default Preview;
