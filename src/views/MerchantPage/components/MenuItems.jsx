import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components/macro';
import { shoppingCartArr } from '@/store/store';
import lodash from 'lodash';
import axios from 'axios';
import { loginInfo } from '@/store/loginStore';

const Wrapper = styled.div`
    width: 100%;

    /* margin-bottom: 10px; */
`;

const Container = styled.div`
    width: 100%;
    height: 140px;

    background-color: #fff;
    border-radius: 15px;

    border: 1px solid #ebebeb;
    overflow: hidden;

    padding: 0 35px;

    position: relative;
    > .item {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .item_name {
            font-size: 17px;
            margin-bottom: 15px;
            font-weight: 600;
        }
        .item_price {
            font-size: 15px;
            color: #767676;
        }

        .item_img {
            width: 140px;
            height: 100%;
            position: absolute;
            right: 0;
            z-index: 15;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .mask {
            /* display: none; */
            opacity: 0;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            /* right: 0; */
            width: 100%;
            /* height: 100%; */
            background-color: rgba(0, 0, 0, 0.3);

            z-index: 10;
            .add-btn-container {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                .add-btn {
                    width: 120px;
                    height: 50px;
                    display: inline-block;
                    text-align: center;
                    padding: 15px 0;
                    border-radius: 5px;
                    background-color: #f43f5e;
                    color: #fff;
                    font-size: 15px;
                    cursor: pointer;
                    user-select: none;
                }
            }
        }
    }

    > .item:hover {
        .mask {
            /* display: block; */
            opacity: 1;
        }
    }
`;

const MenuItems = ({
    className,
    id,
    name = 'Dasani',
    price = 1.99,
    imgSrc,
    itemId,
    mId,
    item,
}) => {
    const logInfo = useRecoilValue(loginInfo);

    const [scArrNow, setSCArr] = useRecoilState(shoppingCartArr);

    const insertIntoCart = () => {
        let scArr = lodash.cloneDeep(scArrNow);
        let oriSC = lodash.cloneDeep(scArrNow);

        const insertRequest = () => {
            axios
                .post('/api/v1/shoppingcart/insert', {
                    userId: logInfo.id,
                    productId: itemId,
                })
                .then(res => {
                    console.log(res.data);
                    try {
                        if (res.data.code === 400) {
                            setSCArr(oriSC);
                            throw new Error('Insert item failed');
                        }
                    } catch (err) {
                        console.error(err);
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        };

        const updateRequest = quantity => {
            axios
                .post('/api/v1/shoppingcart/update', {
                    userId: logInfo.id,
                    productId: itemId,
                    quantity,
                })
                .then(res => {
                    console.log('updated', res.data);
                    try {
                        if (res.data.code === 400) {
                            setSCArr(oriSC);
                            throw new Error('Modify quantity failed');
                        }
                    } catch (err) {
                        console.error(err);
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        };

        console.log("mid",mId);

        const theMerchant = scArr.filter(merchant => {
            return merchant[0].merchantId === mId;
        });

        console.log('theMerchant',theMerchant);
        
        if (JSON.stringify(theMerchant) === '[]') {
            insertRequest();
            console.log(item);
            scArr.unshift([{...item,quantity:1}]);
        } else {
            const existMerchant = theMerchant[0];
            const itemArrWithEqualID = existMerchant.filter(itemEle => {
                return itemEle.id === itemId;
            });
            if (JSON.stringify(itemArrWithEqualID) === '[]') {
                insertRequest();
                existMerchant.push({...item,quantity:1});
            } else {
                itemArrWithEqualID[0].quantity += 1;
                updateRequest(itemArrWithEqualID[0].quantity);
            }
        }
        setSCArr(scArr);
    };

    return (
        <Wrapper className={className}>
            <Container>
                <div className="item">
                    {/* {console.log(name)} */}
                    {/* {console.log(price)} */}
                    <div className="item_name">{name}</div>
                    <div className="item_price">{'$ ' + price}</div>
                    <div className="item_img">
                        <img src={imgSrc} alt="item-img" />
                    </div>
                    <div className="mask">
                        <div className="add-btn-container" onClick={() => insertIntoCart()}>
                            <div className="add-btn">Add to Cart</div>
                        </div>
                    </div>
                </div>
            </Container>
        </Wrapper>
    );
};

export default MenuItems;
