import styled from 'styled-components/macro';
import NavBar from './components/navbar/NavBar';
import CheckoutBlock from './components/mainContent/ChectoutBlock';
import { useRecoilValue } from 'recoil';
import { loginInfo } from '@/store/loginStore';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Wrapper = styled.div`
    height: 100%;
    /* background-color: red; */
`;

const Container = styled.div`
    height: 50px;
    /* background-color:greenyellow; */

    > div {
        margin-bottom: 20px;

        &:last-child {
            margin: 0;
        }
    }
`;

const Checkout = props => {
    const logInfo = useRecoilValue(loginInfo);
    const navigate = useNavigate();

    const { state } = useLocation();

    if (JSON.stringify(logInfo) === '{}') {
        alert('Please log in first');
        navigate('/');
    }

    useEffect(() => {
        console.log(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Wrapper>
                <Container>
                    <NavBar logInfo={logInfo} />
                    <CheckoutBlock
                        items={state.items}
                        mId={state.mId}
                        totalP={state.totalPrice}
                        mTitle={state.mTitle}
                    />
                </Container>
            </Wrapper>
        </>
    );
};

export default Checkout;
