import { IconCat } from '@/app/components';
import { useState } from 'react';
import styled from 'styled-components';

function SelectCats() {
  const [hoverState, setHoverState] = useState('');
  const handleIconHover = (color: string) => {
    setHoverState(color);
  };
  return (
    <SelectCatsBlock>
      {
        ICON_CATS.map(({ color }) => (
          <IconCat
            color={color}
            key={color}
            onMouseEnter={() => handleIconHover(color)}
            onMouseLeave={() => handleIconHover('')}
            hover={hoverState === color}
          />
        ))
      }
    </SelectCatsBlock>
  );
}

const ICON_CATS = [
  {
    color: '#FFC108',
  },
  {
    color: '#635BFF',
  },
  {
    color: '#0079D3',
  },
  {
    color: '#1ED760',
  },
  {
    color: '#FF5700',
  },
  {
    color: '#F2F3F7',
  },
];

const SelectCatsBlock = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export default SelectCats;