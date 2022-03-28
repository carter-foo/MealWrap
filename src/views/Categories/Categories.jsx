import styled from 'styled-components/macro';
import NavBar from '@/components/navbar/NavBar';
import MainContent from './components/MainContent';

const Wrapper = styled.div`
    height: 100%;
`;

const Container = styled.div`
    height: 100%;
`;

const Categories = props => {
    return (
        <Wrapper>
            <Container>
                <NavBar />
                <MainContent />
            </Container>
        </Wrapper>
    );
};

export default Categories;
