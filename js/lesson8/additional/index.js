

     //- Написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

     function scraper (startelement) {
         console.log(startelement);
         let children = startelement.children;
         for (let child of children) {
             scraper(child)
         }
     }
     document.body.classList('child')