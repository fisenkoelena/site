// График для личного кабинета исполнителя
const executorCtx = document.getElementById('executorWorkChart');
if (executorCtx) {
  const executorChart = new Chart(executorCtx.getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: ['Выполненные задачи', 'Невыполненные задачи'],
      datasets: [{
        data: [15, 5], // Примерные данные
        backgroundColor: ['#4CAF50', '#f44336']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

// График для личного кабинета заказчика
const customerCtx = document.getElementById('customerOrderChart');
if (customerCtx) {
  const customerChart = new Chart(customerCtx.getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['Завершенные заказы', 'В процессе', 'Ожидающие'],
      datasets: [{
        data: [10, 3, 2], // Примерные данные
        backgroundColor: ['#4CAF50', '#ff9800', '#f44336']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}