var result = prompt('Введите число', 1);
if(!isNaN(parseInt(result)) && parseInt(result) > 0){
    for (var i = parseInt(result); i > 0; i--){
            console.log([i +" бутылок пива на стене",
                 i + " бутылок пива!\nВозьми одну, пусти по кругу",
                 (i-1) + " бутылок пива на стене!", '\n\n\n'].join('\n'));
    }
}else{
    console.log('Укажите число больше нуля');
}