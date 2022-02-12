
    // Завдання 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
    //
    // function square (a, b){
    //  Ssquare = a * b;
    // return Ssquare;
    // }
    // console.log(square(10, 10))
    // document.write(square(10, 10))

    // Завдання 2 - Створити функцію яка обчислює та повертає площу кола з радіусом r
//
//     function scircle(r){
//     let circle = 3.14 * r;
//     return circle;
// }
//
//     console.log(scircle(10))
//     document.write(scircle(10))

    // Завдання 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
    //
    // function cylinder(h,r){
    // let scylinder = 2 *3.14 * r * h;
    // return scylinder;
    // }
    //
    // console.log(cylinder(10, 10))
    // document.write(cylinder(11, 11))

    // Завдання 4 - Створити функцію яка приймає масив та виводить кожен його елемент
    //
    //  let arr = [11, 22, 33, 'asd']
    // function array(arr){
    //     for (let i = 0; i < arr.length; i++) {
    //         document.write(arr[i])
    //
    //     }
    // }
    // array(arr)

    // Завдання 5 - Створити функцію яка створює параграф з текстом. Текст задати через аргумент
    //
    //
  //   function paragraph(text){
  //       for (let i = 0; i <= 10; i++){
  //           document.write(`<p>${i} - ${text}</p>`)
  //       }
  //   }
  // paragraph('empty text')

    // Завдання 6 - Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
    //
    //
    // function txt(text){
    //     document.write(`<ul>`)
    //     document.write(`<li>${text}</li>`)
    //     document.write(`<li>${text}</li>`)
    //     document.write(`<li>${text}</li>`)
    //     document.write(`</ul>`)
    // }
    // txt('hello')

    // Завдання 7 - Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
    //
    // function txt(text, num) {
    //       document.write(`<ul>`)
    //     for (let i = 0; i < num; i++) {
    //         document.write(`<li>${text}</li>`);
    //     }
    //      document.write(`</ul>`)
    //
    // }
    // txt('hello', '30' )

    // Завдання 8 - Створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
    //
    // let asd = [true,'stop', 2012]
    // function arr(list){
    //     for (let i = 0; i < list.length; i++) {
    //         document.write(`<li>${list[i]}</li>`);
    //     }
    // }
    // arr(asd);

    // Завдання 9 - Створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
    //
    // let obj = [{id: 1, name: 'ivan', age: 88}, {id: 2, name: 'anna', age: 92},{id: 3, name: 'taras', age: 10}];
    // function family(asd){
    //     for (let qweElement of asd) {
    //         document.write(`<div>${qweElement.id} - ${qweElement.name} - ${qweElement.age}</div>`)
    //
    //     }
    // }
    // family(obj)