import {video} from '../../media/video';

export const initVideo = function () {
  const player = document.querySelector('[data-video-player]');
  const link = document.querySelector('[data-video-btn]');
  const boxVideo = document.querySelector('[data-video]');

  if (!link) {
    return;
  } else {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (boxVideo) {
        boxVideo.classList.add('preview__video--active');

        // eslint-disable-next-line no-new, no-undef
        new YT.Player(player, {
          videoId: 'KcjJ3x5a6Tk',
          events: {
            onReady: (e) => e.target.playVideo(),
          },
          video,
        });
        evt.stopPropagation();
      }
    });
  }
};
