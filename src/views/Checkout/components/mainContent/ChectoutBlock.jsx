import styled from 'styled-components/macro';
import SeparatorBar from './SeparatorBar';
import AddressModify from './AddressModify';
import TotalPrices from './TotalPrices';
import AddPromo from './AddPromo';
import PaymentMethod from './PaymentMethod';

const Wrapper = styled.div`
`;
const Container = styled.div`
    margin: 0 auto;
    max-width: 920px;
    background-color: #fff;
    padding: 20px;

    > div {
        margin-bottom: 16px;

        &:last-child {
            margin: 0;
        }
    }

    > .title {
        display: inline-block;
        width: 100%;
        padding: 10px 0;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
    }
    .placeOrderBtn {
        display: inline-block;
        width: 100%;
        /* height: 56px; */
        border-radius: 1000px;

        text-align: center;
        padding: 20px;
        background-color: #f43f5e;

        color: #fff;
        font-size: 16px;
    }
`;
const CheckoutBlock = props => {
    return (
        <Wrapper>
            <Container>
                <div className="title">Checkout</div>
                <SeparatorBar />
                <AddressModify />
                <SeparatorBar />
                <PaymentMethod />
                <SeparatorBar />
                <TotalPrices />
                <SeparatorBar />
                <AddPromo />
                <SeparatorBar />
                <div className="placeOrderBtn">Place Order</div>
            </Container>
        </Wrapper>
    );
};

export default CheckoutBlock;
