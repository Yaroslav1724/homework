

    // В index.html
    // 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
    // 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
    // 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
//
// let usersContainer = document.getElementsByClassName('users')[0];
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value => value.json())
//         .then(value => {
//             for (const valueElement of value) {
//                 let userContainer = document.createElement('div')
//                 userContainer.classList.add('user');
//                 let a = document.createElement('a');
//                 a.innerText = `${valueElement.id} - ${valueElement.name}`
//                 a.href = `./user-details.html?data=${JSON.stringify(valueElement)}`;
//                 userContainer.appendChild(a);
//                 usersContainer.appendChild(userContainer)
//
//             }
//         });

   //На странице user-details.html:
    // 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
    // 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
    // (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
    // 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
    //
   // let url = new URL(location.href);
   // let user = JSON.parse(url.searchParams.get('data'));
   //  console.log(user)
   //  let userDetailsContainer = document.getElementsByClassName('user-details')[0];
   //  let postsContainer = document.getElementsByClassName('posts')[0];
   //  let postsDetailsButton = document.getElementsByClassName('postsDetailsButton')[0];
   //  userDetailsContainer.innerText = `${JSON.stringify('user')}`;
   //
   //  postsDetailsButton.onclick = function () {
   //      this.disabled = true
   //      fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
   //          .then(value => value.json())
   //          .then(value => {
   //              for (const postItem of value) {
   //                  let postContainer = document.createElement('div');
   //                  postContainer.classList.add('post')
   //                  postContainer.innerText = postItem.title;
   //                  let postDetailsButton = document.createElement('button')
   //                  postDetailsButton.innerText = 'post details';
   //                  postDetailsButton.onclick = function () {
   //                      location.href = `./post-details.html?data=${JSON.stringify(postItem)}`;
   //                  };
   //                  postContainer.appendChild(postDetailsButton);
   //                  postsContainer.append(postContainer);
   //              }
   //          })
   //  }
   //  userDetailsContainer.appendChild(postsDetailsButton);


    // На странице post-details.html:
    // 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
    // 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
    let url = new URL(location.href);
    let post = JSON.parse(url.searchParams.get('data'));
    console.log(post)

    let postContainer = document.getElementsByClassName('post')[0];
    postContainer.innerText = JSON.stringify(post);


    let commentsContainer = document.getElementsByClassName('comments')[0];
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(value => value.json())
        .then(value =>{
            for (const commentItem of value) {
                let commentContainer = document.createElement('li');
                commentContainer.innerText = commentItem.body;

                commentsContainer.appendChild(commentContainer);

            }
        })

