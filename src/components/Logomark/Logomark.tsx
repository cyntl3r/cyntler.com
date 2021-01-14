/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Image } from './Logomark.styles';

export const Logomark: FunctionComponent = () => (
  <Link to="/">
    <Image src="/logo.svg" alt="Damian Cyntler" />
  </Link>
);
