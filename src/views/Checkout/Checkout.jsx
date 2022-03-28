import styled from 'styled-components/macro';
import NavBar from './components/navbar/NavBar';
import CheckoutBlock from './components/mainContent/ChectoutBlock';

const Wrapper = styled.div`
    height: 100%;
    /* background-color: red; */
`;

const Container = styled.div`
    height: 50px;
    /* background-color:greenyellow; */

    > div {
        margin-bottom: 20px;

        &:last-child {
            margin: 0;
        }
    }
`;

const Checkout = props => {
    return (
        <>
            <Wrapper>
                <Container>
                    <NavBar />
                    <CheckoutBlock />
                </Container>
            </Wrapper>
        </>
    );
};

export default Checkout;
