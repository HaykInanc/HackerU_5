let a = [];

while (true){
	let b = prompt('Введите число');
	let bExist = false;

	if (b == -1){
		console.log(a);
		break;
	}

	for (let i=0; i<a.length; i++){
		if (a[i] == b){
			bExist = true;
		}
	}

	if (!bExist){
		a.push(b);
	}
}


/*

let b = 6;
let c = false;

for (let i=0; i<a.length; i++){
	if (a[i] == b && !c){
		console.log(i);
		c = !c;
	}
}*/