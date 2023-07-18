import { useEffect } from 'react';
import Prism from 'prismjs';

const Code = ({ code, language }) => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);
	return (
		<div className='code'>
			<pre>
				<code className={`language-${language}`}>{code}</code>
			</pre>
		</div>
	);
};
export default Code;
