function myFunc(name, age=20){
	if (name == -1){
		return;
	}

	console.log('привет '+name);
	console.log(`Тебе ${age} лет.`);
	return name.toUpperCase();
}


let a = myFunc("Гайк", 26);
let b = myFunc("Анатолий", 22);
let с = myFunc("Валерий");


	

function func(n){
	let f = '';
	for (let i = 1; i<=n; i++){
		f += i;
		console.log(f);
	}
}


function range(n){
	let a = [];
/*	for (let i=0; i<n; i++){
		a.push(i);
	}*/
	let i = 0;
	while(i<n){
		a.push(i);
		i++;
	}
	return a;
}

let t = range(10);



function concat(n){
	if (n == 0){
		return 0;
	}else{
		return String(n) + concat(--n);
	}
}

concat(5);