import NavBar from '@/components/navbar/NavBar';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import MainContent from './components/MainContent';

const Wrapper = styled.div`
    width: 100%;
`;

const Container = styled.div``;

const MerchantPage = () => {
    const { state } = useLocation();

    return (
        <Wrapper>
            <Container>
                <NavBar />
                <MainContent mid={state.mid}></MainContent>
            </Container>
        </Wrapper>
    );
};

export default MerchantPage;
