import styled from 'styled-components';
import { HomeIcon, CommandIcon } from '../Icon';
import NextLink from 'next/link';

function NavigationBar() {
  return (
    <Ul>
      <Link href="/">
        <Li>
          <HomeIcon />
          홈
        </Li>
      </Link>
      <Link href="/categories">
        <Li>
          <CommandIcon />
          카테고리
        </Li>
      </Link>
      <h1>검색</h1>
      <h1>로그인/가입</h1>
    </Ul>
  );
}

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: none;
  margin: none;
`;

const Link = styled(NextLink)`
  text-decoration: none;
  color: inherit
`;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 11px;
`;

export default NavigationBar;