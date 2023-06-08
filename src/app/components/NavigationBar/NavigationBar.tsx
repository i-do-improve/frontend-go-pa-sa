import styled from 'styled-components';
import { HomeIcon, CommandIcon, SearchIcon, UserIcon } from '../Icon';
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
      <Link href="/search">
        <Li>
          <SearchIcon />
          검색
        </Li>
      </Link>
      <Link href="/signup">
        <Li>
          <UserIcon />
          로그인/가입
        </Li>
      </Link>
    </Ul>
  );
}

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: none;
  margin: none;
  height:78px;
  padding: 0 35px;
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
  font-weight: 700;
`;

export default NavigationBar;