// 5. Дан массив из n элементов. Создать 2 новых массива. В 1 первый записать все элементы с четными индексами, во 2 - с нечетными.

let a =[], b =[], c =[], n = 20, min = 1, max = 100, numberMin, numberMax, indexMax;

for (i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min)) + min;
} console.log(a);

for (i = 0, j = 0; y = 0, i < n; i++){
    if (a[i] % 2 == 0){
        b[j] = a[i];
        j++;
    }
    else {c[y] = a[i]}    
    y++;
}
console.log(b);
console.log(c)