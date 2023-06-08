import styled from 'styled-components';
import NextImage from 'next/image';

interface IconCatProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  hover?: boolean;
  color?: string;
}

function IconCat({ onMouseEnter, onMouseLeave, color, hover = false }: IconCatProps) {
  return (
    <IconCatBlock
      color={color}
      onMouseEnter={() => onMouseEnter?.()}
      onMouseLeave={() => onMouseLeave?.()}
    >
      <CatImage src="/ttokangPixel.png" width={86} height={86} alt="또깡고양이" hover={hover} />
    </IconCatBlock>
  );
}

type IconCatBlockType = Pick<IconCatProps, 'color'>;

const IconCatBlock = styled.div<IconCatBlockType>`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 12px;
  background-color: ${({ color }) => color};
  overflow: hidden;
`;

const CatImage = styled(NextImage) <{ hover: boolean }>`
  position: absolute;
  bottom: -41px;
  transition: transform 300ms;
  transform: ${({ hover }) => hover ? 'translateY(-20px)' : 'translateY(0)'};
`;

export default IconCat;