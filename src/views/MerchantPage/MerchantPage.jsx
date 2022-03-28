import NavBar from '@/components/navbar/NavBar';
import styled from 'styled-components/macro';
import MainContent from './components/MainContent';

const Wrapper = styled.div`
    width: 100%;
`;

const Container = styled.div``;

const MerchantPage = props => {
    return (
        <Wrapper>
            <Container>
                <NavBar />
                <MainContent></MainContent>
            </Container>
        </Wrapper>
    );
};

export default MerchantPage;
