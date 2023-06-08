import styled, { css } from 'styled-components';

interface IconProps {
  children: React.ReactNode;
  size?: number;
  color?: string;
}

function Icon({ size = 24, color, children }: IconProps) {
  return (
    <IconBlock color={color}>
      <Svg
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        {children}
        </Svg>
    </IconBlock>
  );
}

type IconBlockType = Pick<IconProps, 'color'>

const IconBlock = styled.div<IconBlockType>`
  display: inline-block;
  
  ${({ color }) => color && css`
    color: ${color};
  `}
`;

const Svg = styled.svg`
  display: inline-block;
`;

export default Icon;