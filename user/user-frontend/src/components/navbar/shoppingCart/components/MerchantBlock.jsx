import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import ItemBlock from './ItemBlock';
import TotalBlock from './TotalBlock';
// import { shoppingCartArr } from '@/store/store';
// import { useSetRecoilState } from 'recoil';

export const merchantContext = createContext();

const Wrapper = styled.div``;
const Container = styled.div`
    > .merchant-link {
        padding: 12px 15px;

        font-size: 17px;
        font-weight: 600;
    }
`;

const MerchantBlock = ({ items }) => {
    const [merchantTitle, setMerchantTitle] = useState('');
    const [totalP, setTotalP] = useState(0.0);

    
    useEffect(() => {
        console.log(items[0].merchantId);
        axios
            .get('/api/v1/merchant/id', {
                params: {
                    id: items[0].merchantId,
                },
            })
            .then(res => {
                // console.log(res.data.data);
                setMerchantTitle(res.data.data.name);
            })
            .catch(err => {
                console.error(err);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items[0].merchantId]);

    useEffect(() => {
        // console.log('items', items);

        setTotalP(0.0);

        items.forEach(ele => {
            setTotalP(ori => ori + ele.quantity * ele.price);
        });
    }, [items]);

    return (
        // <merchantContext.Provider value={{ mIndex }}>
        <Wrapper>
            <Container>
                {/* {console.log(merchantTitle)} */}
                <div className="merchant-link">{merchantTitle}</div>
                <div className="items">
                    {items.map((item, index) => {
                        return <ItemBlock key={index} item={item} />;
                    })}
                </div>
                {/* {console.log(totalP)} */}
                <TotalBlock totalPrice={totalP} mId={items[0].merchantId} items={items} mTitle={merchantTitle}/>
            </Container>
        </Wrapper>
        // </merchantContext.Provider>
    );
};

export default MerchantBlock;
