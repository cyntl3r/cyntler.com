/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
export const screenFadeIn = (el: HTMLElement) => {
  window.addEventListener('load', () => {
    setTimeout(() => {
      el.classList.add('loaded');
    }, 500);
  });
};
