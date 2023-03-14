import { Box, Flex, Heading } from '@chakra-ui/react';
import { useGlobalState } from 'globalState';

export default function Home() {
  const { scene } = useGlobalState();
  return (
    <Flex
      bg={'black'}
      width={'100vw'}
      height={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Heading variant={'h2'} color={'white'}>
        Hello Fluur
      </Heading>
      <Heading variant={'h3'} color={'white'}>
        {scene}
      </Heading>
    </Flex>
  );
}
