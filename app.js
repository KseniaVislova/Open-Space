window.onload = function() {
  let password = document.querySelector('.input__text');
  let accept = document.querySelector('.input__submit');
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  const ranges = document.querySelectorAll('input[type=range]');
  const launch = document.querySelector('.input__launch');

  checkboxes.forEach(checkbox => {
    checkbox.disabled = true;
  })
  
  ranges.forEach(range => {
    range.disabled = true;
  })

  launch.disabled = true;

  accept.addEventListener('click', () => {
    if (password.value === 'TrustNo1') {
      password.disabled = true;
      accept.disabled = true;

      checkboxes.forEach(checkbox => {
        checkbox.disabled = false;
      })
  
      ranges.forEach(range => {
        range.disabled = false;
      })
    }
  });

  
  const moveRocket = () => {
    document.querySelector('.rocket').animate([
      {
        bottom: '30%',
        left: '37%',
      },
      { 
        bottom: '120%',
        left: '77%',
      }
  ], {
      duration: 2000,
      iterations: 1
  })
    
  }

  const makeLaunch = () => {
    let count = 0;
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        count += 1;
      }
    })
    ranges.forEach(range => {
      if (range.value == 100) {
        count += 1;
      }
    })

    if (count === (checkboxes.length + ranges.length)) {
      launch.disabled = false;
      moveRocket()
    }
  }

  checkboxes.forEach(checkbox => {
    checkbox.onchange = makeLaunch
  })

  ranges.forEach(range => {
    range.onchange = makeLaunch
  })

  launch.addEventListener('click', moveRocket);
}
