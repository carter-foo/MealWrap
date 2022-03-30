import Drawer from '@/components/general/Drawer';
import styled from 'styled-components/macro';
import { ReactComponent as DiscountImg } from '@/assets/mockimages/Card.svg';
import MerchantBlock from './components/MerchantBlock';
import { shoppingCartArr } from '@/store/store';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { loginInfo } from '@/store/loginStore';
import axios from 'axios';

const Wrapper = styled.div``;
const Container = styled.div`
    .shoppingCartElements {
        width: 100%;
        padding-bottom: 50px;
        margin-right: 30px;
    }

    > .discountimg {
        width: 100%;
        svg {
            width: 100%;
        }
    }
`;

const ShoppingCart = ({ className, onClose, visible, children }) => {
    const [scData, setSCData] = useRecoilState(shoppingCartArr);
    // console.log('回显scData',scData);

    const logInfo = useRecoilValue(loginInfo);

    useEffect(() => {
        if (JSON.stringify(logInfo) !== '{}') {
            const userId = logInfo.id;
            // console.log(userId);
            const request = async () => {
                try {
                    const res = await axios.get('/api/v1/shoppingcart/id', {
                        params: {
                            id:userId
                        },
                    });

                    const dataArr = res.data.data;
                    // console.log('dataArr', dataArr);
                    dataArr.sort((a, b) => {
                        return a.merchantId - b.merchantId;
                    });
                    const newdataArr = [];
                    for (let i = 0, mid = -1; i < dataArr.length; i++) {
                        if (dataArr[i].merchantId !== mid) {
                            newdataArr.push([dataArr[i]]);
                            mid = dataArr[i].merchantId;
                        } else {
                            newdataArr[newdataArr.length - 1].push(dataArr[i]);
                        }
                    }
                    // console.log('scdata', newdataArr);
                    setSCData(newdataArr);
                } catch (error) {
                    console.error(error);
                }
            };
            request();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper className={className}>
            <Container>
                <Drawer onClose={onClose} visible={visible} className="drawer">
                    <div className="shoppingCartElements">
                        <div className="discountimg">
                            <DiscountImg />
                        </div>
                        <div className="elementContainer">
                            {/* {console.log('scData', scData)} */}
                            {scData.map((items, index) => {
                                // console.log(items);
                                return (
                                    <MerchantBlock
                                        items={items}
                                        key={index}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </Drawer>
            </Container>
        </Wrapper>
    );
};

export default ShoppingCart;
