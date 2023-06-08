import styled from 'styled-components';

function Logo() {
  return (
    <LogoBlock>
      GOPASA
    </LogoBlock>
  );
}

const LogoBlock = styled.h1`
  display: inline-block;
  font-family: var(--font-poppins);
  font-size: 24px;
  font-weight: 700;
`;

export default Logo;