/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent, ReactNode } from 'react';
import { PaddingWrapper } from '../Layout/Layout.styles';
import { Wrapper } from './Content.styles';

export interface ContentProps {
  children: ReactNode;
}

export const Content: FunctionComponent<ContentProps> = ({ children }) => (
  <Wrapper>
    <PaddingWrapper>{children}</PaddingWrapper>
  </Wrapper>
);
