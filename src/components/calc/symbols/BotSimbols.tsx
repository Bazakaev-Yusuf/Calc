import React, { FC } from 'react';
import { playSound } from '../../../utils/sound';

import { addNumber } from '../../../redux/calc/slice';
import { useAppDispatch } from '../../../redux/store';

const BotSimbols: FC<{ value: string | number }> = ({ value }) => {
	const dispatch = useAppDispatch();

	return (
		<div
			onClick={() => {
				dispatch(addNumber(value));
				playSound();
			}}
			className='btn btn__bottom'>
			{value}
		</div>
	);
};

export default BotSimbols;
