

          //Всі функції повинні бути описані стрілочним типом!!!!


          // Завдання 1 - Створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
          //
          //    let num1 = (a, b, c)=> {
          //      if (a < b && a < c){
          //          document.write(a)
          //          console.log(a)
          //      }
          //      else if (b < a && b < c){
          //          document.write(b)
          //          console.log(b)
          //      }
          //       else {
          //           document.write(c)
          //          console.log(c)
          //      }
          //    }
          // num1(100, 200, 300)

          // Завдання 2 - Створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
          //
          // let numMax = (x, y, z) => {
          //      if (x > y && x > z){
          //          document.write(x);
          //          console.log(x);
          //      }
          //      else if (y > x && y > z){
          //          document.write(y);
          //         console.log(y);
          //      }
          //    else {
          //        document.write(z);
          //          console.log(z);
          //     }
          // }
          // numMax(400, 500, 600)

          // Завдання 3 - створити функцію яка повертає найбільше число з масиву
          //
          // let numMax = [100, 233, 444, 555, 666]
          //
          // let max1 = (arr) => {
          //  let max = arr[0]
          //   for (let num of arr){
          //    if(num > max){
          //        max = num
          //    }
          //   }
          //   return max
          // }
          // document.write(`${max1(numMax)}`)

          // Завдання 4 - Створити функцію яка повертає найменьше число з масиву
          //
          // let nummin = [111, 222, 333, 444]
          //     let min1 = (arr) => {
          //     let  min = arr[0]
          //         for (let num of arr){
          //         if (num < min){
          //             num = min;
          //         }
          //     }
          //     return min
          //     }
          //     document.write(`${min1(nummin)}`)

          // Завдання 5 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
          //
          // let add = (a, b, c) => a+b+c;
          // console.log(add(10, 11, 12))

          // Завдання 6 - Створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
          //
          // let arithmeticmean = (a, b, c) => {
          //    let result = a+b+c;
          //    let num = result/arithmeticmean.length;
          //    return num;
          // }
          // console.log(arithmeticmean(10, 20, 30))

          // Завдання 7 - Створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
          //
          // let num1 = (...arr) =>{
          //   let min = arr[0];
          //   let max = arr[0];
          //     for (let element of arr){
          //         if (element > max){
          //             max = element;
          //         }
          //         if (element < min)
          //             min = element;
          //     }
          //     console.log(max)
          //     return min;
          //  }
          // document.write(num1(11, 22, 33, 44))

          // Завдання 8 - Створити функцію яка заповнює масив рандомними числами
       //
       //     let random = (length) => {
       //        let arr = []
       //         for (let i = 0; i < length; i++) {
       //           arr.push(Math.floor(Math.random()*100))
       //         }
       //         return arr
       //     }
       // document.write(random(22))

          // Завдання 9 - Створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
          //
          // let random = (length, limmit) => {
          //   let arr = [];
          //     for (let i = 0; i <length; i++) {
          //         arr.push(Math.floor(Math.random()*limmit))
          //     }
          //     return arr
          // }
          // document.write(random(30, 100))

          // Завдання 10 - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
          //
          // let revers = (arr) =>{
          //  let array = [];
          //     for (let i = arr.length - 1, ri=0; i >= 0; i--, ri++) {
          //     array[ri] = arr[i]
          //
          //     }
          //     return array
          // }
          // revers([1,2,3])
          // console.log(revers([1,2,3]))