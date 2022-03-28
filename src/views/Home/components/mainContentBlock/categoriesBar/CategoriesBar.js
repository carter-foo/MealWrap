import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import CateCube from './CategoryCube';

const Wrapper = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 36.5px;
    margin: 15px 0;

    display: flex;
`;

const ViewAllButton = styled(CateCube)`
    width: 90px;

    cursor: pointer;

    > .title {
        font-size: 14px;
    }
    /* background-color: black; */
`;

const CateBar = () => {
    let navigate = useNavigate();

    return (
        <>
            <Wrapper>
                <CateCube title="lalala" selected={true} />
                <CateCube title="lalala" selected={false} />
                <CateCube title="lalala" selected={false} />
                <CateCube title="lalala" selected={false} />
                <CateCube title="lalala" selected={false} />
                <ViewAllButton
                    title="View All"
                    selected={false}
                    iconSize="24px"
                    onClick={() => {
                        console.log('lalala');
                        navigate('/Categories');
                    }}
                />
            </Wrapper>
        </>
    );
};

export default CateBar;
