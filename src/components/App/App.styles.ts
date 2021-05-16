/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import styled from 'styled-components';
import { mediaScreenMin } from '../../utils/mediaScreen';

export const AppPageContainer = styled.div`
  width: 100%;
  padding: 0 1.6rem;

  ${mediaScreenMin('medium')} {
    min-height: 50rem;
    padding: 5rem 12rem 5rem 35rem;
  }
`;
