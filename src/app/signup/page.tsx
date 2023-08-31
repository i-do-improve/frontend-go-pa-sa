'use client';

import styled from 'styled-components';
import { Header } from '../components';
import { Player } from '@lottiefiles/react-lottie-player';
import NextLink from 'next/link';

function SignupPage() {
  return (
    <div>
      <Header enabledLogo={false} enabledBack />
      <Title>지금 가입하면 랜덤 고양이 사진 한장 더!</Title>
      <Player src="/signupPopupCat.json" speed={1} loop autoplay style={{ width: 270, height: 304 }} />
      <Actions>
        <Anchor href="/signup/join">이메일로 회원가입</Anchor>
        |
        <Anchor href="/signup/login">이메일로 로그인</Anchor>
      </Actions>
    </div>
  );
}

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-top: 60px; 
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaa;
`;

const Anchor = styled(NextLink)`
  padding: 0 12px;
  color: inherit;
`;

export default SignupPage;
