/*let timerInput = document.getElementById("time"); 
let buttonRun = document.getElementById("button");
let timerShow = document.getElementById("timer"); 

buttonRun.addEventListener('click', function() {
    timeMinut = parseInt(timerInput.value) * 60
})

timer = setInterval(function () {
    seconds = timeMinut%60 
    minutes = timeMinut/60%60 
    if (timeMinut <= 0) {
        // Таймер удаляется
        clearInterval(timer);
        // Выводит сообщение что время закончилось
        alert("Время закончилось");
    } else { // Иначе
        // Создаём строку с выводом времени
        let strTimer = `${Math.trunc(minuts)}:${seconds}`;
        // Выводим строку в блок для показа таймера
        timerShow.innerHTML = strTimer;
    }
    ++timeMinut; // Уменьшаем таймер
}, 1000)
*/


/*document.addEventListener('DOMContentLoaded', function() {
    // конечная дата, например 1 июля 2021
    //const deadline = new Date(2021, 06, 01);
    // id таймера
    let timerId = null;
    // склонение числительных
   // function declensionNum(num, words) {
   //   return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    //}
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
      function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      //const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      //const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      //$days.textContent = days < 10 ? '0' + days : days;
      //$hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      //$days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
      //$hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
      $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    // получаем элементы, содержащие компоненты даты
    //const $days = document.querySelector('.timer__days');
    //const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  });
  */

  const watch = document.querySelector("#watch");
  let milliseconds = 0;
  let timer;

  const startWatch = () =>{
    watch.classList.remove('paused');
    clearInterval(timer);
    timer = setInterval(()=>{
      milliseconds += 10;
      let dateTimer = new Date(milliseconds);
      watch.innerHTML =
      ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
      ('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
      ('0'+dateTimer.getUTCMilliseconds()).slice(-2); 
  },10)
  };

  const pauseWatch = () => {
    watch.classList.add('paused');
    clearInterval(timer);
  };

  const resetWatch = () => {
    watch.classList.remove('paused');
    clearInterval(timer);
    milliseconds = 0;
    watch.innerHTML = '00:00:00';
  };

  document.addEventListener('click',(e) =>{
    const element = e.target;
    if (element.id === 'start') startWatch();
    if (element.id === 'pause') pauseWatch();
    if (element.id === 'reset') resetWatch();
  });

