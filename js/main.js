document.addEventListener('DOMContentLoaded', function () {
    const keys = ['W', 'V', 'D', 'F', 'P', 'H', 'Y', 'K', 'L', 'B', 'T'];
    let currentKeyIndex = 0;
    const messageElement = document.getElementById('message');
    const keyElement = document.getElementById('key');

    function showMessage(message, type = 'success') {
      PNotify.alert({
        text: message,
        type: type,
        delay: 2000
      });
    }

   function checkKeyPress(event) {
      const pressedKey = event.key.toUpperCase();

      if (pressedKey === keys[currentKeyIndex]) {
        currentKeyIndex += 1;
        keyElement.textContent = keys[currentKeyIndex];

        showMessage('Правильно! Натисніть наступну клавішу.');
      } else {
        showMessage('Помилка! Натисніть правильну клавішу.', 'error');
      }

      if (currentKeyIndex === keys.length) {
        showMessage('Вітаємо! Ви завершили гру. Натисніть "Нова гра" для початку нової гри.', 'success');
        currentKeyIndex = 0;
      }
    }

    document.addEventListener('keydown', checkKeyPress);
    document.addEventListener('keypress', function (event) {
      event.preventDefault();
    });
    document.getElementById('newgame').addEventListener('click', function () {
      currentKeyIndex = 0;
      keyElement.textContent = keys[currentKeyIndex];
      showMessage('Початок нової гри. Натисніть правильну клавішу.');
    });
  });