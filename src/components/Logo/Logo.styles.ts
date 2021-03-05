/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import styled from 'styled-components';
import { LogoImageProps } from './Logo.types';

export const LogoImage = styled.img<LogoImageProps>`
  user-select: none;
  width: ${({ size }) => size}rem;
  height: auto;
`;
