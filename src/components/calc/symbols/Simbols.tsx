import React, { FC } from 'react';

import { addSimbol } from '../../../redux/calc/slice';
import { useAppDispatch } from '../../../redux/store';
import { playSound } from '../../../utils/sound';

const Simbols: FC<{ value: string }> = ({ value }) => {
	const dispatch = useAppDispatch();

	return (
		<div
			onClick={() => {
				dispatch(addSimbol(value));
				playSound();
			}}
			className='btn btn_simbol'>
			{value}
		</div>
	);
};

export default Simbols;
