import { useState, useRef } from 'react';
import { getRandomId } from 'utils/common.function';
// import { API_URL } from 'utils/common.constants';

const Upload = ({ btnName, uploadValue, onChange }) => {
	const randomstring = getRandomId();

	const imgRefs = useRef([]);
	const [uploadItems, setUploadItems] = useState([]);

	const onUpload = (event) => {
		const files = event.target.files;
		const selectedImagesArray = Array.from(files);
		const imagePreviews = [];
		for (let i = 0; i < selectedImagesArray.length; i++) {
			const reader = new FileReader();
			reader.addEventListener('load', () => {
				const obj = {
					name: selectedImagesArray[i].name.replace(/^.*\/|\.[^.]*$/g, ''),
					url: reader.result,
				};
				imagePreviews.push(obj);
				if (imagePreviews.length === selectedImagesArray.length) {
					setUploadItems(imagePreviews);
				}
			});
			reader.readAsDataURL(selectedImagesArray[i]);
		}
		onChange(files);
	};

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
		<div className='input_wrap upload'>
			<div className='input_area'>
				<label htmlFor={`input${randomstring}`}>
					<span>{btnName}</span>
				</label>
				<div className='input'>
					<span className='file_name' />
					<input
						type='file'
						multiple
						id={`input${randomstring}`}
						onChange={onUpload}
					/>
				</div>
			</div>
			<div className='preview_wrap'>
				{uploadItems.map((image, index) => (
					<div
						key={index}
						className='img_wrap'
					>
						<span className='img_area'>
							<img
								ref={(ref) => (imgRefs.current[index] = ref)}
								src={image.url}
								alt={image.name}
								onLoad={resizeImg}
							/>
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Upload;
