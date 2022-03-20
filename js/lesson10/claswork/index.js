

   // Завдання 1  Створити 2 форми  по 2 інпути в кожній.
   // Ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
   // Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
   // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
   //
   // let divOne = document.createElement('div');
   // divOne.innerText = 'bloc1';
   // document.body.appendChild(divOne);
   // let divTwo = document.createElement('div');
   // divTwo.innerText = 'bloc2';
   // document.body.appendChild(divTwo);
   //
   // let formOne = document.createElement('form');
   // formOne.setAttribute('name', 'formOne');
   // divOne.appendChild(formOne);
   //
   // let formTwo = document.createElement('form');
   // formTwo.setAttribute('name', 'formTwo');
   // divTwo.appendChild(formTwo);
   //
   // let inputeOne = document.createElement('input');
   // inputeOne.setAttribute('name', 'inputeOne');
   //
   // let inputeTwo = document.createElement('input');
   // inputeTwo.setAttribute('name', 'inputeTwo');
   //
   // let inputeThree = document.createElement('input');
   // inputeThree.setAttribute('name', 'inputeThree');
   //
   // let inputeFour = document.createElement('input');
   // inputeFour.setAttribute('name', 'inputeFour');
   //
   // let button = document.createElement('button');
   // button.innerText = 'click';
   //
   // document.body.appendChild(button);
   //
   // formOne.append(inputeOne,inputeTwo);
   // formTwo.append(inputeThree,inputeFour);
   //
   //
   // button.addEventListener('click', function (){
   //     console.log(document.forms.formOne.inputeOne.value);
   //     console.log(document.forms.formOne.inputeTwo.value);
   //     console.log(document.forms.formTwo.inputeThree.value);
   //     console.log(document.forms.formTwo.inputeFour.value);
   // })

   // Завдання 2 Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
   // При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
   // (Додатковачастина для завдання)

   let inputOne = document.createElement('input');
   let inputTwo = document.createElement('input');
   let inputThree = document.createElement('input');
   let button = document.createElement('button');

   button.innerText = 'Створи таблицю';
   document.body.append(inputOne, inputTwo, inputThree, button);


   button.addEventListener('click', function () {
       let tr = inputOne.value;
       let td = inputTwo.value;
       let enterText = inputThree.value;

       function generationTable(tr, td, inner) {
           let table = document.createElement('table');
           let divTable = document.createElement('div');

           table.style.border = '10px solid red';
           divTable.appendChild(table);
           document.body.appendChild(divTable);

           for (let i = 0; i < tr; i++) {
               let tr = document.createElement('tr');
               tr.style.border = '10px solid blue';
               for (let j = 0; j < td; j++) {
                   let td = document.createElement('td');
                   td.style.border = '10px solid green';
                   td.innerText = `${inner}`;
                   table.appendChild(tr);
                   tr.appendChild(td);
               }
           }
       }
       generationTable(tr, td, enterText);
   })


   // Завдання 3  Сворити масив не цензурних слів.
   //     //        Сворити інпут текстового типу.
   //     //        Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
   //     //        Перевірку робити при натисканні на кнопку
//
//    let names = ['ivan', 'taras', 'vova'];
//    let input = document.createElement('input');
//    let button = document.createElement('button');
//    button.innerText = 'Перевірка';
//    document.body.append(input, button)
//
//    button.addEventListener('click', function () {
//        let valueInput = input.value;
//        for (let name of names) {
//            if (name === valueInput){
//                alert('Сам такий')
//                input.value = '';
//                return
//            }
//        }
//
// if (valueInput){
//     alert('Молодець')
//     input.value = '';
// }
//    })
