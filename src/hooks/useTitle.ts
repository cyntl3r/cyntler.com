/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { useEffect, useRef } from 'react';

export const useTitle = (title: string) => {
  const previousTitle = useRef(document.title);

  useEffect(() => {
    previousTitle.current = document.title;
    document.title = `${process.env.APP_TITLE}, ${title}`;
    return () => {
      document.title = previousTitle.current;
    };
  });
};
