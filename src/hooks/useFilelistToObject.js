import { useMemo } from 'react';

const useFilelistToObject = (targetData) => {
	const filelist = useMemo(() => {
		if (targetData && targetData.fileList) {
			return JSON.parse(targetData.fileList);
		}
	}, [targetData]);
	return filelist;
};

export default useFilelistToObject;
