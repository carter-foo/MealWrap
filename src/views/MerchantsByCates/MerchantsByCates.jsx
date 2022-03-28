import styled from 'styled-components/macro';
import NavBar from '@/components/navbar/NavBar';
import MainContent from './components/MainContent';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div``;
const Container = styled.div``;

const MerchantsByCates = ({ className }) => {
    const { state } = useLocation();
    return (
        <Wrapper className={className}>
            <Container>
                <NavBar />
                <MainContent tagName={!!state ? state.tagName : void(0)} />
            </Container>
        </Wrapper>
    );
};

export default MerchantsByCates;
