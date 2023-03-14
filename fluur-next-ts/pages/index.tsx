import Meta from '@components/Layout/Meta';
import type { NextPage } from 'next';
import styled from 'styled-components';
export interface HomePageProps extends React.ComponentPropsWithoutRef<'div'> {}

const Home: NextPage = () => {
    return (
        <Container
        // style={{
        //     background: 'black',
        //     width: '100vw',
        //     height: '100vh',
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        // }}
        >
            <Meta />
            <h1 style={{ color: 'white', fontSize: '3rem' }}>Hello Fluur</h1>
        </Container>
    );
};

const Container = styled.div`
    background: black;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export default Home;
