/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

interface WrapperProps {
  isActive: boolean;
}

export const Wrapper = styled.aside<WrapperProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: -100vw;
  top: 0;
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme?.colors?.white};
  transition: left 0.5s ease;

  ${({ isActive }) =>
    isActive &&
    css`
      left: 0;
    `}

  ${media.greaterThan('medium')`
    width: 320px;
    left: 0;
  `}
`;
