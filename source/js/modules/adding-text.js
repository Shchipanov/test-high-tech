const openParagraph = document.querySelectorAll('[data-features="paragraph"]');

const paragraphButton = document.querySelectorAll('[data-features="button"]');

function addText() {
  for (let i = 0; i < openParagraph.length; i++) {

    if (!paragraphButton[i]) {
      openParagraph[i - 1].classList.add('features__paragraph--open');
      return;
    } else {
      paragraphButton[i].addEventListener('click', function () {
        if (!openParagraph[i]) {
          return;
        } else {
          if (openParagraph[i].classList.contains('features__paragraph')) {
            openParagraph[i].classList.remove('features__paragraph');
            openParagraph[i].classList.add('features__paragraph--open');
            paragraphButton[i].classList.add('features__button--active');
          } else {
            openParagraph[i].classList.remove('features__paragraph--open');
            openParagraph[i].classList.add('features__paragraph');
            paragraphButton[i].classList.remove('features__button--active');
          }
        }
      });
    }
  }


}

export {addText};
