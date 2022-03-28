import styled from 'styled-components/macro';

const Wrapper = styled.div``;

const Container = styled.div`
    > .main_title {
        font-size: 17px;
        font-weight: 600;

        margin-bottom: 16px;
    }

    > .main_selectbar {
        border-radius: 16px;
        border: 1px solid #e9e9ea;
        height: 80px;
    }
`;

const PaymentMethod = props => {
    return (
        <Wrapper>
            <Container>
                <div className="main_title">Payment Method</div>
                <div className="main_selectbar"></div>
            </Container>
        </Wrapper>
    );
};

export default PaymentMethod;
