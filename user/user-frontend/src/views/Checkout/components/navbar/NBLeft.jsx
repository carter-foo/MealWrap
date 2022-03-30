import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LeftIcon } from '@/assets/icons/left.svg';

const Wrapper = styled.div`
    height: 100%;
`;

const Container = styled.div`
    height: 100%;
    width: 138px;
    display: flex;
    align-items: center;

    .backtomenu {
        display: flex;
        align-items: center;
        /* height: 100%; */

        cursor: pointer;
    }

    .lefticon {
        width: 16px;
        height: 16px;

        margin-right: 10px;
    }

    .title {
    }
`;

const NBLeft = props => {
    let navigate = useNavigate();
    return (
        <Wrapper>
            <Container>
                <div
                    className="backtomenu"
                    onClick={() => {
                        console.log('cccc');
                        navigate('/');
                    }}
                >
                    <LeftIcon className="lefticon" />
                    <div className="title">Back to Menu</div>
                </div>
            </Container>
        </Wrapper>
    );
};

export default NBLeft;
