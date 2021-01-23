/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import styled from 'styled-components';

interface ImageProps {
  size?: string;
}

export const Image = styled.img<ImageProps>`
  user-select: none;
`;
