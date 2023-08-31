'use client';

import styled from 'styled-components';
import { SelectCats } from './sections';
import { Header } from './components';

export default function Home() {
  return (
    <Main>
      <Header />
      <SelectCatsWrapper>
        <SelectCats />
      </SelectCatsWrapper>
    </Main>
  );
}

const Main = styled.div`
  font-size: 50px;
`;

const SelectCatsWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 35px;
`;