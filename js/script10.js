/*console.log('HW4. Задание 10.

Дано произвольное целое число n. Написать программу, которая:
a. разбивает число n на цифры и выводит их на экран;
b. подсчитывает сколько цифр в числе n;
c. находит сумму цифр числа n;
d. меняет порядок цифр числа n на обратный.
Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321')*/


let int_number = prompt('Введи число');
let int_length = (''+int_number).length;
let sum = 0;
let i = 1; 

for (i = 1; i<=int_number; i++) {
    sum = 0;
    document.write('Цифры в числе ' + int_number + ' это:' + i + '</br>');
    for (j = 1; j<=i; j++) {
        sum += j;
    }
    
};
document.write('Количество цифр в числе ' + int_number + ' = ' + int_length + '</br>');
document.write('Сумма цифр числа ' + int_number + ' = ' + sum + '</br>');
document.write('Обратный порядок:' + ('' + int_number).split('').reverse().join(''));




