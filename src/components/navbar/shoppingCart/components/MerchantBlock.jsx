import { createContext, useState } from 'react';
import styled from 'styled-components/macro';
import ItemBlock from './ItemBlock';
import TotalBlock from './TotalBlock';

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

const MerchantBlock = ({ merchantName }) => {
    const [infoArr,setInfoArr] = useState(() => [{
        name:"lalalaDddddd",
        price:"10.69",
        amount:1
    },{
        name:"lalala",
        price:"10.69",
        amount:1
    },{
        name:"lalala",
        price:"10.69",
        amount:1
    },{
        name:"lalala",
        price:"10.69",
        amount:1
    },{
        name:"lalala",
        price:"10.69",
        amount:1
    }]);

    // useEffect(() => {
    //     setInfoArr(oriArr => {
    //         // let newArr = lodash.cloneDeep(oriArr);
    //         return oriArr.filter(function(item){
    //             return item.amount === 0;
    //         });
            
    //     })
    // }, [])
    

    return (
        <merchantContext.Provider value={{infoArr,setInfoArr}}>
            <Wrapper >
                <Container>
                    <div className="merchant-link">Cactus Club Cafe</div>
                    <div className="items">
                        {infoArr.map((_,index) => {
                            return (<ItemBlock key={index} index={index}/>)
                        })}
                    </div>
                    <TotalBlock />
                </Container>
            </Wrapper>
        </merchantContext.Provider>
    );
};

export default MerchantBlock;
