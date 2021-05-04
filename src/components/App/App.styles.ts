/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import styled from 'styled-components';
import { mediaScreenMin } from '../../utils/mediaScreen';

export const AppPageContainer = styled.div`
  width: 100%;
  padding: 0 1rem;

  ${mediaScreenMin('medium')} {
    min-height: 500px;
    padding: 50px 120px 50px 350px;
  }
`;
