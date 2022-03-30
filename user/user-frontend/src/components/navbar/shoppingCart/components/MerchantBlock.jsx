import { createContext } from 'react';
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

// const ccc = {
//     merchantName: "Cactus Club Cafe",
//     items: [{
//         name:"lalalaDddddd",
//         price:"10.69",
//         amount:1
//     },{
//         name:"lalala",
//         price:"10.69",
//         amount:1
//     },{
//         name:"lalala",
//         price:"10.69",
//         amount:1
//     },{
//         name:"lalala",
//         price:"10.69",
//         amount:1
//     },{
//         name:"lalala",
//         price:"10.69",
//         amount:1
//     }]
// }

const MerchantBlock = ({ merchant, mIndex }) => {
    return (
        <merchantContext.Provider value={{ mIndex }}>
            <Wrapper>
                <Container>
                    <div className="merchant-link">{merchant.merchantName}</div>
                    <div className="items">
                        {merchant.items.map((item, index) => {
                            return (
                                <ItemBlock
                                    key={index}
                                    iIndex={index}
                                    mIndex={mIndex}
                                    title={item.name}
                                    price={item.price}
                                    amount={item.amount}
                                />
                            );
                        })}
                    </div>
                    <TotalBlock />
                </Container>
            </Wrapper>
        </merchantContext.Provider>
    );
};

export default MerchantBlock;
