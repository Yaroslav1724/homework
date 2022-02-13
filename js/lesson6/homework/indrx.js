

          // Завдання 1 - Знайти та вивести довижину наступних стрінгових значень
          // //     'hello world', 'lorem ipsum', 'javascript is cool'
          //
          // let txt1 = 'hello world';
          // console.log(txt1.length);
          //
          // let txt2 = 'lorem ipsum';
          // console.log(txt2.length);
          //
          // let txt3 = 'javascript is cool'
          // console.log(txt3.length)

          // Завдання 2 - Перевести до нижнього регістру наступні стрінгові значення
          //       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
          //
          // let txt1 = 'HELLO WORLD'
          // let min1 = txt1.toLowerCase()
          // console.log(min1)
          //
          // let txt2 = 'LOREM IPSUM'
          // let min2 = txt2.toLowerCase()
          // console.log(min2)
          //
          // let txt3 = 'JAVASCRIPT IS COOL'
          // let min3 = txt3.toLowerCase()
          // console.log(min3)

          // Завдання 3 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
          //
          // let arr = ' dirty string   ';
          // let trim = arr.trim()
          // console.log(trim)

          // Завдання 4 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
          //// let str = 'Каждый охотник желает знать';
          // //let arr = stringToarray(str);
          // // document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
          //
          // let stringToarray = (str)=>{
          // return str.split(' ');
          // }
          // let str = 'Сьогодні сонячна погода'
          // let arr = stringToarray(str);
          // console.log(arr)
          // document.write(arr)

          // Завдання 5 Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
          //     let str = 'Каждый охотник желает знать';
          //     document.writeln(delete_characters(str, 7)); // Каждый
          //
          // let delete_characters = (str, length) => {
          //  return str.substr(0, length);
          // }
          // let str = 'Каждый охотник желает знать';
          // document.writeln(delete_characters(str,6))

          // Завдання 6 - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
          //    let str = "HTML JavaScript PHP";
          //    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
          //
          //  let insert_dash = (str) => {
          //   let upcass = str.split(' ').join ('-').toUpperCase();
          //   return upcass;
          //  }
          // let string = "HTML JavaScript PHP";
          // console.log(insert_dash(string))

          // Завдання 7 - - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
          //
          // let firstUp = (str) => {
          //     if (!str) return str;
          //     return str[0].toUpperCase() + str.slice(1)
          // };
          // document.write(firstUp('hello okten'));
          // console.log(firstUp('hello okten'));

          // Завдання 8 - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
          //
          // let capitalize = (str) => {
          //     return str.split(' ').map(arr=>arr.charAt(0).toUpperCase()+arr.slice(1)).join(' ');
          //     };
          //     document.write(capitalize('okten hi you are welcome'));
          //     console.log(capitalize('okten hi you are welcome'));
