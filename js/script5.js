/*console.log('HW4. Задание 5.

Выведите чётные числа от 8 до 56 Решить задание через while и for.');*/

let i = 8;
do {
    console.log(i);
    i=i+2;
} while (i<=56);

console.log('--------------------');

for (i = 8; i <= 56; i++) {
    if (i % 2 == 0){
        console.log(i);
    }
}
