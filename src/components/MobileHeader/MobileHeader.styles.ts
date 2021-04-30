/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import styled from 'styled-components';
import { mediaScreenMin } from '../../utils/mediaScreen';

export const MobileHeaderContainer = styled.header`
  padding: 1rem;

  ${mediaScreenMin('medium')} {
    display: none;
  }
`;
