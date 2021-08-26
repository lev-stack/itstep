//7. Дан массив из n элементов и некоторое число x. Проверить наличие числа x в массиве.

let a =[], n = 20, min = 1, max = 100, x = 5, isfind = false;

for (i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min)) + min;
} console.log(a);

for (i = 0; i < n; i ++){
    if (x == a[i]){
        isfind = true;
        console.log(x);
        break;
    }
} 
if (isfind == false)
{console.log("Такого числа нету")}
