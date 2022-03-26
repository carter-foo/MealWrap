import styled from 'styled-components/macro';
// import lodash from 'lodash';
import { useRecoilState } from 'recoil';
import { scItemAmountChanging } from '@/store/store';
import { merchantContext } from './MerchantBlock';
import { useContext } from 'react';

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

const AddSub = ({ iIndex, amount }) => {
    const { mIndex } = useContext(merchantContext);

    const [scArr, setSCAmount] = useRecoilState(scItemAmountChanging);

    return (
        <Wrapper>
            <Container>
                <SubButton
                    onClick={() => {
                        const oriAmount = scArr[mIndex].items[iIndex].amount;
                        // console.log(mIndex);
                        setSCAmount({ iIndex, mIndex, newAmount: oriAmount - 1 });
                    }}
                />
                {/* {infoArr[index].amount} */}
                <div className="amount">{amount}</div>
                <AddButton
                    onClick={() => {
                        const oriAmount = scArr[mIndex].items[iIndex].amount;
                        // console.log(mIndex);
                        setSCAmount({ iIndex, mIndex, newAmount: oriAmount + 1 });
                    }}
                />
            </Container>
        </Wrapper>
    );
};

export default AddSub;
