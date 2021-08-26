//6. Дан массив из n элементов. Увелить все нечетные элементы на 1 и уменьшить все четные в 2 раза.

let a=[], n = 20, min = 1, max = 100;

for (i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min)) + min;
} console.log(a);

for (i = 0; i < n; i++){
    if (a[i] % 2 != 0){
        a[i] = a[i] + 1;    
    }
    else{
        a[i] = a[i] / 2; 
    }    
} console.log(a);