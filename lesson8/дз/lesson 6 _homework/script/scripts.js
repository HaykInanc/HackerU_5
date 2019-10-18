let line1 = " пива на стене,"
let line2 = " пива!"
let line3 = "Возьми одну, пусти по кругу"
let line4 = " пива на стене!"

let bottle1 = " бутылка"
let bottle2 = " бутылки"
let bottle3 = " бутылок"

let a = prompt (['how many chores to sing?','for exit enter 0 or negative number'].join('\n'))

	if (isNaN(a)) {
		alert ('not a number, try again and next time enter a number only!');
	} else 
		for (let i = a; i>0; i-- ) {

			if (i == 0) {
				console.log ([i + bottle3 + line1, i + bottle3 + line2, line3, (i-1) + bottle3 + line4].join('\n'));
			} else if (i%10 == 1) {
				console.log ([i + bottle1 + line1, i + bottle1 + line2, line3, (i-1) + bottle3 + line4].join('\n'));
			} else if (i==2 || i==22 || i==32 || i==42 || i==52 || i==62 || i==72 || i==82 || i==92) {
				console.log ([i + bottle2 + line1, i + bottle2 + line2, line3, (i-1) + bottle1 + line4].join('\n'));		
			} else if (i==3 || i==23 || i==33 || i==43 || i==53 || i==63 || i==73 || i==83 || i==93) {
				console.log ([i + bottle2 + line1, i + bottle2 + line2, line3, (i-1) + bottle2 + line4].join('\n'));	
			} else if (i==4 || i==24 || i==34 || i==44 || i==54 || i==64 || i==74 || i==84 || i==94) {
				console.log ([i + bottle2 + line1, i + bottle2 + line2, line3, (i-1) + bottle2 + line4].join('\n'));		
			} else if (i==5 || i==25 || i==35 || i==45 || i==55 || i==65 || i==75 || i==85 || i==95) {
				console.log ([i + bottle3 + line1, i + bottle3 + line2, line3, (i-1) + bottle2 + line4].join('\n'));		
			} else {
				console.log ([i + bottle3 + line1, i + bottle3 + line2, line3, (i-1) + bottle3 + line4].join('\n'));		
		}
	}





