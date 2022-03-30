import styled from 'styled-components/macro';
import { useState } from 'react';
// import loginIcon from '@/assets/icons/loginIcon.svg';
import alertIcon from '@/assets/icons/alert.svg';
import cartIcon from '@/assets/icons/cart.svg';
import RoundIcon from '@/components/general/RoundIcon';
import ShoppingCart from './shoppingCart/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginInfo } from '@/store/loginStore';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    flex-grow: 0;

    > .loginBros {
        display: flex;
        align-items: center;
        
        > .title {
            cursor: pointer;
            margin-left: 10px;
        }
    }

    > .iconBros {
        display: flex;
        align-items: center;

        margin-right: 60px;

        > div:first-child {
            margin-right: 10px;
        }
    }
`;

const Icon = styled(RoundIcon)`
    border: 1px solid #e9e9ea;
    cursor: pointer;
    > img {
        /* background-color: #E9E9EA; */
        /* border-radius: 50%; */
        flex-shrink: 0;
    }
`;

const NBRight = () => {
    const [visible, setVisible] = useState(false);

    const info = useRecoilValue(loginInfo);

    const onClose = () => {
        setVisible(false);
    };

    const navigate = useNavigate();

    return (
        <Wrapper>
            {/* <img src={loginIcon} alt='login' /> */}
            <div className="iconBros">
                <Icon
                    onClickFunc={() => {
                        console.log('lalala');
                        // setVisible(!visible);
                    }}
                    src={alertIcon}
                    outerSize="44px"
                    innerSize="25px"
                />
                <Icon
                    src={cartIcon}
                    outerSize="44px"
                    innerSize="25px"
                    className="cart-icon"
                    onClickFunc={() => {
                        // console.log('lalala');
                        setVisible(!visible);
                        // console.log(visible);
                    }}
                />
            </div>

            <div className="loginBros">
                {/* <Icon src={loginIcon} outerSize="44px" innerSize="25px" /> */}
                {console.log(!!info.phone)}
                {!!info.phone ? (
                    <div className="titleWelcome">
                        <p>Welcome! {info.phone}</p>
                    </div>
                ) : (
                    <div className="title" onClick={() => navigate('/login')}>
                        <p>Log In</p>
                    </div>
                )}
            </div>

            <ShoppingCart onClose={onClose} visible={visible} className="shoppingCart" />
        </Wrapper>
    );
};

export default NBRight;
