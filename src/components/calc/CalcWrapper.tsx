import React, { FC } from 'react';

import Numbers from './numbers';
import Simbols from './symbols/Simbols';
import SideSimbols from './symbols/SideSimbols';
import BotSimbols from './symbols/BotSimbols';
import { useSelector } from 'react-redux';
import { calcSelect } from '../../redux/calc/selectors';
import { equelClick } from '../../redux/calc/slice';
import { useAppDispatch } from '../../redux/store';
import { playSound } from 'utils/sound';

const CalcBody: FC = () => {
	const { story, equel } = useSelector(calcSelect);

	type Buttons = {
		numbers: number[];
		simbol: string[];
		side: string[];
		bot: (string | number)[];
	};

	const buttons: Buttons = {
		numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3],
		simbol: ['C', '<=', '%', '/'],
		side: ['*', '-', '+'],
		bot: ['.', 0],
	};

	const dispatch = useAppDispatch();

	return (
		<div className='calc'>
			<div className='screen'>
				<div className='screen__story'>{story}</div>
				<div className='screen__resolve'>{equel}</div>
			</div>
			<div className='btn-block'>
				<div className='btn-block__top'>
					{buttons.simbol.map((i, idx) => {
						return (
							<Simbols
								value={i}
								key={idx}
							/>
						);
					})}
				</div>
				<div className='btn-block__middle'>
					<div className='btn-block__numbers'>
						{buttons.numbers.map((i, idx) => {
							return (
								<Numbers
									value={i}
									key={idx}
								/>
							);
						})}
					</div>
					<div className='btn-block__side'>
						{buttons.side.map((i, idx) => {
							return (
								<SideSimbols
									value={i}
									key={idx}
								/>
							);
						})}
					</div>
				</div>
				<div className='btn-block__bottom'>
					{buttons.bot.map((i, idx) => {
						return (
							<BotSimbols
								value={i}
								key={idx}
							/>
						);
					})}
					<div
						onClick={() => {
							dispatch(equelClick());
							playSound();
						}}
						className='btn btn-block__equal'>
						{' '}
						={' '}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CalcBody;
