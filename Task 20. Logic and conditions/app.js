let year = 2010;
if(year % 400 == 0 || year % 4 == 0 && year & 100 != 0){
    console.log("leap")
} else {
    console.log("common");
}
// гриб

let mushrooms = 10

if (mushrooms % 100 > 10 && mushrooms % 100 < 20 ||
    mushrooms % 10 > 4 && mushrooms % 10 < 10 ||
    mushrooms % 10 == 0) {
    console.log(mushrooms + "грибов")
} else if (mushrooms % 10 == 1) {
    console.log(mushrooms + "гриб")
}  else {
    console.log(mushrooms + "гриба")
}

// доставка

let day;
let hour;

day = 6;
hour = 3;

if ( day >=1 && day <= 5 && hour >= 1 && hour <= 15.9) {
    console.log("Заказ будет доставлен сегодня, после 16.00")
} else if ( day >=1 && day <= 5 && hour >= 16 && hour <=23 ) {
    console.log("Заказ будет доставлен завтра с 8.00 до 16.00")
} else if ( day >= 6 && day <= 7 && hour <= 24 || day == 7){
    console.log("Заказ будет доставлен в понедельник с 8.00 до 16.00")
} else{
    console.log("Заказ будет доставлен в понедельник с 8.00 до 16.00")
}