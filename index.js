
function load() {
  const screen = document.getElementById('screen');
  const keys = document.querySelectorAll('#calculator .keys span');
  const clear = document.getElementById('clear');

  keys.forEach(function(key) {
    key.addEventListener('click', function(e) {
      const btnValue = this.textContent;
      const currentValue = screen.textContent;

      if (this.id === 'clear') {
        screen.textContent = '';
      } else if (this.classList.contains('eval')) {
        try {
          
          const result = eval(currentValue.replace(/x/g, '*').replace(/÷/g, '/'));
          screen.textContent = result;
        } catch (error) {
          screen.textContent = 'Error';
        }
      } else {
        screen.textContent += btnValue;
      }
    });
  });

  clear.addEventListener('click', function () {
    screen.textContent = '';
  });
}

