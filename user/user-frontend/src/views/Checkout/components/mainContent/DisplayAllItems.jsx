import styled from 'styled-components/macro';
import lodash from 'lodash'

const Wrapper = styled.div``;
const Container = styled.div`
    padding: 0 10px;
    > .m-title {
        padding: 10px 0;
        font-size: 18px;
        font-weight: 600;
    }
    > .items {
        margin-top: 15px;
        .item {
            border: 2px solid #c4c4c4;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            margin-bottom: 10px;
            padding: 20px 20px;

            .itemName {
                font-weight: 600;
            }

            .q_p {
                display: flex;

                .itemQuantity {
                    margin-right: 40px;
                }
            }
        }
    }
`;

const DisplayAllItems = ({ items, mTitle }) => {
    return (
        <Wrapper>
            <Container>
                <div className="m-title">{!!mTitle ? mTitle : `Lalala`}</div>
                <div className="items">
                    {items.map((item, index) => {
                        return (
                            <div className="item" key={index}>
                                <div className="itemName">{item.name}</div>
                                <div className="q_p">
                                    <div className="itemQuantity">x{item.quantity}</div>
                                    <div className="itemPrice">$ {lodash.floor(item.quantity*item.price,2)}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </Wrapper>
    );
};

export default DisplayAllItems;
