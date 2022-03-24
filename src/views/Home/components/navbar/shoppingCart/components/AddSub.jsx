import styled from 'styled-components/macro';
import { useContext } from 'react';
import { merchantContext } from './MerchantBlock';
import lodash from 'lodash';

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

const AddSub = ({ index }) => {
    const { infoArr, setInfoArr } = useContext(merchantContext);

    return (
        <Wrapper>
            <Container>
                <SubButton
                    onClick={() =>
                        setInfoArr(oriArr => {
                            let newArr = lodash.cloneDeep(oriArr);
                            if (newArr[index].amount - 1 === 0) {
                                newArr.splice(index, 1);
                            } else {
                                newArr[index].amount -= 1;
                            }
                            return newArr;
                        })
                    }
                />
                <div className="amount">{infoArr[index].amount}</div>
                <AddButton
                    onClick={() => {
                        setInfoArr(oriArr => {
                            let newArr = lodash.cloneDeep(oriArr);
                            newArr[index].amount += 1;
                            return newArr;
                        });
                    }}
                />
            </Container>
        </Wrapper>
    );
};

export default AddSub;
