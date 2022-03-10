

   // Завдання 1 Створити форму з інпутами для name та age.
   // При відправці форми записати об'єкт в localstorage
   //
   // let name = document.forms.userForm.name;
   // let age = document.forms.userForm.age;
   // let btn =document.getElementById('btn');
   // let key = 'key'
   //
   // let text = (userName, userAge) => {
   //     let user = {
   //         name:userName,
   //         age:userAge
   //     }
   //     localStorage.setItem(key, JSON.stringify(user))
   // }
   // btn.onclick = () => {
   //     text(name.value, age.value)
   // }

   // Завдання 2 Створити форму з інпутами для model,type та volume автівки.
   // при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
   //
   // let model = document.forms.carForm.model;
   // let type = document.forms.carForm.type;
   // let volume = document.forms.carForm.volume;
   // let btn = document.getElementById('btnCar');
   // let key = 'keyCar';
   //
   // let save = (modelCar, typeCar, volumeCar) =>{
   //     let newA = JSON.parse(localStorage.getItem(key)) || []
   //     newA.push({modelCar, typeCar, volumeCar})
   //     localStorage.setItem(key, JSON.stringify(newA))
   //
   // }
   // btn.onclick = () => {
   //     save(model.value, type.value, volume.value)
   // }