import React, { FC } from 'react';
import { useAppDispatch } from '../../../redux/store';
import { playSound } from 'utils/sound';

import { addNumber } from '../../../redux/calc/slice';

const Numbers: FC<{ value: number }> = ({ value }) => {
	const dispatch = useAppDispatch();

	return (
		<div
			onClick={() => {
				dispatch(addNumber(value));
				playSound();
			}}
			className='btn btn__number'>
			{value}
		</div>
	);
};

export default Numbers;
