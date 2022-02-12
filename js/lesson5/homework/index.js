

      // Всі функції повинні бути описані стрілочним типом!!!!

      // Завдання 1 - Створити функцію яка обчислює та повертає площу прямокутника
      //
      // let square = (a,b) => a*b;
      // console.log(square(5,5))

      // Завдання 2 - Створити функцію яка обчислює та повертає площу кола
      //
      // let circle = (r) =>{
      //  let rad = r ** 2;
      //  return 3.14 * rad
      // }
      // console.log(circle(5))

      // Завдання 3 - Створити функцію яка обчислює та повертає площу циліндру
      //
      // let cylinder = (r,h) => 2*3.14 * r * h;
      // console.log(cylinder(5,10))

      // Завдання 4 - Створити функцію яка приймає масив та виводить кожен його елемент
       //
       //  let mass = [11, 22, 33, 44, 'asd']
       //  let num = (mass) => {
       //      for (let i = 0; i < mass.length; i++) {
       //          document.write(mass[i])
       //      }
       //  }
       // num(mass)

      // Завдання 5 - Створити функцію яка  створює параграф з текстом. Текст задати через аргумент
      //
      // let paragraf = (text) =>{
      //     for (let i = 0; i < 10; i++) {
      //         document.write(`<p>${text}</p>`)
      //     }
      // }
      //    paragraf('hello')
      //

      // Завдання 6 - Створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
      //
      // let lii = (text) => {
      //  document.write(`<ul>`)
      //     document.write(`<li>${text}</li>`)
      //     document.write(`<li>${text}</li>`)
      //     document.write(`<li>${text}</li>`)
      //  document.write(`</ul>`)
      // }
      // lii(`hello`)

      // Завдання 7 - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
      //
      //  let elem = (text, li) => {
      //   document.write(`<ul>`)
      //      for (let i = 0; i < li; i++) {
      //       document.write(`<li>${text}</li>`)
      //      }
      //   document.write(`</ul>`)
      //  }
      //  elem(`heloo`, 100)

      // Завдання 8 - Створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
      //
      // let mass = (...arr) =>{
      //     for (let i = 0; i < arr.length; i++) {
      //         document.write(`${arr[i]}`)
      //     }
      //       return mass
      // }
      // mass(10,20, 30,'hello')

      // Завдання 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
      //
      // let obj = [{id: 1, name: 'ivan', age: 99}, {id: 2, name: 'taras', age: 110}]
      // let obj1 = (arr) => {
      //     for (let arrElement of arr) {
      //         document.write(`${arrElement.id}. - ${arrElement.name}. - ${arrElement.age}`)
      //     }
      // }
      // obj1(obj)