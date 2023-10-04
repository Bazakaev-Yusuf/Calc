const soundList = [
	'https://www.soundjay.com/buttons/sounds/button-30.mp3',
	'https://www.soundjay.com/buttons/sounds/button-28.mp3',
	'https://www.soundjay.com/buttons/sounds/button-29.mp3',
];

export const playSound = () => {
	const audio = new Audio(
		soundList[Math.floor(Math.random() * soundList.length)],
	);

	audio.play();
};
