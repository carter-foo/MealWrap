import styled from 'styled-components/macro';
import lodash from 'lodash';
import { useRecoilState, useRecoilValue } from 'recoil';
//scItemAmountChanging,
import { shoppingCartArr } from '@/store/store';
import { loginInfo } from '@/store/loginStore';
import axios from 'axios';

const Wrapper = styled.div``;
const Container = styled.div`
    display: flex;
    align-items: center;
`;

const SubButton = styled.div`
    width: 32px;
    height: 32px;
    background-color: blue;

    cursor: pointer;
`;
const AddButton = styled.div`
    width: 32px;
    height: 32px;
    background-color: red;

    cursor: pointer;
`;

const AddSub = ({ itemId, mId, quantity }) => {
    // const [scAmount, setSCAmount] = useRecoilState(scItemAmountChanging({ itemId, mId }));
    const [scArrNow, setSCArr] = useRecoilState(shoppingCartArr);
    const logInfo = useRecoilValue(loginInfo);

    const modifyQuantity = actionType => {
        let scArr = lodash.cloneDeep(scArrNow);

        let merchant = [];
        let itemNeedModify = {};
        for (let i = 0; i < scArr.length; i++) {
            if (scArr[i][0].merchantId === mId) {
                merchant = scArr[i];
                for (let i = 0; i < merchant.length; i++) {
                    const item = merchant[i];
                    if (item.id === itemId) {
                        itemNeedModify = item;
                    }
                }
            }
        }

        const oriSC = lodash.cloneDeep(scArrNow);
        switch (actionType) {
            case 'addOne':
                itemNeedModify.quantity += 1;

                console.log('logInfo.id', logInfo.id);
                console.log('itemNeedModify.id', itemNeedModify.id);
                console.log('itemNeedModify.quantity', itemNeedModify.quantity);

                break;
            case 'minusOne':
                if (itemNeedModify.quantity - 1 === 0) {
                    const deleteChoice = window.confirm(
                        'Do you want to delete this item from your Shopping Cart?',
                    );
                    if (deleteChoice) {
                        // console.log('merchant', merchant);
                        // console.log('item', itemNeedModify);
                        // console.log('\n');
                        axios
                            .post('/api/v1/shoppingcart/remove', {
                                userId: logInfo.id,
                                productId: itemNeedModify.id,
                            })
                            .then(res => {
                                console.log(res.data);
                                try {
                                    if (res.data.code === 400) {
                                        setSCArr(oriSC);
                                        throw new Error('Remove item failed');
                                    }
                                } catch (err) {
                                    console.error(err);
                                }
                            })
                            .catch(err => {
                                console.error(err);
                            });

                        for (const [index, ele] of merchant.entries()) {
                            console.log('ele', ele);
                            ele.id === itemNeedModify.id && merchant.splice(index, 1);
                        }

                        const newSCArr = scArr.filter((merchantEle) => {
                            return JSON.stringify(merchantEle) !== '[]';
                        })

                        console.log(newSCArr);

                        setSCArr(newSCArr);
                        
                        return;
                    } else {
                        return;
                    }
                }
                itemNeedModify.quantity -= 1;
                // console.log('logInfo.id', logInfo.id);
                // console.log('itemNeedModify.id', itemNeedModify.id);
                // console.log('itemNeedModify.quantity', itemNeedModify.quantity);
                break;
            default:
                return;
        }

        axios
            .post('/api/v1/shoppingcart/update', {
                userId: logInfo.id,
                productId: itemNeedModify.id,
                quantity: itemNeedModify.quantity,
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

        setSCArr(scArr);
    };

    return (
        <Wrapper>
            <Container>
                <SubButton
                    onClick={() => {
                        // console.log(mIndex);
                        modifyQuantity('minusOne');
                    }}
                />
                {/* {infoArr[index].amount} */}
                <div className="amount">{quantity}</div>
                <AddButton
                    onClick={() => {
                        // console.log(mIndex);
                        modifyQuantity('addOne');
                    }}
                />
            </Container>
        </Wrapper>
    );
};

export default AddSub;
