// import styled from "styled-components/macro";
import styled from 'styled-components';
import NBLeft from './NBLeft';
import NBRight from './NBRight';

const Wrapper = styled.div``;

const Container = styled.div`
    height: 68px;
    background-color: #fff;

    padding: 0 20px;

    display: flex;
    justify-content: space-between;
`;

const NavBar = props => {
    return (
        <Wrapper>
            <Container>
                <NBLeft />
                <NBRight />
            </Container>
        </Wrapper>
    );
};

export default NavBar;
