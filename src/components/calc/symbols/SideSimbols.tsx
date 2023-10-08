import React, { FC } from 'react';

import { addSimbol } from '../../../redux/calc/slice';
import { useAppDispatch } from '../../../redux/store';
import { playSound } from '../../../utils/sound';

const SideSimbols: FC<{ value: string }> = ({ value }) => {
	const dispatch = useAppDispatch();

	return (
		<div
			onClick={() => {
				dispatch(addSimbol(value));
				playSound();
			}}
			className='btn btn__side'>
			{value}
		</div>
	);
};

export default SideSimbols;
