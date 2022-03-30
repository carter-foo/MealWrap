import styled from 'styled-components/macro';
import SeparatorBarDashed from './SeparatorBarDashed';
import lodash from 'lodash'


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

const TotalPrices = ({subTotalPrice,tipPercent,deliveryFee, tax}) => {


    // useEffect(() => {
    //     setDeliveryFee(lodash.floor(totalPrice*0.04,2));
    // },[totalPrice])

    return (
        <Wrapper>
            <Container>
                <PriceBlock>
                    <div className="title">Shipping Cost</div>
                    <div className="prices">${deliveryFee}</div>
                </PriceBlock>
                <PriceBlock>
                    <div className="title">Tip</div>
                    <div className="prices">${lodash.floor(subTotalPrice*tipPercent,2)}</div>
                </PriceBlock>
                <PriceBlock>
                    <div className="title">Tax</div>
                    <div className="prices">${tax}</div>
                </PriceBlock>
                <PriceBlock>
                    <div className="title">Sub total</div>
                    <div className="prices">${lodash.floor(subTotalPrice,2)}</div>
                </PriceBlock>
                <StyledSeparatorBarDashed />
                <PriceBlock>
                    <div className="total_title">Total</div>
                    {/* {console.log(deliveryFee,tax,lodash.floor(subTotalPrice*tipPercent,2),subTotalPrice)} */}
                    <div className="total_prices">${lodash.floor(deliveryFee+tax+lodash.floor(subTotalPrice*tipPercent,2)+subTotalPrice,2)}</div>
                </PriceBlock>
            </Container>
        </Wrapper>
    );
};

export default TotalPrices;
