let items = document.querySelectorAll('[data-item]');
let description = document.querySelectorAll('[data-description]');
let title = document.querySelectorAll('[data-title]');
let descriptions = [
  'Печень утки разварная с артишоками.',
  'Головы щучьи с чесноком да свежайшая сёмгушка.',
  'Филе из цыплят с трюфелями в бульоне.'
];

function getSelectCard() {
  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains('disabled')) {
      items[i].classList.remove('selected');
    } else {
      const selectItem = items[i]; selectItem.
          addEventListener('click', (evt) => {
            evt.preventDefault();
            let toggle = selectItem.classList.toggle('selected');
            if (toggle) {
              description[i].innerHTML = `${descriptions[i]}`;
            } else {
              description[i].innerHTML = '<p data-description>Чего сидишь? Порадуй котэ, <span>купи.</span></p>';
              title[i].innerHTML = 'Сказочное заморское яство';
              title[i].style.color = '#666666';
            }
            return toggle;
          });
    }
  }
}

function hoverCard() {
  for (let i = 0; i < items.length; i++) {
    items[i].onmouseover = items[i].onmouseout = handler;
  }
}

function handler(evt) {
  if (evt.type === 'mouseover') {
    for (let i = 0; i < items.length; i++) {
      if (items[i].classList.contains('selected')) {
        title[i].innerHTML = 'Котэ не одобряет?';
        title[i].style.color = '#e52e7a';
      }
    }
  }

  if (evt.type === 'mouseout') {
    for (let i = 0; i < items.length; i++) {
      if (items[i].classList.contains('selected')) {
        title[i].innerHTML = 'Сказочное заморское яство';
        title[i].style.color = '#666666';
      }
    }
  }
}

export {getSelectCard, hoverCard};
