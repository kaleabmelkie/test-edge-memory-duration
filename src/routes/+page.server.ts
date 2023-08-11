let cachedRandomNumber: number | null = null;

export async function load() {
	if (cachedRandomNumber !== null) {
		return {
			randomNumber: cachedRandomNumber
		};
	}

	cachedRandomNumber = Math.round(Math.random() * 100);

	return {
		randomNumber: cachedRandomNumber
	};
}
