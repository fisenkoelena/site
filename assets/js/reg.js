// Обработчик отправки формы регистрации
const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Останавливаем стандартное поведение формы
  
  // Имитация успешной регистрации
  const role = document.querySelector('h1 span').innerText.toLowerCase(); // Определяем роль из заголовка
  if (role === 'исполнителя') {
    window.location.href = 'executor-dashboard.html'; // Переход в личный кабинет исполнителя
  } else if (role === 'заказчика') {
    window.location.href = 'customer-dashboard.html'; // Переход в личный кабинет заказчика
  }
});