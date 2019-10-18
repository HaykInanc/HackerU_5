let quantity = prompt("Сколько бутылок пива?");
while (quantity > 0){
    console.log(quantity + " Бутылок пива на стене");
    console.log(quantity + " Бутылок пива! \nВозьми одну, пусти по кругу");
    console.log(quantity - 1 + " Бутылок пива на стене\n\n\n\n");
    quantity--;
}
