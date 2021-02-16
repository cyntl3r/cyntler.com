/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import styled from 'styled-components';
import media from 'styled-media-query';
import { Logo } from '../../Logo/Logo';

export const OpenAsideButton = styled.button`
  background: transparent;
  border: 0;
  outline: 0;
  margin: 0;
  padding: 0;
  padding-right: 0.5rem;
  color: ${({ theme }) => theme?.colors?.black};
  cursor: pointer;
`;

export const StyledLogomark = styled(Logo)`
  display: block;
  width: 2.4rem;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem 0 0 1rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme?.colors?.white};

  ${media.greaterThan('medium')`
    display: none;
  `}
`;
