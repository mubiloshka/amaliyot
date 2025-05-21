
// const usernameInput = document.getElementById('username');
// const passwordInput = document.getElementById('password');
// const submitButton = document.getElementById('submitButton');
// const togglePassword = document.getElementById('togglePassword');
// const errorMessage = document.getElementById('errorMessage');


// togglePassword.addEventListener('click', () => {
//   if (passwordInput.type === 'password') {
//     passwordInput.type = 'text';
//     togglePassword.textContent = '🙈';
//   } else {
//     passwordInput.type = 'password';
//     togglePassword.textContent = '👁';
//   }
// });


// function cheak() {
//   const username = usernameInput.value.trim();
//   const password = passwordInput.value.trim();

  
//   submitButton.disabled = !(username && password);


//   if (username && password) {
//     errorMessage.textContent = '';
//   }
// }

// usernameInput.addEventListener('input', cheak);
// passwordInput.addEventListener('input', cheak);


// submitButton.addEventListener('click', () => {
//   const username = usernameInput.value.trim();
//   const password = passwordInput.value.trim();

//   if (!username || !password) {
//     errorMessage.textContent = 'Iltimos, barcha maydonlarni to‘ldiring!';
//   } else {
//     errorMessage.textContent = '';
//     alert('Formani yuborish mumkin!');
//   }
// });



// Находим элементы
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const togglePassword = document.getElementById('togglePassword');
const submitButton = document.querySelector('.btn');

// Делаем введённый текст чёрным
usernameInput.style.color = '#000';
passwordInput.style.color = '#000';

// Переключение видимости пароля
togglePassword.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  togglePassword.textContent = isPassword ? '🙈' : '👁';
});

// Проверка на заполненность
function check() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  submitButton.disabled = !(username && password);
}

usernameInput.addEventListener('input', check);
passwordInput.addEventListener('input', check);
