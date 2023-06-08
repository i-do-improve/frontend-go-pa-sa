'use client';

import styled from 'styled-components';
import { SelectCats } from './sections';

export default function Home() {
  return (
    <Main>
      <SelectCatsWrapper>
        <SelectCats />
      </SelectCatsWrapper>
    </Main>
  );
}

const Main = styled.main`
  font-size: 50px;
`;

const SelectCatsWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 35px;
`;
