import { defaultTheme } from '@/styles/base/theme';
import { Center } from '@/styles/utilities/mixins';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 0 2rem;
`;

export const MainContainer = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }
  .title a {
    color: #0070f3;
    text-decoration: none;
  }

  .title a:hover,
  .title a:focus,
  .title a:active {
    text-decoration: underline;
  }

  .title {
    text-align: center;
  }
`;
