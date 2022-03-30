import styled from 'styled-components/macro';
import seafoodImg from '@/assets/mockimages/image6.png';
import AddSub from './AddSub';
// import { merchantContext } from './MerchantBlock';
// import { useContext } from 'react';

const Wrapper = styled.div``;
const Container = styled.div`
    width: 100%;
    height: 92px;
    /* background-color: skyblue; */
    border: 1px #ebebeb solid;

    display: flex;
    align-items: center;
    padding: 12px 15px;

    > .item-img {
        width: 72px;
        height: 72px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-grow: 0;
        flex-shrink: 0;
        img {
            width: 100%;
        }
    }

    > .info {
        width: 194px;
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title {
            font-weight: 600;
            margin-bottom: 8px;
        }
        .price-amount {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .price {
                font-weight: 600;
            }
        }
    }
`;

const ItemBlock = ({ item }) => {
    // const { infoArr } = useContext(merchantContext);
    return (
        <Wrapper>
            <Container>
                <div className="item-img">
                    <img src={seafoodImg} alt="seafoodImg" />
                </div>
                <div className="info">
                    <div className="title">{item.name}</div>
                    <div className="price-amount">
                        <div className="price">{item.price}</div>
                        <div className="amount">
                            <AddSub
                                itemId={item.id}
                                mId={item.merchantId}
                                quantity={item.quantity}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </Wrapper>
    );
};

export default ItemBlock;
