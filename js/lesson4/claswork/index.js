
  // Завдання 1 Створити функцію яка приймає три числа та виводить найменше. (Без Math.min!)
//
//   function num1 (a, b, c) {
//     if (a < b && a < c){
//         document.write(a);
//         console.log(a);
//     }
//     else if (a < c && b < a){
//         console.log(b);
//         document.write(b);
//     }
//     else {
//         console.log(c);
//         document.write(c);
//     }
// }
// num1(1,2,3)

  // Завдання 2 Створити функцію яка приймає три числа та виводить найбільше
//
//   function num2 (a, b, c) {
//       if(a > b && a > c){
//           console.log(a)
//           document.write(a)
//       }
//       else if(b > a && b > c){
//           console.log(b)
//           document.write(b)
//       }
//       else {
//           console.log(c)
//           document.write(c)
//       }
//   }
// num2(4,5,6)

  // Завдання 3 Створити функцію яка повертає найбільше число з масиву
 //
 //  let maxarr = [2, 12, 432, 3124, 3244]
 //  function arrmax(arr){
 //      let max = arr[0];
 //      for (let element of arr) {
 //          if(element > max){
 //              max = element
 //          }
 //      }
 //      return max;
 // }
 // document.write(`${arrmax(maxarr)}`)

  // Завдання 4 - Створити функцію яка повертає найменьше число з масиву
 //
 //  let minarr = [11, 22, 33]
 //  function minnum(arr){
 //    let min = arr[0]
 //      for (let element of arr) {
 //          if (element < min){
 //              min = element;
 //          }
 //      }
 //      return min;
 //  }
 // document.write(`${minnum(minarr)}`)

  //   Завдання 5 - Створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
//
//
//   let sumarr = [2, 4, 6, 10];
//   function sumElement(arr) {
//     let sum = 0;
//     for (let arrElement of arr) {
//         sum = arrElement + sum
//     }
//     return sum;
//   }
// document.write(sumElement(sumarr))

  //Завдання 6 - Cтворити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
  //
  // let averagearr = [2, 4, 9,]
  // function averageElement(arr){
  //     let sum = 0;
  //     for (let arrElement of arr) {
  //         sum = arrElement + sum;
  //     }
  //     return sum/arr.length;
  // }
  // document.write(averageElement(averagearr))
  //

  // Завдання 7 - Створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
  //              0
  //let array = [100,233,111]
  //    function minmax(...arr){
  //        let min = arr[0];
  //         let max = arr[0];
  //          for (let element of arr) {
  //       if(element > max){
  //          max = element;
  //       }
  //        if(element < min){
  //            min = element;
  //        }
  //          }
  //      console.log(max)
  //      return min;
  // }
  // document.write(minmax(100, 233, 111))

  // Завдання 8 - Створити функцію яка заповнює масив рандомними числами
  //
  // function funrandom (length){
  // let array = []
  //   for (let i = 0; i <length; i++) {
  //     array.push(Math.floor(Math.random()*100));
  //
  //   }
  //   return array;
  // }
  // document.write(funrandom(10))

  // Завдання 9 - Створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
  //
  //
  // function randomnum(length, limit){
  // let array = [];
  //   for (let i = 0; i < length; i++) {
  //     array.push(Math.round(Math.random() * limit));
  //
  //   }
  //   return array;
  // }
  // document.write(randomnum(10,100))

  // Завдання 10 - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
  // debager
  //
  // function revers(arr){
  //    let newarr = [];
  //   for (let i =  arr.length -1,ri=0; i >= 0; i--, ri++) {
  //     newarr[ri] = arr[i];
  //   }
  //   return newarr;
  // }
  // revers([1,2,3])
  // console.log(revers([1, 2, 3]))