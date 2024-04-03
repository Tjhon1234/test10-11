// -----------------------------------------1-----------------------------------------
// const form = document.createElement("form");
// form.className = "create-user-form";

// const label1 = document.createElement("label");
// label1.textContent = "Имя";
// const input1 = document.createElement("input");
// input1.type = "text";
// input1.name = "userName";
// input1.placeholder = "Введите ваше имя";
// label1.appendChild(input1);

// const label2 = document.createElement("label");
// label2.textContent = "Пароль";
// const input2 = document.createElement("input");
// input2.type = "password";
// input2.name = "password";
// input2.placeholder = "Придумайте Пароль";
// label2.appendChild(input2);

// const button = document.createElement("button");
// button.type = "submit";
// button.textContent = "Подтвердить";

// form.appendChild(label1);
// form.appendChild(label2);
// form.appendChild(button);

// document.body.appendChild(form);

// ------------------------------------------2-------------------------------------------
// const tasks = [
//     {
//       id: '1138465078061',
//       completed: false,
//       text: 'Посмотреть новый урок по JavaScript',
//     },
//     {
//       id: '1138465078062',
//       completed: false,
//       text: 'Выполнить тест после урока',
//     },
//     {
//       id: '1138465078063',
//       completed: false,
//       text: 'Выполнить ДЗ после урока',
//     },
//   ];

//   const tasksList = document.querySelector('.tasks-list');

//   tasks.forEach(task => {
//     const taskItem = document.createElement('div');
//     taskItem.classList.add('task-item');
//     taskItem.setAttribute('data-task-id', task.id);

//     const mainContainer = document.createElement('div');
//     mainContainer.classList.add('task-item__main-container');

//     const mainContent = document.createElement('div');
//     mainContent.classList.add('task-item__main-content');

//     const checkboxForm = document.createElement('form');
//     checkboxForm.classList.add('checkbox-form');

//     const checkbox = document.createElement('input');
//     checkbox.classList.add('checkbox-form__checkbox');
//     checkbox.setAttribute('type', 'checkbox');
//     checkbox.setAttribute('id', `task-${task.id}`);

//     const label = document.createElement('label');
//     label.setAttribute('for', `task-${task.id}`);

//     const taskText = document.createElement('span');
//     taskText.classList.add('task-item__text');
//     taskText.textContent = task.text;

//     const deleteButton = document.createElement('button');
//     deleteButton.classList.add('task-item__delete-button', 'default-button', 'delete-button');
//     deleteButton.setAttribute('data-delete-task-id', task.id);
//     deleteButton.textContent = 'Удалить';

//     checkboxForm.appendChild(checkbox);
//     checkboxForm.appendChild(label);

//     mainContent.appendChild(checkboxForm);
//     mainContent.appendChild(taskText);

//     mainContainer.appendChild(mainContent);
//     mainContainer.appendChild(deleteButton);

//     taskItem.appendChild(mainContainer);

//     tasksList.appendChild(taskItem);
//   });

// -------------------------------------------------3---------------------------------------------------
// const createTaskForm = document.querySelector('.create-task-block');
// const taskList = document.querySelector('.tasks-list');
// const taskInput = document.querySelector('.create-task-block input');

// createTaskForm.addEventListener('submit', function(event) {
//   event.preventDefault();

//   const taskText = taskInput.value;

//   const taskId = Date.now().toString();

//   const newTask = {
//     id: taskId,
//     completed: false,
//     text: taskText
//   };

//   tasks.push(newTask);

//   const taskElement = document.createElement('div');
//   taskElement.classList.add('task-item');
//   taskElement.dataset.taskId = taskId;
//   taskElement.innerHTML = `
//     <div class="task-item__main-container">
//       <div class="task-item__main-content">
//         <form class="checkbox-form">
//           <input class="checkbox-form__checkbox" type="checkbox" id="task-${taskId}">
//           <label for="task-${taskId}"></label>
//         </form>
//         <span class="task-item__text">${taskText}</span>
//       </div>
//       <button class="task-item__delete-button default-button delete-button" data-delete-task-id="${taskId}">Удалить</button>
//     </div>
//   `;

//   taskList.appendChild(taskElement);

//   taskInput.value = '';
// });

// -----------------------------------------------------------4-----------------------------------
// const form = document.querySelector('.create-task-block');
// const input = form.querySelector('input');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const taskName = input.value.trim();

//   if (taskName === '') {
//     displayErrorMessage('Название задачи не должно быть пустым');
//     return;
//   }

//   if (taskExists(taskName)) {
//     displayErrorMessage('Задача с таким названием уже существует');
//     return;
//   }

//   removeErrorMessage();

//   createTask(taskName);
// });

// function displayErrorMessage(errorMessage) {
//   const errorBlock = document.createElement('span');
//   errorBlock.classList.add('error-message-block');
//   errorBlock.textContent = errorMessage;

//   form.appendChild(errorBlock);
// }

// function removeErrorMessage() {
//   const errorBlock = form.querySelector('.error-message-block');
//   if (errorBlock) {
//     errorBlock.remove();
//   }
// }

// function taskExists(taskName) {
// }

// function createTask(taskName) {
// }

// -------------------------------------------------6-----------------------------------------
