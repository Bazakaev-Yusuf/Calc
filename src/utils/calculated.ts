export function equel(num: number[], symbols: string[]) {
	let result = 0;
	let sim = symbols.filter((i) => i !== '%');

	for (let i = 0; i < sim.length; i++) {
		if (sim.includes('*') || sim.includes('/')) {
			sim.find((i, idx) => {
				if (i === '*') {
					num[idx] = num[idx] * num[idx + 1];
					num.splice(idx + 1, 1);
					sim.splice(idx, 1);
					return true;
				} else if (i === '/') {
					num[idx] = num[idx] / num[idx + 1];
					num.splice(idx + 1, 1);
					sim.splice(idx, 1);
					return true;
				}
				return false;
			});
		}
	}

	for (let j = 0; j < sim.length; j++) {
		sim.find((i, idx) => {
			if (i === '+') {
				num[idx] = num[idx] + num[idx + 1];
				num.splice(idx + 1, 1);
				sim.splice(idx, 1);
			} else if (i === '-') {
				num[idx] = num[idx] - num[idx + 1];
				num.splice(idx + 1, 1);
				sim.splice(idx, 1);
			}
			return true;
		});
	}

	if (sim.length) {
		switch (sim[0]) {
			case '+':
				result = num.reduce((acc, val) => acc + val);
				break;
			case '-':
				result = num.reduce((acc, val) => acc - val);
				break;
			case '*':
				result = num.reduce((acc, val) => acc * val);
				break;
			case '/':
				result = num.reduce((acc, val) => acc / val);
				break;
			default:
				return result;
		}
	} else result = num[0];

	return Number.isInteger(result) ? result : Number(result.toFixed(6));
}
