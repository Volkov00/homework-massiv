'use strict'

  //Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

// let obj = [4, -2, 5, 19, -130, 0, 10];
// let min = Math.min.apply(null, obj);

// console.log(min);

// let max = Math.max.apply(null, obj);

// console.log(max);


  //Cреднее арифметическое его элементов. 

  // let arr = [12, 15, 20, 25, 59, 79];

  // function masArr() {
  //   let sum = null;
  //   for (let i = 0; i < arr.length; i++){
  //     sum += arr[i];
  //   }
  //   console.log(sum / (arr.length -1));
  // }
  // masArr();


  // //Работа с concat
  // let num1 = [1, 2, 3];
  // let num2 = [4, 5, 6];
  // let numSum = num1.concat(num2);
  // console.log(numSum)

  // //Работа с reverse
  // let rev = [1, 2, 3, 4, 5];
  // console.log(rev.reverse());

  // //Работа с push, unshift
  // let add = [1, 2, 3];
  // add.push(4, 5, 6)
  // console.log(add);
  // add.unshift(4, 5, 6)
  //   console.log(add);

  // //Работа с shift, pop
  // let line = ['js', 'css', 'jq'];
  // line.shift();
  // line.pop();


  // //Работа с slice
  // let slc = [1, 2, 3, 4, 5];
  // console.log(slc.slice(0, 3))
  // console.log(slc.slice(3,5))

  // // Работа с splice
  // // task1
  // let spc = [1, 2, 3, 4, 5];
  // spc.splice(1,2);

  // // //Работа с splice
  // // //task2
  // let spc = [1, 2, 3, 4, 5];
  // console.log(spc.splice(1,3));

  // // //Работа с splice
  // // //task3
  // let spc = [1, 2, 3, 4, 5];
  // console.log(spc.splice(3, 0, "a", "b",'c'));

  // // //Работа с splice
  // // //task4
  // let spc = [1, 2, 3, 4, 5];
  // spc.splice(1, 0, 'a', 'b');
  // spc.splice(6, 0, 'c');
  // spc.splice(8, 0, 'e');
  // console.log(spc);

  // // //Работа с sort
  // let srt = [3, 4, 1, 2, 7];
  // srt.sort();
  // console.log(srt);


  //Работа с Object.keys
  // let obj = { js: 'test', jq: 'hello', css: 'world' };
  // let keys = Object.keys(obj);
  // console.log(keys);


  //Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.

  // let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];

  // function test(qq) {
  //   for (let i = 0; i < number.length; i++){
  //     if (number[i] === qq) return true;
  //   } return false;
  // }
  // console.log(test(5));



  //Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true, а если нет - вернуть false.
  // let number2 = [0, 1, 2, 3, 4, 10];

  // function test() {
  //   for (let i = 0; i < number2.length; i++) {
  //     if (number2[i] === number2[i - 1]) return true;
  //   }
  // return false;
  // }
  // console.log(test());

  

