import { colors } from '@/styles/base/colors';
import { Center, Cover } from '@/styles/utilities/mixins';
import styled from 'styled-components';

export const PreloaderContainer = styled.div`
  .preloader {
    ${Center};
    ${Cover};

    color: ${colors.PRIMARY_COLOR};
    text-align: center;
    z-index: z('preloader');
  }
`;
