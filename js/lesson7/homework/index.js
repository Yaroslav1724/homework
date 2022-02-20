

     // Завдання 1 - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
     //
     // function User(id, name, surname, email, phone){
     //      this.id = id;
     //      this.name = name;
     //      this.surname = surname;
     //      this.email = email;
     //      this. phone = phone;
     // }

     // Завдання 2 створити пустий масив, наповнити його 10 об'єктами new User(....)
     //
     // let users = [
     //     new User(1, 'ivan', 'ivanov','iv@gmai.com','0987733456'),
     //     new User(2,'taras','semenov','sem@gmail.com','0967723118'),
     //     new User(3,'anya','bulba', 'bul@gmail.com', '0997753422'),
     //     new User(6, 'ivanka', 'ivanova','iv@gmai.com','0987733454'),
     //     new User(5,'taras','semenovna','sem@gmail.com','0967723112'),
     //     new User(44,'andryi','asd', 'bul@gmail.com', '0997753420'),
     //     new User(7, 'ivana', 'ivanovna','iv@gmai.com','0987733458'),
     //     new User(8,'taras','semen','sem@gmail.com','0967723113'),
     //     new User(93,'karina','bulba', 'bul@gmail.com', '0997753422'),
     //     new User(100,'anya','qwe', 'bul@gmail.com', '0997753122')
     // ]
     // console.log(users)

     //Завдання 3 - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
     //
     // let filteruser = users.filter((item) =>{
     //   if (item.id % 2 === 0) {
     //       return item
     //   }
     // });
     // console.log(filteruser)
     //
     //
     // // Завдання 4 - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
     //
     // users.sort((a,b) => a.id - b.id)
     // console.log(users.sort())

     // Завдання 5 - Створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
     //
     // class Client {
     //   constructor(id, name, surname, email, phone, order) {
     //       this.id = id;
     //       this. name = name;
     //       this.surname = surname;
     //       this.email = email;
     //       this.phone = phone;
     //       this.order = order;
     //   }
     // }

     // Завдання 6 створити пустий масив, наповнити його 10 об'єктами Client
     //
     // let arr = [
     //         new Client(1, 'ivan', 'ivanov','iv@gmai.com','0987733456',['qwe','asd']),
     //         new Client(2,'taras','semenov','sem@gmail.com','0967723118',['dfgwewe']),
     //         new Client(3,'anya','bulba', 'bul@gmail.com', '0997753422',['care']),
     //         new Client(6, 'ivanka', 'ivanova','iv@gmai.com','0987733454',['ad']),
     //         new Client(5,'taras','semenovna','sem@gmail.com','0967723112',['fixe']),
     //         new Client(44,'andryi','asd', 'bul@gmail.com', '0997753420',['catrweq']),
     //         new Client(7, 'ivana', 'ivanovna','iv@gmai.com','0987733458',['bmweqfff']),
     //         new Client(8,'taras','semen','sem@gmail.com','0967723113',['car']),
     //         new Client(93,'karina','bulba', 'bul@gmail.com', '0997753422',['zxxc']),
     //         new Client(100,'anya','qwe', 'bul@gmail.com', '0997753122',['porsh'])
     // ]
     // console.log(arr)

     // Завдання 7 - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
     //
     // let sortClient = arr.sort((a,b) => a.order.length - b.order.length)
     // console.log(sortClient)
     //
     //
     //
