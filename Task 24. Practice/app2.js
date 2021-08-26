// 2. Дан массив из n элементов и число k. Вывести все элементы кратные числу k.

let n = 10; a = [], min = 1, max = 100, k = 2

for (j = 0; j < n; j++){
    a[j] = Math.floor(Math.random() * (max - min)) + min;
} 
console.log(a);

for (j = 0; j < n; j++){
    if (a[j] % k == 0)
    console.log(a[j])
}
