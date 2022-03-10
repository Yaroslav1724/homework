

   // Завдання 1 Створити довільний елемент із id = text. Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
   // Варіант 1
   // let click = document.getElementById('text');
   // let button = document.getElementById('button');
   // button.onclick = function () {
   //     click.style.display = 'none'
   // }

   // Завдання 2 Створіть кнопку, при натисканні на яку вона приховуватиме сама себе.
   // document.getElementById('button').onclick = function (){
   //     document.getElementById('button').hidden = true;
   // }

   // Завдання 3 Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
   // При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
   // та повідомити про це користувача
//
//    document.getElementById('button1').onclick = function (){
//    let age =document.getElementById('age').value;
//    if (!age){
//        alert('ви не ввели свій вік')
//    }
//    else if (age < 18) {
//        alert('Вибачте ви не повнолітні')
//    }
//    else {
//        alert('Вітаємо')
//    }
// }

   // Завдання 4 Створіть меню, яке розкривається/згортається під час кліку
   // //
   // let menuElement = document.querySelector('.menu');
   // let titleElement = menuElement.querySelector('.title');
   //
   // titleElement.onclick = function (){
   //     menuElement.classList.toggle('hidden')
   // }

   // Завдання 5 Створити перелік коментарів , приклад об'єкта коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
   // Вивести список коментарів у документ, кожен у своєму блоці.
   //  Додайте кожному коментарю за кнопкою для згортання його body.
   //
   let comment = [
       {name: 'max', body: 'йдемо на футбол'},
       {name: 'ivan', body: 'йдемо на теніс'},
       {name: 'taras', body: 'йдемо на регбі'},
   ]
   let divarr = document.createElement('div');
   for (let item of comment) {
   let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let button = document.createElement('button')

       h3.innerText = item.name;
       p.innerHTML = item.body;
       button.innerHTML = 'Закрити'
       button.onclick = () => {
                   p.classList.add('pHidden');
                   button.previousElementSibling.classList.add('pHidden');  // 2варінт який звертаєтсья до ПОПЕРЕДНЬОГО елементу перед btn
               }
       div.append(h3, p, button);
       divarr.append(div);

   }
   document.body.appendChild(divarr)

