function compareTriplets(a, b) {
	let aliceCounter = 0;
	let bobCounter = 0;
	for (let i=0; i < 3; i++) {
		if(a[i] > b[i]) {
				aliceCounter++;
		} else if(b[i] > a[i]) {
				bobCounter++;
		}
	}
		return [aliceCounter, bobCounter];
}
