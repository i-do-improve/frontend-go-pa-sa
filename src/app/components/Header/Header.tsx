import styled from 'styled-components';
import { Logo } from '..';
import NextLink from 'next/link';

function Header() {
  return (
    <HeaderBlock>
      <NextLink href="/">
        <Logo />
      </NextLink>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 0 35px;
`;

export default Header;