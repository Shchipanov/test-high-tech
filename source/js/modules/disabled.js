let description = document.querySelectorAll('[data-description]');
let items = document.querySelectorAll('[data-item]');

function becomeDisabled() {
  let disabledDescriptions = ['фуа-гра', 'рыбой', 'курой'];

  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains('disabled')) {
      description[
          i
      ].innerHTML = `Печалька, с ${disabledDescriptions[i]} закончился.`;
    }
  }
}

export {becomeDisabled};
