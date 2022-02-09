function birthday(s, d, m) {
  let counter = 0;
 
	for (let i = 0; i < s.length; i++) {
			let newArray = s.slice(i, i+m);
			let total = newArray.reduce((acc, number) =>  acc + number );
			if (total == d) counter++;
			
	}
	return counter;
}

