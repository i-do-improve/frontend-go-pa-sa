import styled from 'styled-components';
import { Logo } from '..';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { BackFillIcon } from '../Icon';

interface HeaderProps {
  enabledLogo?: boolean;
  enabledBack?: boolean;
}

function Header({ enabledLogo = true, enabledBack = false }: HeaderProps) {
  const router = useRouter();

  return (
    <HeaderBlock>
      {enabledLogo && (
        <Link href="/">
          <Logo />
        </Link>
      )}
      {enabledBack && (
        <BackButton onClick={() => router.back()}>
          <BackFillIcon />
        </BackButton>
      )}
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

const Link = styled(NextLink)`
  display: flex;
  align-items: center;
`;

const BackButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export default Header;