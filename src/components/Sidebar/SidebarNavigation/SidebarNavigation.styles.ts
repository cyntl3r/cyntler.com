/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-size: 1.7rem;
  display: inline-block;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.nav`
  margin: 2.5rem 0 0 0;
  display: flex;
  flex-direction: column;
`;
