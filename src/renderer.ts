/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { ReactElement } from 'react';
import { hydrate, render } from 'react-dom';

console.log(1);

export const renderer = (element: ReactElement, container: Element) => {
  if (container.hasChildNodes()) {
    hydrate(element, container);
  } else {
    render(element, container);
  }
};
