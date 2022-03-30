import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import lodash from 'lodash';

const Wrapper = styled.div`
    margin-top: 12px;
`;
const Container = styled.div`
    width: 100%;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    right: 0;

    > .order-total {
        display: flex;
        justify-content: space-between;
        padding: 5px;

        .prompt {
            margin-right: 11px;

            font-size: 16px;
            font-weight: 600;
        }
    }

    > .checkoutBtn {
        display: inline-block;
        margin-top: 8px;
        padding: 10px;
        border-radius: 5px;

        background-color: #f43f5e;

        color: #fff;
        font-size: 15px;

        cursor: pointer;
    }
`;

const TotalBlock = ({ merchantName, totalPrice, mId, items, mTitle }) => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <Container>
                <div className="order-total">
                    <div className="prompt">Order Total</div>
                    <div className="title">$ {lodash.floor(totalPrice, 2)}</div>
                </div>
                <div
                    className="checkoutBtn"
                    onClick={() =>
                        navigate('/checkout', {
                            state: { items, mId, totalPrice, mTitle },
                        })
                    }
                >
                    Go To Checkout
                </div>
            </Container>
        </Wrapper>
    );
};

export default TotalBlock;
