/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent, ReactNode } from 'react';
import { Wrapper } from './Content.styles';

export interface ContentProps {
  children: ReactNode;
}

export const Content: FunctionComponent<ContentProps> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);
