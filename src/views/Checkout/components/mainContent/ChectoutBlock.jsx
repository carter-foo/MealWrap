import styled from 'styled-components/macro';
import SeparatorBar from './SeparatorBar';
import AddressModify from './AddressModify';
import TotalPrices from './TotalPrices';
import DisplayAllItems from './DisplayAllItems';
import Comment from './Comment';
import PaymentMethod from './PaymentMethod';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { loginInfo } from '@/store/loginStore';
import { userAddress, shoppingCartArr } from '@/store/store';
import lodash from 'lodash';
import Tips from './Tips';
import axios from 'axios';

const Wrapper = styled.div``;
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

        cursor: pointer;
        user-select: none;
    }
`;

// eslint-disable-next-line no-extend-native
Date.prototype.format = function (format) {
    var o = {
        'M+': this.getMonth() + 1, //month
        'd+': this.getDate(), //day
        'h+': this.getHours(), //hour
        'm+': this.getMinutes(), //minute
        's+': this.getSeconds(), //second
        'q+': Math.floor((this.getMonth() + 3) / 3), //quarter
        S: this.getMilliseconds(), //millisecond
    };
    if (/(y+)/.test(format))
        format = format.replace(
            RegExp.$1,
            (this.getFullYear() + '').substr(4 - RegExp.$1.length),
        );
    for (var k in o)
        if (new RegExp('(' + k + ')').test(format))
            format = format.replace(
                RegExp.$1,
                // eslint-disable-next-line eqeqeq
                RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length),
            );
    return format;
};

const CheckoutBlock = ({ items, mId, totalP, mTitle }) => {
    const navigate = useNavigate();

    const logInfo = useRecoilValue(loginInfo);
    const userAdd = useRecoilValue(userAddress);
    const [sCart, setSCart] = useRecoilState(shoppingCartArr);

    const [deliveryFee] = useState(() => lodash.floor(totalP * 0.04, 2));
    const [tax] = useState(() => lodash.floor(totalP * 0.08, 2));

    const [paymentMethod, setPaymentMethod] = useState(0);
    const [tipPercent, setTipPercent] = useState(0.1);
    const [comment, setComment] = useState('');

    // useEffect(() => {
    //     sCart.filter(merchantEle => {});
    // }, []);

    const confirmSubmit = () => {
        const submitFlag = window.confirm('Are you sure to submit the order?');
        if (submitFlag) {
            const subObj = {
                userId: logInfo.id,
                merchantId: mId,
                address: userAdd,
                phone: logInfo.phone,
                paymentMethod: parseInt(paymentMethod),
                deliveryTime: new Date().format('yyyy-MM-dd hh:mm:ss'),
                deliveryMethod: 0,
                totalPrice: lodash.floor(
                    tax + lodash.floor(totalP * tipPercent, 2) + deliveryFee + totalP,
                    2,
                ),
                deliveryFee,
                tax,
                tip: lodash.floor(totalP * tipPercent, 2),
                comment,
            };

            console.log(subObj);

            axios
                .post('/api/v1/order/insert', subObj)
                .then(res => {
                    console.log(res.data);
                    if (res.data.code === 400) {
                        throw new Error('Insert order Failed! Please double-check...');
                    }
                    setSCart(
                        lodash.cloneDeep(
                            sCart.filter(merchantEle => {
                                return merchantEle[0].merchantId !== mId;
                            }),
                        ),
                    );

                    alert('Checkout Success!!!');
                    navigate('/');
                })
                .catch(err => {
                    console.error(err);
                });
        }

        /* "userId": 1,
      "merchantId": 1,
      "address": "LULALA Road",
      "phone": "6135550143",
      "paymentMethod": 0,
      "deliveryTime": "2022-03-29T22:03:55",
      "deliveryMethod": 0,
      "totalPrice": 10.23,
      "deliveryFee": 1,
      "tax": 1,
      "tip": 2,
      "comment": "comment1",
      "createAt": "2022-03-29T21:33:55",
      "updateAt": "2022-03-29T21:33:55 */
    };

    return (
        <Wrapper>
            <Container>
                <div className="title">Checkout</div>
                <SeparatorBar />
                <AddressModify />
                <SeparatorBar />
                <DisplayAllItems items={items} mTitle={mTitle} />
                <SeparatorBar />
                <PaymentMethod
                    paymentMethod={paymentMethod}
                    setPaymentMethod={setPaymentMethod}
                />
                <SeparatorBar />
                <Tips tipPercent={tipPercent} setTipPercent={setTipPercent} />
                <SeparatorBar />
                {/* {console.log(totalPrice)} */}
                <TotalPrices
                    subTotalPrice={totalP}
                    tipPercent={tipPercent}
                    deliveryFee={deliveryFee}
                    tax={tax}
                />
                <SeparatorBar />
                <Comment comment={comment} setComment={setComment} />
                <SeparatorBar />
                <div className="placeOrderBtn" onClick={() => confirmSubmit()}>
                    Place Order
                </div>
            </Container>
        </Wrapper>
    );
};

export default CheckoutBlock;
