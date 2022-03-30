import styled from 'styled-components/macro';
import SeparatorBarDashed from './SeparatorBarDashed';

const Wrapper = styled.div`
    height: 100%;
`;

const Container = styled.div``;

const PriceBlock = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 8px 0;

    > .title {
        color: #797d81;
        font-size: 14px;
    }

    > .prices {
        font-size: 14px;
        font-weight: 600;
    }

    > .total_title {
        color: #797d81;
        font-size: 16px;
    }

    > .total_prices {
        font-size: 16px;
        font-weight: 600;
    }
`;

const StyledSeparatorBarDashed = styled(SeparatorBarDashed)`
    margin: 16px 0;
`;

const TotalPrices = props => {
    return (
        <Wrapper>
            <Container>
                <PriceBlock>
                    <div className="title">Shipping Cost</div>
                    <div className="prices">$5.31</div>
                </PriceBlock>
                <PriceBlock>
                    <div className="title">Sub total</div>
                    <div className="prices">$16.00</div>
                </PriceBlock>
                <StyledSeparatorBarDashed />
                <PriceBlock>
                    <div className="total_title">Total</div>
                    <div className="total_prices">$5.31</div>
                </PriceBlock>
            </Container>
        </Wrapper>
    );
};

export default TotalPrices;
