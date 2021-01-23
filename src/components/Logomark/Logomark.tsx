/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { Image } from './Logomark.styles';

export interface LogomarkProps {
  className?: string;
}

export const Logomark: FunctionComponent<LogomarkProps> = ({ className }) => (
  <Image src="/logo.svg" alt="Damian Cyntler" className={className} />
);
