/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import styled from 'styled-components';
import { mediaScreenMin } from '../../utils/mediaScreen';

export const SidebarContainer = styled.aside`
  display: none;

  ${mediaScreenMin('medium')} {
    position: fixed;
    left: 0;
    top: 0;
    width: 20%;
    min-width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding-left: 40px;
  }
`;
