/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { Wrapper, TextLine } from './SidebarFooter.styles';

export const SidebarFooter: FunctionComponent = () => (
  <Wrapper>
    <TextLine>© Copyright, Damian Cyntler.</TextLine>
    <TextLine>All rights reserved.</TextLine>
  </Wrapper>
);
