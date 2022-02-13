

        // Завдання 1  Дано список імен.
        //
        // let n1 = 'Harry..Potter'
        // let n2 = 'Ron---Whisley'
        // let n3 = 'Hermione__Granger'
        // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
        // let n1 = 'Harry Potter'
        // let n2 = 'Ron Whisley'
        // let n3 = 'Hermione Granger'
        //
        // let n1 = 'Harry..Potter'
        // let n2 = 'Ron---Whisley'
        // let n3 = 'Hermione__Granger'
        //
        // let clearn1 = n1
        // .replaceAll('..',' ')
        // let clearn2 = n2
        // .replaceAll('---',' ')
        // let clearn3 = n3
        // .replaceAll('__',' ')
        // console.log(clearn1)
        // console.log(clearn2)
        // console.log(clearn3)

        // Завдання 2  Створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
        //
        // let random = (length, num) => {
        //    let arr = []
        //     for (let i = 0; i <length; i++) {
        //       arr.push(Math.floor(Math.random()*num))
        //     }
        //     return arr;
        // }
        // let res = random(20,100)
        // console.log(res)

        // Завдання 3 - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
        //
        // let random = (length, num) =>{
        //  let arr = []
        //     for (let i = 0; i < length; i++) {
        //        arr.push(Math.floor(Math.random()*num))
        //     }
        //     return arr.sort((a, b) => b-a)
        // }
        // console.log(random(5, 100))

        // Завдання 4 - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
        //
        // let random = (length, num) =>{
        //  let arr =[]
        //     for (let i = 0; i <length; i++) {
        //         arr.push(Math.floor(Math.random()*num))
        //     }
        //     return arr.filter(num => num % 2 ===0)
        // }
        // console.log(random(100, 500))

        // Завдання 5 - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
        //
        // let random = (length, num) => {
        //   let arr = []
        //     for (let i = 0; i < length; i++) {
        //         arr.push(Math.floor(Math.random()*num))
        //     }
        //     return arr.map(num => num.toString())
        // }
        // console.log(random(10, 100))

        // Завдання 6 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
        //
        // sortNums('ascending') // [3,11,21]
        // sortNums('descending') // [21,11,3]
        //
        // let nums = [11,21,3];
        //  nums.sort(function (a,b){return b - a});
        // console.log(nums)

        // Завдання 7
        // - є масив
        // let coursesAndDurationArray = [
        //     {title: 'JavaScript Complex', monthDuration: 5},
        //     {title: 'Java Complex', monthDuration: 6},
        //     {title: 'Python Complex', monthDuration: 6},
        //     {title: 'QA Complex', monthDuration: 4},
        //     {title: 'FullStack', monthDuration: 7},
        //     {title: 'Frontend', monthDuration: 4}
        // ];
        // -- відсортувати його за спаданням за monthDuration
        // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
        //
        // let coursesAndDurationArray = [
        //     {title: 'JavaScript Complex', monthDuration: 5},
        //     {title: 'Java Complex', monthDuration: 6},
        //     {title: 'Python Complex', monthDuration: 6},
        //     {title: 'QA Complex', monthDuration: 4},
        //     {title: 'FullStack', monthDuration: 7},
        //     {title: 'Frontend', monthDuration: 4}
        // ];
        //
        //   coursesAndDurationArray.sort((a,b) => a.monthDuration - b.monthDuration)
        // console.log(coursesAndDurationArray)
        //
        //    let arr = coursesAndDurationArray.filter((value) => {
        //         return value.monthDuration > 5;
        //     })
        // console.log(arr)