/*console.log('HW4. Задание 8.

Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
тех пор, пока не будет введена пустая строка или 0 После выхода из цикла выведите
общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
может ввести отрицательное значение.');*/

/*let sum = 0;
let num;
let average;

while(true){
  num = prompt('Введите число');
 
  if(num === null){
    alert('Спасибо!');
    break;
  }

  if(num == 0 || num == " "){
    break;  
    
  }
  
  if(num < 0 || isNaN(num)) {
    alert('Введите число > 0');
    break;
  }
  sum += +num;
  } 
  
  console.log(sum);
  console.log(average);*/

  let sum = 0;
  let num;
  let average;

  for (var i=0;;i++){
  num = Number (prompt("введите число"));
    if(num == 0 || num == " "){
      break;
    }
    if(num < 0 || isNaN(num)) {
      alert('Введите число > 0');
    }
    sum += +num;
    }
    average = sum/i;
    document.write(i+'' + "</br>"); //количество введенных чисел
    document.write('сумма:'+' '+sum + "</br>");
    document.write('среднее арифметическое:'+' '+average);