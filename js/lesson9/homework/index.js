

    // Все робити за допомоги js.
    // - створити блок,
    // - додати йому класи wrap, collapse, alpha, beta
    // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
    // - додати цей блок в body.
    // - клонувати його повністю, та додати клон в body.
   //
   // let bloc = document.createElement('div')
   //  bloc.classList.add('wrap');
   //  bloc.classList.add('collapse');
   //  bloc.classList.add('alpha');
   //  bloc.classList.add('beta');
   //  bloc.style.background = 'blue';
   //  bloc.style.color = 'pink';
   //  bloc.style.fontSize = '50px';
   //  document.body.appendChild(bloc);
   //  document.body.appendChild(bloc.cloneNode(true))

   //  - Є масив:
   //   ['Main','Products','About us','Contacts']
   //   Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
   //   Завдання робити через цикли.





   // - Є масив
   //  let coursesAndDurationArray = [
   //      {title: 'JavaScript Complex', monthDuration: 5},
   //      {title: 'Java Complex', monthDuration: 6},
   //      {title: 'Python Complex', monthDuration: 6},
   //      {title: 'QA Complex', monthDuration: 4},
   //      {title: 'FullStack', monthDuration: 7},
   //      {title: 'Frontend', monthDuration: 4}
   //  ];
   // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
   // Завдання робити через цикли.
   //
   //  for (let course of coursesAndDurationArray) {
   //      let div = document.createElement('div')
   //      div.innerText = `${course.title} ${course.monthDuration}`
   //      document.body.appendChild(div)
   //  }

//     //- Є масив
//     let coursesAndDurationArray = [
//         {title: 'JavaScript Complex', monthDuration: 5},
//         {title: 'Java Complex', monthDuration: 6},
//         {title: 'Python Complex', monthDuration: 6},
//         {title: 'QA Complex', monthDuration: 4},
//         {title: 'FullStack', monthDuration: 7},
//         {title: 'Frontend', monthDuration: 4}
//     ];
//     // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
//     // в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     // Завдання робити через цикли.
//
//     for (const course of coursesAndDurationArray) {
// let divElement = document.createElement('div')
//         divElement.classList.add('item')
//         let h1 = document.createElement('h1')
//         h1.classList.add('heading')
//         h1.innerText = course.title
//
//         let p = document.createElement('p')
//         p.classList.add('descriptoin')
//         p.innerText = course.monthDuration;
//
// divElement.appendChild(h1);
//         divElement.appendChild(p)
//         document.body.appendChild(divElement)
//     }