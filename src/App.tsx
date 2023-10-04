import React, { FC } from 'react';
import CalcWrapper from './components/calc/CalcWrapper';

import './sass/index.scss';

const App: FC = () => {
	return (
		<div className='container'>
			<CalcWrapper />
		</div>
	);
};

export default App;
