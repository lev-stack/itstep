// 4. Дан массив из n элементов. Поменять максимальный и минимальный элементы местами.

let a =[], n = 20, min = 1, max = 100, numberMin, numberMax, indexMax;

for (i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min)) + min;
} console.log(a);

numberMin = a[0];

for (i = 0; i < n; i++){
    if (numberMin > a[i]);
    numberMin = a [i];
    indexMin = i;
} 
console.log(numberMin, indexMin);

numberMax = a[0];

for (i = 0; i < n; i++){
    if (numberMax < a[i]){
        numberMax = a [i];
        indexMax = i;
    };
} console.log(numberMax, indexMax);

a[indexMax] = numberMin;

a[indexMin] = numberMax;

console.log(a);

